import { TeamCardDataProps } from 'components/molecules/TeamCard/types';

export default interface TeamSectionProps {
  title: string;
  content: TeamSectionContentProps;
  className?: string;
}

export interface TeamSectionContentProps {
  items: TeamCardDataProps[];
}
