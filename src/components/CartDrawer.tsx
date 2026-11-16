import { useState } from 'react';
import { Check, Minus, Plus, ShieldCheck, ShoppingBag, Trash2, X } from 'lucide-react';
import type { CartItem, FragranceSize } from '../types/fragrance';

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: string, size: FragranceSize, delta: number) => void;
  onRemoveItem: (id: string, size: FragranceSize) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [checkedOut, setCheckedOut] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => {
    const unit = item.size === '50ml' ? item.fragrance.price50ml : item.fragrance.price100ml;
    return sum + unit * item.quantity;
  }, 0);

  const handleCheckout = () => {
    setCheckedOut(true);
    window.setTimeout(() => {
      onClearCart();
      setCheckedOut(false);
      onClose();
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Panel */}
      <aside
        className="relative z-10 flex h-full w-full max-w-md flex-col justify-between border-l border-[#d4af75]/25 bg-[#0e0c0a]"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Bag"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-4 w-4 text-[#d4af75]" />
            <h2 className="font-serif text-2xl font-normal text-[#f5f0e8]">Your Selection</h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 p-2 text-[#b8aea2] transition hover:border-[#d4af75]/50 hover:text-[#f5f0e8]"
            aria-label="Close shopping bag"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {checkedOut ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af75] bg-[#d4af75]/15 text-[#e6cba0]">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-3xl text-[#f5f0e8]">Atelier Order Prepared</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed font-light text-[#b8aea2]">
                Thank you. Two complimentary 2ml discovery vials will accompany your wrapped
                flacons.
              </p>
            </div>
          ) : items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="h-10 w-10 text-[#786f66] stroke-[1]" />
              <h3 className="mt-5 font-serif text-2xl text-[#f5f0e8]">Your bag is empty</h3>
              <p className="mt-2 max-w-xs text-xs leading-relaxed font-light text-[#8e8479]">
                Explore our signature extraits to compose your personal evening ritual.
              </p>
              <a
                href="#collections"
                onClick={onClose}
                className="mt-6 border border-[#d4af75]/50 px-6 py-3 text-[10px] tracking-[0.24em] text-[#e6cba0] uppercase transition hover:bg-[#d4af75] hover:text-[#0c0a09]"
              >
                Explore Extraits
              </a>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => {
                const unitPrice =
                  item.size === '50ml' ? item.fragrance.price50ml : item.fragrance.price100ml;
                return (
                  <div
                    key={`${item.fragrance.id}-${item.size}`}
                    className="flex gap-4 border border-white/[0.08] bg-[#14110f] p-4"
                  >
                    <img
                      src={item.fragrance.image}
                      alt={item.fragrance.name}
                      className="h-24 w-20 shrink-0 object-cover"
                    />
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif text-lg text-[#f5f0e8]">
                            {item.fragrance.name}
                          </h3>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.fragrance.id, item.size)}
                            className="text-[#786f66] transition hover:text-[#e6cba0]"
                            aria-label={`Remove ${item.fragrance.name}`}
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <p className="text-[10px] tracking-[0.2em] text-[#d4af75] uppercase">
                          Extrait · {item.size}
                        </p>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="inline-flex items-center border border-white/10 bg-[#0c0a09]">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.fragrance.id, item.size, -1)}
                            className="p-1.5 text-[#b8aea2] transition hover:text-[#f5f0e8]"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-3 text-xs text-[#f5f0e8]">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.fragrance.id, item.size, 1)}
                            className="p-1.5 text-[#b8aea2] transition hover:text-[#f5f0e8]"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        <span className="font-serif text-lg text-[#e6cba0]">
                          ${unitPrice * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="border border-[#d4af75]/20 bg-[#d4af75]/[0.05] p-4 text-xs text-[#cec5ba]">
                Complimentary linen wrapping and two 2ml glass discovery vials included with every
                salon order.
              </div>
            </div>
          )}
        </div>

        {/* Footer / Subtotal */}
        {items.length > 0 && !checkedOut && (
          <div className="border-t border-white/[0.08] bg-[#120f0d] px-6 py-6">
            <div className="flex items-baseline justify-between">
              <span className="text-xs tracking-[0.22em] text-[#b8aea2] uppercase">Subtotal</span>
              <span className="font-serif text-3xl text-[#e6cba0]">${subtotal}</span>
            </div>
            <p className="mt-1.5 flex items-center gap-1.5 text-[11px] font-light text-[#8e8479]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#d4af75]" />
              <span>Complimentary insured express shipping</span>
            </p>

            <button
              type="button"
              onClick={handleCheckout}
              className="mt-5 flex w-full items-center justify-center border border-[#d4af75] bg-[#d4af75] px-6 py-4 text-[11px] font-semibold tracking-[0.24em] text-[#0c0a09] uppercase transition hover:bg-[#e6cba0]"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
