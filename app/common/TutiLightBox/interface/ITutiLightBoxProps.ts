import { StaticImageData } from 'next/image';

export interface ITutiLightBoxProps {
  id: string;
  url: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
}
