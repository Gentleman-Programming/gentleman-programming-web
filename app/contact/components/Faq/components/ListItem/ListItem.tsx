import { Faq } from './data';
import styles from './styles/listItem.module.css';

interface Props {
  questionList: Faq[];
}

const ListItem = ({ questionList }: Props) => {
  return (
    <>
      {questionList?.map((question: Faq, index: number) => (
        <section className={styles.accordion} key={index}>
          <input type="checkbox" name="collapse" id={`handle${index}`} />
          <h2 className={styles.handle}>
            <label htmlFor={`handle${index}`}>{question.question}</label>
          </h2>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              <strong>{question.answer}</strong>
            </p>
          </div>
        </section>
      ))}
    </>
  );
};

export default ListItem;
