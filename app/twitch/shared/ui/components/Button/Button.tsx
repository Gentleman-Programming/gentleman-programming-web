import Link from 'next/link';

import ButtonStyle from './Button.module.scss';
interface Props {
  children: any;
}

export default function Button({ children = '' }: Props) {
  return (
    <Link
      href="https://id.twitch.tv/oauth2/authorize?client_id=qg7gles9g8ol7vaxzcd35rqwm0hn1b&redirect_uri=http://localhost:3000/twitch&response_type=token&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls"
      // href="https://www.twitch.tv/gentleman_programming/schedule"
      className={ButtonStyle.Nav__Link}
    >
      {children}
    </Link>
  );
}
