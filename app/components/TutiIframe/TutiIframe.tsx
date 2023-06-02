import { FC } from 'react';

import { ITutiIframeProps } from './interface';
import style from './styles/TutiIframe.module.css';

export const TutiIframe: FC<ITutiIframeProps> = ({
  width,
  height,
  src,
  title,
  allow,
  allowFullScreen,
}: ITutiIframeProps) => {
  return (
    <iframe
      className={style.iframe}
      width={width}
      height={height}
      src={src}
      title={title}
      allow={allow}
      allowFullScreen={allowFullScreen}
    />
  );
};
