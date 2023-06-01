import { FC } from 'react';

import style from './styles/InframeContainer.module.css';

interface PropsIframe {
  width: string;
  height: string;
  src: string;
  title?: string;
  allow?: string;
  allowFullScreen?: boolean;
}

export const IframeContainer: FC<PropsIframe> = ({
  width,
  height,
  src,
  title,
  allow,
  allowFullScreen,
}: PropsIframe) => {
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
