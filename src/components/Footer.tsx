import { useState, type FormEvent } from 'react';
import { ArrowRight, Check, Instagram, Mail, MapPin, Share2 } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="relative border-t border-[#d4af75]/20 bg-[#090807] pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Newsletter Banner: Join the Scent Circle */}
        <div className="grid gap-10 border-b border-white/[0.08] pb-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-medium tracking-[0.3em] text-[#d4af75] uppercase">
              Private Correspondence
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-[#f5f0e8] sm:text-4xl">
              Join the <span className="italic text-[#e6cba0]">Scent Circle</span>
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed font-light text-[#b8aea2]">
              Receive private access to numbered winter harvests, Grasse cellar dispatches, and an
              invitation for two complimentary discovery vials with your first order.
            </p>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            {subscribed ? (
              <div className="flex items-center gap-3 border border-[#d4af75]/45 bg-[#d4af75]/10 px-6 py-4 text-sm text-[#e6cba0]">
                <Check className="h-4 w-4 shrink-0" />
                <span>
                  Welcome to the Scent Circle. Your private atelier dispatch is on its way.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="scent-circle-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="scent-circle-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 border border-white/15 bg-[#120f0d] px-5 py-4 text-sm text-[#f5f0e8] placeholder-[#786f66] transition focus:border-[#d4af75] focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2.5 border border-[#d4af75] bg-[#d4af75] px-7 py-4 text-[11px] font-semibold tracking-[0.24em] text-[#0c0a09] uppercase transition hover:bg-[#e6cba0]"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
            <p className="mt-3 text-[11px] font-light text-[#786f66]">
              Dispatched once monthly. Unsubscribe effortlessly at any time.
            </p>
          </div>
        </div>

        {/* Multi-Column Links & Boutiques */}
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="font-serif text-2xl tracking-[0.28em] text-[#f5f0e8]">
              AURA NOIR
            </span>
            <p className="mt-4 max-w-xs text-xs leading-relaxed font-light text-[#9b9187]">
              Independent haute parfumerie dedicated to dark botanical architecture, small-batch
              maceration, and enduring skin sillage.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#top"
                aria-label="Aura Noir on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#b8aea2] transition hover:border-[#d4af75]/60 hover:text-[#d4af75]"
              >
                <Instagram className="h-4 w-4 stroke-[1.5]" />
              </a>
              <a
                href="#top"
                aria-label="Share Aura Noir"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#b8aea2] transition hover:border-[#d4af75]/60 hover:text-[#d4af75]"
              >
                <Share2 className="h-4 w-4 stroke-[1.5]" />
              </a>
              <a
                href="mailto:concierge@auranoir.paris"
                aria-label="Email Aura Noir Concierge"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#b8aea2] transition hover:border-[#d4af75]/60 hover:text-[#d4af75]"
              >
                <Mail className="h-4 w-4 stroke-[1.5]" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-medium tracking-[0.26em] text-[#d4af75] uppercase">
              The House
            </h3>
            <ul className="mt-4 space-y-3 text-xs font-light text-[#b8aea2]">
              <li>
                <a href="#collections" className="transition hover:text-[#f5f0e8]">
                  Signature Extraits
                </a>
              </li>
              <li>
                <a href="#ingredients" className="transition hover:text-[#f5f0e8]">
                  Olfactory Pyramid
                </a>
              </li>
              <li>
                <a href="#story" className="transition hover:text-[#f5f0e8]">
                  Our Heritage
                </a>
              </li>
              <li>
                <a href="#journal" className="transition hover:text-[#f5f0e8]">
                  Atelier Journal
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-medium tracking-[0.26em] text-[#d4af75] uppercase">
              Client Concierge
            </h3>
            <ul className="mt-4 space-y-3 text-xs font-light text-[#b8aea2]">
              <li>
                <a href="#collections" className="transition hover:text-[#f5f0e8]">
                  Complimentary Sample Vials
                </a>
              </li>
              <li>
                <a href="#story" className="transition hover:text-[#f5f0e8]">
                  Flacon Refill Program
                </a>
              </li>
              <li>
                <a href="#journal" className="transition hover:text-[#f5f0e8]">
                  Insured Worldwide Courier
                </a>
              </li>
              <li>
                <a href="mailto:concierge@auranoir.paris" className="transition hover:text-[#f5f0e8]">
                  concierge@auranoir.paris
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-medium tracking-[0.26em] text-[#d4af75] uppercase">
              Flagship Salons
            </h3>
            <ul className="mt-4 space-y-3 text-xs font-light text-[#b8aea2]">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d4af75]/80" />
                <span>Paris · 18 Rue des Francs-Bourgeois</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d4af75]/80" />
                <span>London · 42 Mount Street, Mayfair</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d4af75]/80" />
                <span>Grasse · Domaine des Ombres Atelier</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-[11px] font-light text-[#786f66] sm:flex-row">
          <p>© {new Date().getFullYear()} Maison Aura Noir Paris. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>IFRA Certified · Cruelty-Free</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
