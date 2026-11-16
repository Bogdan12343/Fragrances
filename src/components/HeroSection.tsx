import { ArrowDownRight, Sparkles } from 'lucide-react';
import { HERO_MEDIA } from '../data/fragrances';

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[96svh] w-full items-center overflow-hidden bg-[#0c0a09] pt-24 pb-16"
    >
      {/* Background Bespoke Bottle Photography */}
      <div className="absolute inset-0">
        <img
          src={HERO_MEDIA.heroBottle}
          alt="Aura Noir smoked obsidian luxury perfume flacon on dark volcanic basalt stone"
          className="h-full w-full object-cover object-[75%_center] opacity-85 sm:object-center sm:opacity-90"
        />
        {/* Sculpted Chiaroscuro Vignettes for Razor-Sharp Typography Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09]/95 via-[#0c0a09]/85 to-[#0c0a09]/60 md:from-[#0c0a09] md:via-[#0c0a09]/72 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-[#0c0a09]/70" />
        <div
          className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #d4af75 0%, transparent 70%)' }}
        />
      </div>

      {/* Main Editorial Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="inline-flex max-w-full items-center gap-2.5 border border-[#d4af75]/25 bg-[#14110f]/80 px-3.5 py-1.5 backdrop-blur-md sm:gap-3 sm:px-4">
            <Sparkles className="h-3 w-3 shrink-0 text-[#d4af75]" />
            <span className="text-[9px] font-medium tracking-[0.2em] text-[#e6cba0] uppercase sm:text-[10px] sm:tracking-[0.28em]">
              Extrait de Parfum · Crafted in Grasse
            </span>
          </div>

          <h1 className="mt-7 font-serif text-[2.75rem] leading-[1.04] font-light tracking-[-0.01em] text-[#f5f0e8] sm:text-6xl lg:text-[5.25rem]">
            Scent as an{' '}
            <span className="block font-normal italic text-[#e6cba0]">
              Invisible Art Form
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-relaxed font-light tracking-wide text-[#c8bfb4] sm:mt-7 sm:text-base">
            Botanical chiaroscuro bottled in smoked obsidian glass. Small-batch extraits macerated
            for ninety days in darkness — composed from cured Madagascar vanilla, aged Assam oud,
            and Florentine iris butter.
          </p>

          {/* Two Refined CTA Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-3.5 sm:mt-10 sm:gap-5">
            <a
              href="#collections"
              className="group inline-flex items-center gap-3 border border-[#d4af75] bg-[#d4af75] px-6 py-3.5 text-[11px] font-semibold tracking-[0.22em] text-[#0c0a09] uppercase transition-all duration-300 hover:bg-[#e6cba0] hover:shadow-[0_0_30px_rgba(212,175,117,0.22)] sm:px-7 sm:py-4 sm:tracking-[0.24em]"
            >
              <span>Explore Collection</span>
              <ArrowDownRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            <a
              href="#ingredients"
              className="inline-flex items-center gap-3 border border-white/20 bg-[#14110f]/70 px-6 py-3.5 text-[11px] font-medium tracking-[0.22em] text-[#f5f0e8] uppercase backdrop-blur-md transition-all duration-300 hover:border-[#d4af75]/70 hover:text-[#e6cba0] sm:px-7 sm:py-4 sm:tracking-[0.24em]"
            >
              <span>Discover the Notes</span>
            </a>
          </div>

          {/* House Craftsmanship Metrics Bar */}
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6 sm:mt-14 sm:gap-6 sm:pt-7">
            <div>
              <p className="font-serif text-lg text-[#e6cba0] sm:text-2xl">32% – 35%</p>
              <p className="mt-1 text-[9px] tracking-[0.14em] text-[#8e8479] uppercase sm:text-[10px] sm:tracking-[0.2em]">
                Pure Extrait Oil
              </p>
            </div>
            <div>
              <p className="font-serif text-lg text-[#e6cba0] sm:text-2xl">90 Days</p>
              <p className="mt-1 text-[9px] tracking-[0.14em] text-[#8e8479] uppercase sm:text-[10px] sm:tracking-[0.2em]">
                Dark Maceration
              </p>
            </div>
            <div>
              <p className="font-serif text-lg text-[#e6cba0] sm:text-2xl">100%</p>
              <p className="mt-1 text-[9px] tracking-[0.14em] text-[#8e8479] uppercase sm:text-[10px] sm:tracking-[0.2em]">
                Cruelty-Free
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Right Edition Indicator */}
      <div className="pointer-events-none absolute right-8 bottom-8 hidden items-center gap-4 lg:flex">
        <span className="h-[1px] w-12 bg-[#d4af75]/40" />
        <span className="text-[10px] tracking-[0.3em] text-[#b8aea2]/80 uppercase">
          Edition 04 · Winter Harvest
        </span>
      </div>
    </section>
  );
}
