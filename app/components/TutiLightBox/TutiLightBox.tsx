import { FC } from 'react';

import Image from 'next/image';

import { ITutiLightBoxProps } from './interface';
import styles from './styles/TutiLightBox.module.css';
import { TutiImg } from '../TutiImg';

export const TutiLightBox: FC<ITutiLightBoxProps> = ({
  id,
  url,
  alt,
  width,
  height,
}: ITutiLightBoxProps) => {
  let auxId = '0';
  if (auxId !== id) {
    auxId = id;
  }

  return (
    <>
      <a href={`#img${id}`}>
        <TutiImg url={url} alt={alt} width={width} height={height} />
      </a>
      <a href="#" className={styles.lightbox} id={`img${id}`}>
        <Image src={url} alt={alt} width={width} height={height} />
      </a>
    </>
  );
};
