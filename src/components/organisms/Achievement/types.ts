import { ProjectCardDataProps } from 'components/molecules/ProjectCard/types';

export default interface NewsSectionProps {
  title: string;
  content: NewsSectionContentProps;
  className?: string;
}

export interface NewsSectionContentProps {
  items: ProjectCardDataProps[];
}
