import { useState } from 'react';
import { Clock, Droplets, Flame, Sparkles, Trees, Wind } from 'lucide-react';
import { FRAGRANCES, PYRAMID_TIERS } from '../data/fragrances';
import type { NoteTierKey } from '../types/fragrance';

const TIER_ICONS: Record<NoteTierKey, typeof Wind> = {
  top: Wind,
  heart: Flame,
  base: Trees,
};

const TIER_WIDTHS: Record<NoteTierKey, string> = {
  top: 'lg:w-[76%]',
  heart: 'lg:w-[88%]',
  base: 'lg:w-full',
};

export function OlfactoryPyramid() {
  const [activeTier, setActiveTier] = useState<NoteTierKey>('heart');
  const [selectedFragranceId, setSelectedFragranceId] = useState<string>(FRAGRANCES[0].id);

  const selectedTier = PYRAMID_TIERS.find((t) => t.key === activeTier) ?? PYRAMID_TIERS[1];
  const selectedFragrance =
    FRAGRANCES.find((f) => f.id === selectedFragranceId) ?? FRAGRANCES[0];
  const activeNotes = selectedFragrance.pyramid[activeTier];

  return (
    <section
      id="ingredients"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#0c0a09] py-24 sm:py-32"
    >
      {/* Subtle Ambient Warm Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] blur-[140px]"
        style={{ background: 'radial-gradient(circle, #d4af75 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-medium tracking-[0.3em] text-[#d4af75] uppercase">
            Olfactory Architecture
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-[#f5f0e8] sm:text-5xl lg:text-6xl">
            The Fragrance <span className="italic text-[#e6cba0]">Pyramid</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed font-light text-[#b8aea2] sm:text-base">
            Each extrait unfolds in three deliberate movements across the skin — from razor-sharp
            botanicals to resinous woods that linger long past midnight.
          </p>
        </div>

        {/* Interactive Split: Sculptural Tapered Pyramid (Left) + Detailed Dossier (Right) */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left: Tapered Interactive Pyramid Tiers */}
          <div className="flex flex-col items-center gap-4 lg:col-span-6">
            {PYRAMID_TIERS.map((tier) => {
              const Icon = TIER_ICONS[tier.key];
              const isActive = tier.key === activeTier;

              return (
                <button
                  key={tier.key}
                  type="button"
                  onClick={() => setActiveTier(tier.key)}
                  aria-pressed={isActive}
                  className={`group relative w-full ${TIER_WIDTHS[tier.key]} text-left transition-all duration-500 focus:outline-none`}
                >
                  <div
                    className={`relative overflow-hidden border px-6 py-6 backdrop-blur-md transition-all duration-500 sm:px-8 sm:py-7 ${
                      isActive
                        ? 'border-[#d4af75]/65 bg-gradient-to-r from-[#1b1612] via-[#171310] to-[#120f0d] shadow-[0_12px_40px_rgba(212,175,117,0.08)]'
                        : 'border-white/[0.08] bg-[#120f0d]/70 hover:border-[#d4af75]/30 hover:bg-[#161210]'
                    }`}
                  >
                    {/* Active Gold Left Accent Line */}
                    <span
                      className={`absolute inset-y-0 left-0 w-[2px] bg-[#d4af75] transition-opacity duration-500 ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                      }`}
                    />

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                            isActive
                              ? 'border-[#d4af75]/60 bg-[#d4af75]/15 text-[#e6cba0]'
                              : 'border-white/10 bg-white/[0.02] text-[#b8aea2] group-hover:border-[#d4af75]/40 group-hover:text-[#e6cba0]'
                          }`}
                        >
                          <Icon className="h-4 w-4 stroke-[1.5]" />
                        </div>

                        <div>
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-medium tracking-[0.26em] text-[#d4af75] uppercase">
                              Tier {tier.roman}
                            </span>
                            <span className="h-1 w-1 rounded-full bg-white/20" />
                            <span className="text-[10px] tracking-[0.2em] text-[#8e8479] uppercase">
                              {tier.window}
                            </span>
                          </div>
                          <h3 className="mt-1.5 font-serif text-2xl font-normal text-[#f5f0e8] sm:text-[1.75rem]">
                            {tier.label}
                          </h3>
                          <p className="mt-1 text-xs font-light tracking-wide text-[#b8aea2]">
                            {tier.phase}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`mt-1 hidden text-[10px] tracking-[0.2em] uppercase transition-colors sm:inline-block ${
                          isActive ? 'text-[#e6cba0]' : 'text-[#786f66] group-hover:text-[#b8aea2]'
                        }`}
                      >
                        {isActive ? 'Inspecting' : 'Select'}
                      </span>
                    </div>

                    {/* Botanical Chips */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {tier.keyBotanicals.map((botanical) => (
                        <span
                          key={botanical}
                          className={`border px-2.5 py-1 text-[10px] tracking-[0.14em] uppercase transition-colors ${
                            isActive
                              ? 'border-[#d4af75]/30 bg-[#d4af75]/[0.07] text-[#e6cba0]'
                              : 'border-white/[0.07] bg-white/[0.02] text-[#9b9187]'
                          }`}
                        >
                          {botanical}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Interactive Olfactory Dossier Panel */}
          <div className="luxury-border luxury-glass relative p-7 sm:p-10 lg:col-span-6">
            {/* Corner Ornament Accent */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
              <div>
                <p className="text-[10px] font-medium tracking-[0.28em] text-[#d4af75] uppercase">
                  Tier {selectedTier.roman} · {selectedTier.volatility}
                </p>
                <h3 className="mt-1.5 font-serif text-3xl font-light text-[#f5f0e8] sm:text-4xl">
                  {selectedTier.label}
                </h3>
              </div>

              <div className="flex items-center gap-2 border border-white/10 bg-[#0c0a09]/70 px-3.5 py-2 text-[11px] text-[#d6cec3]">
                <Clock className="h-3.5 w-3.5 text-[#d4af75]" />
                <span>{selectedTier.window}</span>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed font-light text-[#cec5ba]">
              {selectedTier.description}
            </p>

            <div className="mt-5 flex items-center gap-2.5 text-xs text-[#b8aea2]">
              <Droplets className="h-3.5 w-3.5 shrink-0 text-[#d4af75]" />
              <span>
                <strong className="font-medium text-[#f5f0e8]">Extraction:</strong>{' '}
                {selectedTier.extraction}
              </span>
            </div>

            {/* Fragrance Switcher inside Dossier */}
            <div className="mt-8 border-t border-white/[0.08] pt-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-[10px] font-medium tracking-[0.26em] text-[#b8aea2] uppercase">
                  <Sparkles className="h-3 w-3 text-[#d4af75]" />
                  <span>Inspect Composition By Extrait</span>
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {FRAGRANCES.map((frag) => {
                  const active = frag.id === selectedFragrance.id;
                  return (
                    <button
                      key={frag.id}
                      type="button"
                      onClick={() => setSelectedFragranceId(frag.id)}
                      className={`border px-3.5 py-2 text-[11px] tracking-[0.16em] uppercase transition-all duration-300 ${
                        active
                          ? 'border-[#d4af75] bg-[#d4af75]/15 text-[#e6cba0]'
                          : 'border-white/10 bg-white/[0.02] text-[#9b9187] hover:border-white/25 hover:text-[#f5f0e8]'
                      }`}
                    >
                      {frag.name}
                    </button>
                  );
                })}
              </div>

              {/* Exact Single-Origin Notes for Chosen Tier + Fragrance */}
              <div className="mt-6 space-y-4">
                {activeNotes.map((note) => (
                  <div
                    key={note.name}
                    className="border border-white/[0.07] bg-[#0c0a09]/70 p-4 transition-colors hover:border-[#d4af75]/30"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-serif text-xl text-[#f5f0e8]">{note.name}</h4>
                      <span className="text-[10px] tracking-[0.2em] text-[#d4af75] uppercase">
                        {note.origin}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed font-light text-[#b8aea2]">
                      {note.character}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <blockquote className="mt-7 border-l border-[#d4af75]/50 pl-4 font-serif text-lg italic text-[#e6cba0]/90">
              {selectedTier.accentQuote}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
