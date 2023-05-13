import { ListItem } from './components';
import styles from './styles/styles.module.css';
import { faq } from '../../data/faq';
export const FaqList = () => {
  return (
    <div>
      <h1>¿Tienes alguna pregunta?</h1>
      <ListItem questionList={faq} />
    </div>
  );
};
