import { FC } from 'react';

import { TutiImg } from '@app/common';
import Image from 'next/image';

import { ITutiLightBoxProps } from './interface';
import styles from './styles/TutiLightBox.module.css';

export const TutiLightBox: FC<ITutiLightBoxProps> = ({
  id,
  url,
  alt,
  width,
  height,
}: ITutiLightBoxProps) => {
  const lightboxId = `lightbox-${id}`;

  return (
    <>
      <a href={`#${lightboxId}`}>
        <TutiImg url={url} alt={alt} width={width} height={height} />
      </a>
      <a href="#" className={styles.lightbox} id={lightboxId}>
        <Image src={url} alt={alt} width={width} height={height} />
      </a>
    </>
  );
};
