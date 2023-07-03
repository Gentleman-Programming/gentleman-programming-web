import Image from 'next/image';

import AvatarStyle from './Avatar.module.scss';
import image from '../../icons/gentleman-logo-70x70.png';

export default function Avatar() {
  return (
    <div className={AvatarStyle.Avatar}>
      <Image
        src={image}
        className={AvatarStyle.AvatarLogo}
        priority
        alt="Logo gentleman Programming"
        width={70}
        height={70}
      />
      <h1 className={AvatarStyle.AvatarTitle}>gentleman_programing</h1>
    </div>
  );
}
