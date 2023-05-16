import { ListItem } from './components';
import { faq } from '../../data/faq';
export const Faq = () => {
  return (
    <div>
      <h1>¿Tienes alguna pregunta?</h1>
      <ListItem questionList={faq} />
    </div>
  );
};
