export default interface TeamCardProps {
  data: TeamCardDataProps;
  className: string;
}

export interface TeamCardDataProps {
  title: string;
  description: string;
  image: string;
}
