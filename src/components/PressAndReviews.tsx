import { useState } from 'react';
import { ArrowUpRight, BookOpen, Quote, Star, X } from 'lucide-react';
import { CUSTOMER_REVIEWS, JOURNAL_ENTRIES, PRESS_MENTIONS } from '../data/fragrances';
import type { JournalEntry } from '../types/fragrance';

export function PressAndReviews() {
  const [activePressIndex, setActivePressIndex] = useState(0);
  const [activeJournal, setActiveJournal] = useState<JournalEntry | null>(null);

  const activePress = PRESS_MENTIONS[activePressIndex];

  return (
    <section
      id="journal"
      className="relative border-t border-white/[0.06] bg-[#100d0b] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Part 1: Press Spotlight */}
        <div className="border-b border-white/[0.08] pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[11px] font-medium tracking-[0.3em] text-[#d4af75] uppercase">
              Critical Acclaim & Press
            </p>

            <div className="mt-8 flex justify-center">
              <Quote className="h-7 w-7 text-[#d4af75]/55 stroke-[1.25]" />
            </div>

            <blockquote className="mt-6 min-h-[112px] font-serif text-2xl leading-relaxed font-light italic text-[#f5f0e8] sm:text-3xl lg:text-[2.35rem]">
              {activePress.quote}
            </blockquote>

            <p className="mt-5 text-[11px] tracking-[0.28em] text-[#d4af75] uppercase">
              {activePress.publication} · {activePress.issue}
            </p>

            {/* Publication Switcher */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {PRESS_MENTIONS.map((item, idx) => {
                const selected = idx === activePressIndex;
                return (
                  <button
                    key={item.publication}
                    type="button"
                    onClick={() => setActivePressIndex(idx)}
                    className={`border px-3 py-3.5 text-center transition-all duration-300 sm:px-4 sm:py-4 ${
                      selected
                        ? 'border-[#d4af75]/60 bg-[#d4af75]/10 text-[#f5f0e8]'
                        : 'border-white/[0.07] bg-[#14110f]/70 text-[#8e8479] hover:border-white/20 hover:text-[#d6cec3]'
                    }`}
                  >
                    <span className="block font-serif text-xs tracking-[0.08em] sm:text-base sm:tracking-[0.14em]">
                      {item.publication}
                    </span>
                    <span className="mt-1 block text-[9px] tracking-[0.18em] text-[#d4af75]/80 uppercase sm:tracking-[0.24em]">
                      {item.issue}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Part 2: Verified Collector Reflections */}
        <div className="mt-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-medium tracking-[0.3em] text-[#d4af75] uppercase">
                Collector Impressions
              </p>
              <h2 className="mt-3 font-serif text-3xl font-light text-[#f5f0e8] sm:text-4xl">
                Worn Into the <span className="italic text-[#e6cba0]">Late Hours</span>
              </h2>
            </div>
            <p className="text-xs tracking-[0.18em] text-[#8e8479] uppercase">
              4.98 / 5 Average Rating · Verified Salon Orders
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {CUSTOMER_REVIEWS.map((review) => (
              <article
                key={review.id}
                className="flex flex-col justify-between border border-white/[0.08] bg-[#14110f]/80 p-7 transition-colors duration-300 hover:border-[#d4af75]/35"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#d4af75]" aria-label="5 out of 5 stars">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Star key={idx} className="h-3.5 w-3.5 fill-[#d4af75] text-[#d4af75]" />
                    ))}
                  </div>

                  <h3 className="mt-4 font-serif text-xl font-normal text-[#f5f0e8]">
                    “{review.title}”
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed font-light text-[#b8aea2]">
                    {review.quote}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/[0.07] pt-4">
                  <p className="text-xs font-medium tracking-wider text-[#f5f0e8]">
                    {review.author}{' '}
                    <span className="font-light text-[#8e8479]">· {review.location}</span>
                  </p>
                  <p className="mt-1 text-[10px] tracking-[0.2em] text-[#d4af75] uppercase">
                    Verified · {review.verifiedPurchase}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Part 3: Atelier Journal Dispatches */}
        <div className="mt-20 border-t border-white/[0.08] pt-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="h-4 w-4 text-[#d4af75]" />
              <span className="text-[11px] font-medium tracking-[0.3em] text-[#d4af75] uppercase">
                The Atelier Journal
              </span>
            </div>
            <span className="hidden text-[10px] tracking-[0.24em] text-[#786f66] uppercase sm:inline">
              Sensory Essays & Harvest Notes
            </span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {JOURNAL_ENTRIES.map((entry) => (
              <div
                key={entry.id}
                className="group flex flex-col justify-between border border-white/[0.08] bg-[#0c0a09]/80 p-7 transition-all duration-300 hover:border-[#d4af75]/45"
              >
                <div>
                  <div className="flex items-center gap-3 text-[10px] tracking-[0.22em] text-[#8e8479] uppercase">
                    <span className="text-[#d4af75]">{entry.tag}</span>
                    <span>·</span>
                    <span>{entry.date}</span>
                    <span>·</span>
                    <span>{entry.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl font-normal text-[#f5f0e8] transition-colors group-hover:text-[#e6cba0]">
                    {entry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed font-light text-[#b8aea2]">
                    {entry.excerpt}
                  </p>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => setActiveJournal(entry)}
                    className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] text-[#e6cba0] uppercase transition-colors hover:text-[#f5f0e8]"
                  >
                    <span>Read Dispatch</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Journal Reader Modal */}
      {activeJournal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setActiveJournal(null)}
        >
          <div
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto border border-[#d4af75]/35 bg-[#120f0d] p-7 sm:p-10"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="journal-modal-title"
          >
            <button
              type="button"
              onClick={() => setActiveJournal(null)}
              className="absolute top-6 right-6 rounded-full border border-white/10 p-2 text-[#b8aea2] transition hover:border-[#d4af75]/50 hover:text-[#f5f0e8]"
              aria-label="Close journal article"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] text-[#d4af75] uppercase">
              <span>{activeJournal.tag}</span>
              <span>·</span>
              <span>{activeJournal.date}</span>
            </div>

            <h3
              id="journal-modal-title"
              className="mt-4 pr-10 font-serif text-3xl font-light text-[#f5f0e8] sm:text-4xl"
            >
              {activeJournal.title}
            </h3>

            <div className="mt-7 space-y-5 border-t border-white/10 pt-7 text-sm leading-relaxed font-light text-[#d0c7bc] sm:text-base">
              {activeJournal.body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
