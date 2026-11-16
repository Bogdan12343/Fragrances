export type FragranceSize = '50ml' | '100ml';

export type NoteTierKey = 'top' | 'heart' | 'base';

export interface OlfactoryNote {
  name: string;
  origin: string;
  character: string;
}

export interface Fragrance {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  family: string;
  concentration: string;
  shortNotes: string;
  story: string;
  price50ml: number;
  price100ml: number;
  image: string;
  intensity: number; // 1-5
  sillage: string;
  longevity: string;
  pyramid: {
    top: OlfactoryNote[];
    heart: OlfactoryNote[];
    base: OlfactoryNote[];
  };
}

export interface CartItem {
  fragrance: Fragrance;
  size: FragranceSize;
  quantity: number;
}

export interface PyramidTier {
  key: NoteTierKey;
  label: string;
  roman: string;
  phase: string;
  window: string;
  volatility: string;
  extraction: string;
  description: string;
  keyBotanicals: string[];
  accentQuote: string;
}

export interface PressMention {
  publication: string;
  issue: string;
  quote: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  verifiedPurchase: string;
  rating: number;
  title: string;
  quote: string;
}

export interface JournalEntry {
  id: string;
  tag: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  body: string[];
}
