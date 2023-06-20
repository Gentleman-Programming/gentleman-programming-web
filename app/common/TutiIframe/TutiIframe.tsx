import { FC } from 'react';

import { ITutiIframeProps } from './interface';
import style from './styles/TutiIframe.module.css';

export const TutiIframe: FC<ITutiIframeProps> = ({
  width = '100%',
  height = '400',
  src,
  title = '',
  allow = '',
  allowFullScreen = false,
}) => {
  const iframeProps = {
    className: style.tutiIframe__iframe,
    width,
    height,
    src,
    title,
    allow,
    allowFullScreen,
  };

  return <iframe {...iframeProps} />;
};
