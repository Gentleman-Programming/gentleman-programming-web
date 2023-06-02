import { StaticImageData } from 'next/image';

export interface ITutiImgProps {
  url: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
}
