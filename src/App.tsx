import { useState } from 'react';
import { BrandStory } from './components/BrandStory';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { FragranceDetailModal } from './components/FragranceDetailModal';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { OlfactoryPyramid } from './components/OlfactoryPyramid';
import { PressAndReviews } from './components/PressAndReviews';
import { ProductGrid } from './components/ProductGrid';
import { SearchModal } from './components/SearchModal';
import type { CartItem, Fragrance, FragranceSize } from './types/fragrance';

export function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inspectedFragrance, setInspectedFragrance] = useState<Fragrance | null>(null);

  const totalBagCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToBag = (fragrance: Fragrance, size: FragranceSize) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.fragrance.id === fragrance.id && item.size === size
      );
      if (existingIndex !== -1) {
        return prev.map((item, idx) =>
          idx === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { fragrance, size, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, size: FragranceSize, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.fragrance.id === id && item.size === size
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: string, size: FragranceSize) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.fragrance.id === id && item.size === size))
    );
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] text-[#f5f0e8]">
      <Navbar
        cartCount={totalBagCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main>
        <HeroSection />
        <OlfactoryPyramid />
        <ProductGrid
          onAddToBag={handleAddToBag}
          onInspectFragrance={(fragrance) => setInspectedFragrance(fragrance)}
        />
        <BrandStory />
        <PressAndReviews />
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCartItems([])}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectFragrance={(fragrance) => setInspectedFragrance(fragrance)}
      />

      <FragranceDetailModal
        fragrance={inspectedFragrance}
        onClose={() => setInspectedFragrance(null)}
        onAddToBag={(fragrance, size) => {
          handleAddToBag(fragrance, size);
          setIsCartOpen(true);
        }}
      />
    </div>
  );
}

export default App;
