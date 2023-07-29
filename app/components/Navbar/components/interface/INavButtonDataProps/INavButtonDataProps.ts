export interface INavButtonDataProps {
  id: string;
  description: string;
  toolTip: string;
  link: string;
  isLive?: Promise<boolean | undefined>;
  img: string;
  mentions?: number;
}
