import { Award, Hourglass, Leaf, RefreshCw } from 'lucide-react';
import { HERO_MEDIA } from '../data/fragrances';

const HERITAGE_PILLARS = [
  {
    icon: Leaf,
    title: '100% Cruelty-Free Botanicals',
    detail:
      'Zero animal-derived fixatives, phthalates, or parabens. All musk and suede nuances are constructed purely from aged roots, birch, and fossilized resins.',
  },
  {
    icon: Hourglass,
    title: 'Ninety-Day Stoneware Maceration',
    detail:
      'Every batch rests quietly in dark Grasse cellars for three full months, allowing harsh volatility to soften into luminous continuity.',
  },
  {
    icon: RefreshCw,
    title: 'Refillable Architectural Glass',
    detail:
      'Heavy French smoked-obsidian flacons designed to be kept for decades and replenished at our Paris, London, and Tokyo salons.',
  },
  {
    icon: Award,
    title: 'Single-Origin Traceability',
    detail:
      'Partnering directly with family distilleries from Reggio Calabria to Madagascar and Les Cayes for fair-harvest raw absolutes.',
  },
];

export function BrandStory() {
  return (
    <section
      id="story"
      className="relative border-t border-white/[0.06] bg-[#0c0a09] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: Framed Editorial Atelier Photography */}
          <div className="relative lg:col-span-5">
            <div className="relative border border-[#d4af75]/25 bg-[#14110f] p-3 sm:p-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={HERO_MEDIA.atelierCraft}
                  alt="Aura Noir Parisian perfumery workbench with amber apothecary bottles, brass balance scale, and raw botanicals"
                  className="h-full w-full object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0a09]/80 via-transparent to-transparent" />
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-white/[0.08] px-1 pt-3 text-[10px] tracking-[0.26em] text-[#b8aea2] uppercase">
                <span>Atelier N° 04</span>
                <span className="text-[#d4af75]">Grasse · Rue Saint-Honoré</span>
              </div>
            </div>

            {/* Master Nose Quote Plaque */}
            <div className="mt-5 border border-[#d4af75]/25 bg-[#13100e]/90 p-5">
              <p className="font-serif text-lg leading-snug italic text-[#f5f0e8]">
                “Perfume should enter a room softly, and remain in memory long after the coat is
                taken.”
              </p>
              <p className="mt-2 text-[10px] tracking-[0.24em] text-[#d4af75] uppercase">
                — Henri Delacroix, Master Nose
              </p>
            </div>
          </div>

          {/* Right: Brand Philosophy & Artisanal Heritage */}
          <div className="lg:col-span-7 lg:pl-4">
            <p className="text-[11px] font-medium tracking-[0.3em] text-[#d4af75] uppercase">
              Our Philosophy & Heritage
            </p>

            <h2 className="mt-4 font-serif text-4xl font-light leading-[1.1] tracking-tight text-[#f5f0e8] sm:text-5xl">
              Crafted in Darkness.{' '}
              <span className="block italic text-[#e6cba0]">Composed Without Compromise.</span>
            </h2>

            <p className="mt-6 text-sm leading-relaxed font-light text-[#cec5ba] sm:text-base">
              Founded between a quiet stone cellar in Grasse and a minimalist salon in Paris, Aura
              Noir rejects mass-market fragrance speed. We work exclusively with high-density raw
              botanicals — three-year-cured iris rhizomes, whole Madagascar vanilla beans, and
              cultivated agarwood — compounded in organic beetroot spirit at extrait strength.
            </p>

            {/* 4 Craftsmanship Pillars */}
            <div className="mt-10 grid gap-6 border-t border-white/[0.08] pt-9 sm:grid-cols-2">
              {HERITAGE_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="group border border-white/[0.07] bg-[#13100e]/70 p-5 transition-colors duration-300 hover:border-[#d4af75]/35"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4af75]/30 bg-[#d4af75]/10 text-[#e6cba0]">
                        <Icon className="h-4 w-4 stroke-[1.5]" />
                      </div>
                      <h3 className="font-serif text-xl font-normal text-[#f5f0e8]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed font-light text-[#b8aea2]">
                      {pillar.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
