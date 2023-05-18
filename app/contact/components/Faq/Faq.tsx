import { ListItem } from './components';
import { FAQ } from './components/ListItem/data';

export const Faq = () => {
  return (
    <div>
      <h1>¿Tienes alguna pregunta?</h1>
      <ListItem questionList={FAQ} />
    </div>
  );
};
