import { FC } from 'react';

import Image from 'next/image';

import { ITutiImgProps } from './interface';
import style from './styles/TutiImg.module.css';
import { TutiLoaderIcon } from '../Icons';

export const TutiImg: FC<ITutiImgProps> = ({
  url,
  alt,
  width,
  height,
}: ITutiImgProps) => {
  return (
    <Image
      className={style.TutiImg__container}
      width={width}
      height={height}
      src={url}
      alt={alt}
    />
  );
};
