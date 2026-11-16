import { useState } from 'react';
import { Check, Eye, Plus, ShoppingBag } from 'lucide-react';
import { FRAGRANCES } from '../data/fragrances';
import type { Fragrance, FragranceSize } from '../types/fragrance';

interface ProductGridProps {
  onAddToBag: (fragrance: Fragrance, size: FragranceSize) => void;
  onInspectFragrance: (fragrance: Fragrance) => void;
}

export function ProductGrid({ onAddToBag, onInspectFragrance }: ProductGridProps) {
  const [selectedSizes, setSelectedSizes] = useState<Record<string, FragranceSize>>(() =>
    Object.fromEntries(FRAGRANCES.map((item) => [item.id, '50ml']))
  );
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const handleSizeChange = (id: string, size: FragranceSize) => {
    setSelectedSizes((prev) => ({ ...prev, [id]: size }));
  };

  const handleAdd = (fragrance: Fragrance) => {
    const size = selectedSizes[fragrance.id] ?? '50ml';
    onAddToBag(fragrance, size);
    setJustAddedId(fragrance.id);
    window.setTimeout(() => {
      setJustAddedId((current) => (current === fragrance.id ? null : current));
    }, 1500);
  };

  return (
    <section
      id="collections"
      className="relative border-t border-white/[0.06] bg-[#100d0b] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-8 border-b border-white/[0.08] pb-10 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-[11px] font-medium tracking-[0.3em] text-[#d4af75] uppercase">
              The Signature Collection
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-[#f5f0e8] sm:text-5xl lg:text-6xl">
              Three Nocturnal <span className="italic text-[#e6cba0]">Extraits</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed font-light text-[#b8aea2]">
            Formulated at pure extrait concentration for extraordinary skin longevity. Individually
            numbered and presented in refillable French smoked glass.
          </p>
        </div>

        {/* 3-Column Signature Fragrances Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {FRAGRANCES.map((fragrance) => {
            const activeSize = selectedSizes[fragrance.id] ?? '50ml';
            const price = activeSize === '50ml' ? fragrance.price50ml : fragrance.price100ml;
            const isAdded = justAddedId === fragrance.id;

            return (
              <article
                key={fragrance.id}
                className="group relative flex flex-col border border-white/[0.08] bg-[#14110f]/90 transition-all duration-500 hover:border-[#d4af75]/45 hover:shadow-[0_24px_60px_rgba(0,0,0,0.65)]"
              >
                {/* Studio Product Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#0c0a09]">
                  <img
                    src={fragrance.image}
                    alt={`${fragrance.name} luxury perfume flacon`}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Subtle Gradient & Metadata Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#14110f] via-transparent to-black/25" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="truncate border border-white/15 bg-[#0c0a09]/75 px-3 py-1 text-[10px] font-medium tracking-[0.2em] text-[#e6cba0] uppercase backdrop-blur-md">
                      {fragrance.number} · {fragrance.family}
                    </span>

                    <button
                      type="button"
                      onClick={() => onInspectFragrance(fragrance)}
                      className="inline-flex shrink-0 items-center gap-1.5 border border-white/15 bg-[#0c0a09]/75 px-2.5 py-1 text-[10px] tracking-[0.18em] text-[#f5f0e8] uppercase backdrop-blur-md transition-colors hover:border-[#d4af75] hover:text-[#e6cba0]"
                      aria-label={`Inspect olfactory notes of ${fragrance.name}`}
                    >
                      <Eye className="h-3 w-3" />
                      <span>Notes</span>
                    </button>
                  </div>
                </div>

                {/* Card Details */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-serif text-3xl font-normal tracking-tight text-[#f5f0e8] transition-colors group-hover:text-[#e6cba0]">
                        {fragrance.name}
                      </h3>
                      <span className="font-serif text-2xl font-light text-[#e6cba0]">
                        ${price}
                      </span>
                    </div>

                    <p className="mt-1 text-[10px] font-medium tracking-[0.22em] text-[#8e8479] uppercase">
                      {fragrance.concentration}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed font-light text-[#cec5ba]">
                      {fragrance.shortNotes}
                    </p>
                  </div>

                  {/* Size Toggle + Add to Bag */}
                  <div className="mt-7 space-y-4 border-t border-white/[0.08] pt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-[0.22em] text-[#8e8479] uppercase">
                        Flacon Size
                      </span>
                      <div className="inline-flex border border-white/10 bg-[#0c0a09] p-0.5">
                        {(['50ml', '100ml'] as FragranceSize[]).map((size) => {
                          const selected = activeSize === size;
                          return (
                            <button
                              key={size}
                              type="button"
                              onClick={() => handleSizeChange(fragrance.id, size)}
                              className={`px-3 py-1 text-[10px] font-medium tracking-[0.18em] uppercase transition-colors ${
                                selected
                                  ? 'bg-[#d4af75] text-[#0c0a09]'
                                  : 'text-[#9b9187] hover:text-[#f5f0e8]'
                              }`}
                            >
                              {size}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAdd(fragrance)}
                      className={`group/btn relative flex w-full items-center justify-center gap-2.5 overflow-hidden border px-6 py-3.5 text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 ${
                        isAdded
                          ? 'border-[#d4af75] bg-[#d4af75] text-[#0c0a09]'
                          : 'border-[#d4af75]/45 bg-transparent text-[#f5f0e8] hover:border-[#d4af75] hover:bg-[#d4af75] hover:text-[#0c0a09]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="h-3.5 w-3.5 stroke-[2]" />
                          <span>Added to Bag</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="h-3.5 w-3.5 stroke-[1.5]" />
                          <span>Add to Bag</span>
                          <Plus className="h-3 w-3 opacity-70 transition-transform duration-300 group-hover/btn:rotate-90" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
