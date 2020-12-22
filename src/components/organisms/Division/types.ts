import { DivisionCardDataProps } from 'components/molecules/DivisionCard/types';

export default interface DivisionSectionProps {
  title: string;
  content: DivisionSectionContentProps;
  className?: string;
}

export interface DivisionSectionContentProps {
  items: DivisionCardDataProps[];
}
