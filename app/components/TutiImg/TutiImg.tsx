import { FC } from 'react';

import Image from 'next/image';

import { ITutiImgProps } from './interface';
import style from './styles/TutiImg.module.css';
export const TutiImg: FC<ITutiImgProps> = ({
  url,
  alt,
  width,
  height,
}: ITutiImgProps) => {
  const imageProps = {
    className: style.TutiImg__container,
    width,
    height,
    src: url,
    alt,
  };

  return <Image {...imageProps} />;
};
