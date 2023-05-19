import '@app/styles/global.css';

import { Container } from './components';
import style from './page.module.css';
export const metadata = {
  title: 'GP -> DISCORD',
};
export default function Discord() {
  return (
    <div className={style.discord__theme}>
      <Container />
    </div>
  );
}
