export type PageId =
  | 'home'
  | 'about'
  | 'solutions'
  | 'why-skymax'
  | 'support-amc'
  | 'pricing'
  | 'contact'
  | 'solution-detail';

export type SolutionId =
  | 'printing-document-management'
  | 'it-hardware-office-automation'
  | 'corporate-procurement'
  | 'corporate-gifting'
  | 'travel-event-management'
  | 'training-solutions'
  | 'wellness-solutions';

export interface Solution {
  id: SolutionId;
  title: string;
  category: 'Business Infrastructure' | 'Business Services' | 'People & Development';
  shortDesc: string;
  description: string;
  highlights: string[];
  keyOfferings: { title: string; description: string }[];
  benefits: string[];
  challengesSolved: string[];
  process: { step: number; title: string; description: string }[];
  faq: { question: string; answer: string }[];
}

export interface Pillar {
  number: number;
  title: string;
  subtitle: string;
  description: string;
}

export interface TrustIndicator {
  title: string;
  description: string;
}

export interface FeatureCard {
  title: string;
  description: string;
}
