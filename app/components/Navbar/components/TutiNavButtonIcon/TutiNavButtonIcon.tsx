import { FC, ReactNode } from 'react';

import { navButtonIconsData } from '../data';
import { INavButtonIconProps } from '../interface';

export const getNavButtonIcon: FC<INavButtonIconProps> = ({
  img,
}: INavButtonIconProps) => {
  const icon =
    navButtonIconsData.find((item) => item.name === img)?.icon ?? null;
  return icon;
};
