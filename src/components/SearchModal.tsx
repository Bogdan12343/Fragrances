import { useEffect, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import { FRAGRANCES } from '../data/fragrances';
import type { Fragrance } from '../types/fragrance';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFragrance: (fragrance: Fragrance) => void;
}

const SUGGESTED_NOTES = ['Vanilla', 'Oud', 'Iris', 'Saffron', 'Amber', 'Cedar'];

export function SearchModal({ isOpen, onClose, onSelectFragrance }: SearchModalProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();
  const matches = FRAGRANCES.filter((frag) => {
    if (!trimmed) return true;
    const allNoteText = [
      ...frag.pyramid.top,
      ...frag.pyramid.heart,
      ...frag.pyramid.base,
    ]
      .map((n) => `${n.name} ${n.origin} ${n.character}`)
      .join(' ');

    return (
      frag.name.toLowerCase().includes(trimmed) ||
      frag.family.toLowerCase().includes(trimmed) ||
      frag.shortNotes.toLowerCase().includes(trimmed) ||
      allNoteText.toLowerCase().includes(trimmed)
    );
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 px-4 pt-20 backdrop-blur-md sm:pt-28"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl border border-[#d4af75]/35 bg-[#120f0d] p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Search Aura Noir Extraits"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex flex-1 items-center gap-3">
            <Search className="h-4 w-4 text-[#d4af75]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by extrait, botanical note, or origin..."
              className="w-full bg-transparent text-sm text-[#f5f0e8] placeholder-[#786f66] focus:outline-none sm:text-base"
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 p-1.5 text-[#b8aea2] transition hover:text-[#f5f0e8]"
            aria-label="Close search"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Quick Botanical Tags */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-[10px] tracking-[0.2em] text-[#786f66] uppercase">Notes:</span>
          {SUGGESTED_NOTES.map((note) => (
            <button
              key={note}
              type="button"
              onClick={() => setQuery(note)}
              className="border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[10px] tracking-[0.16em] text-[#b8aea2] uppercase transition hover:border-[#d4af75]/50 hover:text-[#e6cba0]"
            >
              {note}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="mt-6 max-h-[55vh] space-y-3 overflow-y-auto pr-1">
          {matches.length === 0 ? (
            <p className="py-8 text-center text-sm font-light text-[#8e8479]">
              No compositions matched “{query}”. Try searching Vanilla, Oud, Iris, or Amber.
            </p>
          ) : (
            matches.map((frag) => (
              <button
                key={frag.id}
                type="button"
                onClick={() => {
                  onSelectFragrance(frag);
                  onClose();
                }}
                className="group flex w-full items-center gap-4 border border-white/[0.07] bg-[#0c0a09]/80 p-3 text-left transition hover:border-[#d4af75]/45"
              >
                <img
                  src={frag.image}
                  alt={frag.name}
                  className="h-16 w-12 shrink-0 object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-xl text-[#f5f0e8] group-hover:text-[#e6cba0]">
                      {frag.name}
                    </h3>
                    <span className="font-serif text-lg text-[#e6cba0]">${frag.price50ml}</span>
                  </div>
                  <p className="mt-0.5 text-[10px] tracking-[0.2em] text-[#d4af75] uppercase">
                    {frag.family}
                  </p>
                  <p className="mt-1 line-clamp-1 text-xs font-light text-[#9b9187]">
                    {frag.shortNotes}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-[#786f66] transition group-hover:translate-x-0.5 group-hover:text-[#d4af75]" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
