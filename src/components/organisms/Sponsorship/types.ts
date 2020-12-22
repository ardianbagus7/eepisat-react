import { ReactNode } from 'react';

export default interface SponsorshipSectionProps {
  title: string;
  content: SponsorshipSectionContentProps;
  className?: string;
}

export interface SponsorshipSectionContentProps {
  text: ReactNode;
  items: ReactNode[];
}
