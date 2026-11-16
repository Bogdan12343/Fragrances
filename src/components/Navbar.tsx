import { useEffect, useState } from 'react';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

const NAV_LINKS = [
  { label: 'Collections', href: '#collections' },
  { label: 'Our Story', href: '#story' },
  { label: 'Ingredients', href: '#ingredients' },
  { label: 'Journal', href: '#journal' },
];

export function Navbar({ cartCount, onOpenCart, onOpenSearch }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/[0.08] bg-[#0c0a09]/85 py-3.5 backdrop-blur-xl'
          : 'border-b border-transparent bg-gradient-to-b from-[#0c0a09]/85 via-[#0c0a09]/40 to-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Left: Minimalist Brand Wordmark */}
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/10 p-2 text-[#f5f0e8] transition hover:border-[#d4af75]/50 hover:text-[#d4af75] md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="h-4 w-4" />
          </button>

          <a
            href="#top"
            className="group flex min-w-0 flex-col focus:outline-none"
            aria-label="Aura Noir Home"
          >
            <span className="truncate font-serif text-lg tracking-[0.2em] text-[#f5f0e8] transition-colors group-hover:text-[#d4af75] sm:text-2xl sm:tracking-[0.28em]">
              AURA NOIR
            </span>
            <span className="hidden text-[9px] font-medium tracking-[0.36em] text-[#b8aea2]/80 uppercase sm:block">
              Paris · Grasse
            </span>
          </a>
        </div>

        {/* Center-Aligned Navigation Links */}
        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-[11px] font-medium tracking-[0.22em] text-[#d6cec3] uppercase transition-colors duration-300 hover:text-[#d4af75] after:absolute after:-bottom-1.5 after:left-0 after:h-[1px] after:w-0 after:bg-[#d4af75] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right-Aligned Actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          <button
            type="button"
            onClick={onOpenSearch}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-[#f5f0e8] transition-all duration-300 hover:border-[#d4af75]/50 hover:text-[#d4af75]"
            aria-label="Search fragrances and notes"
          >
            <Search className="h-4 w-4 stroke-[1.5]" />
          </button>

          <button
            type="button"
            onClick={onOpenCart}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-[#f5f0e8] transition-all duration-300 hover:border-[#d4af75]/50 hover:text-[#d4af75]"
            aria-label={`Shopping bag with ${cartCount} items`}
          >
            <ShoppingBag className="h-4 w-4 stroke-[1.5]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#d4af75] px-1 text-[10px] font-semibold text-[#0c0a09] shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          <a
            href="#collections"
            className="hidden items-center justify-center border border-[#d4af75]/45 bg-[#d4af75]/10 px-5 py-2 text-[10px] font-medium tracking-[0.24em] text-[#e6cba0] uppercase transition-all duration-300 hover:border-[#d4af75] hover:bg-[#d4af75] hover:text-[#0c0a09] sm:inline-flex"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-10 flex h-full w-80 max-w-[85vw] flex-col justify-between border-r border-white/10 bg-[#0c0a09] p-8">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <span className="font-serif text-lg tracking-[0.28em] text-[#f5f0e8]">
                  AURA NOIR
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full border border-white/10 p-2 text-[#b8aea2] transition hover:text-[#f5f0e8]"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-7">
                {NAV_LINKS.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-baseline gap-4 font-serif text-2xl tracking-wide text-[#f5f0e8] transition hover:text-[#d4af75]"
                  >
                    <span className="font-sans text-[10px] tracking-[0.2em] text-[#d4af75]/70">
                      0{index + 1}
                    </span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <a
                href="#collections"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center border border-[#d4af75]/60 bg-[#d4af75] px-6 py-3 text-[11px] font-medium tracking-[0.24em] text-[#0c0a09] uppercase transition hover:bg-[#e6cba0]"
              >
                Shop Collection
              </a>
              <p className="mt-4 text-center text-[10px] tracking-[0.24em] text-[#786f66] uppercase">
                Small-Batch Extraits · Paris
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
