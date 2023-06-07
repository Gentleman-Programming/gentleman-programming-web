import { FC, ReactNode } from 'react';

export interface INavButtonIconDataProps {
  id: string;
  name: string;
  icon: ReactNode | string | FC;
}
