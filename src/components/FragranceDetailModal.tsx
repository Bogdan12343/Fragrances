import { useEffect, useState } from 'react';
import { ShoppingBag, Sparkles, X } from 'lucide-react';
import type { Fragrance, FragranceSize } from '../types/fragrance';

interface FragranceDetailModalProps {
  fragrance: Fragrance | null;
  onClose: () => void;
  onAddToBag: (fragrance: Fragrance, size: FragranceSize) => void;
}

export function FragranceDetailModal({
  fragrance,
  onClose,
  onAddToBag,
}: FragranceDetailModalProps) {
  const [size, setSize] = useState<FragranceSize>('50ml');

  useEffect(() => {
    if (!fragrance) return;
    setSize('50ml');
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fragrance, onClose]);

  if (!fragrance) return null;

  const price = size === '50ml' ? fragrance.price50ml : fragrance.price100ml;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative grid max-h-[90vh] w-full max-w-4xl overflow-y-auto border border-[#d4af75]/35 bg-[#120f0d] md:grid-cols-12"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full border border-white/15 bg-[#0c0a09]/80 p-2 text-[#f5f0e8] transition hover:border-[#d4af75]"
          aria-label="Close fragrance details"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Left Bottle Image */}
        <div className="relative aspect-[4/5] bg-[#0c0a09] md:col-span-5 md:aspect-auto">
          <img
            src={fragrance.image}
            alt={fragrance.name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Right Full Pyramid & Specs */}
        <div className="flex flex-col justify-between p-6 sm:p-8 md:col-span-7">
          <div>
            <p className="text-[10px] font-medium tracking-[0.26em] text-[#d4af75] uppercase">
              {fragrance.number} · {fragrance.concentration}
            </p>
            <h3
              id="detail-modal-title"
              className="mt-2 font-serif text-3xl font-light text-[#f5f0e8] sm:text-4xl"
            >
              {fragrance.name}
            </h3>
            <p className="mt-1 font-serif text-lg italic text-[#e6cba0]">
              {fragrance.subtitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed font-light text-[#cec5ba]">
              {fragrance.story}
            </p>

            {/* Full 3-Tier Pyramid */}
            <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
              {(
                [
                  ['Top Notes', fragrance.pyramid.top],
                  ['Heart Notes', fragrance.pyramid.heart],
                  ['Base Notes', fragrance.pyramid.base],
                ] as const
              ).map(([label, notes]) => (
                <div key={label} className="border border-white/[0.06] bg-[#0c0a09]/70 p-3.5">
                  <span className="text-[10px] font-medium tracking-[0.24em] text-[#d4af75] uppercase">
                    {label}
                  </span>
                  <p className="mt-1 text-xs font-light text-[#f5f0e8]">
                    {notes.map((n) => `${n.name} (${n.origin})`).join(' · ')}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-[#b8aea2]">
              <div className="border border-white/[0.06] px-3 py-2">
                <span className="block text-[9px] tracking-[0.22em] text-[#786f66] uppercase">
                  Sillage
                </span>
                <span className="mt-0.5 block text-[#f5f0e8]">{fragrance.sillage}</span>
              </div>
              <div className="border border-white/[0.06] px-3 py-2">
                <span className="block text-[9px] tracking-[0.22em] text-[#786f66] uppercase">
                  Longevity
                </span>
                <span className="mt-0.5 block text-[#f5f0e8]">{fragrance.longevity}</span>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
            <div className="flex items-center gap-3">
              <div className="inline-flex border border-white/15 bg-[#0c0a09] p-0.5">
                {(['50ml', '100ml'] as FragranceSize[]).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSize(option)}
                    className={`px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase transition ${
                      size === option
                        ? 'bg-[#d4af75] text-[#0c0a09]'
                        : 'text-[#9b9187] hover:text-[#f5f0e8]'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <span className="font-serif text-2xl text-[#e6cba0]">${price}</span>
            </div>

            <button
              type="button"
              onClick={() => {
                onAddToBag(fragrance, size);
                onClose();
              }}
              className="inline-flex flex-1 items-center justify-center gap-2 border border-[#d4af75] bg-[#d4af75] px-6 py-3.5 text-[11px] font-semibold tracking-[0.22em] text-[#0c0a09] uppercase transition hover:bg-[#e6cba0] sm:flex-none"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              <span>Add to Bag</span>
              <Sparkles className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
