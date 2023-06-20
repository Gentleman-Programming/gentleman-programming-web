import { FC } from 'react';

import { FaqData } from './data';
import styles from './styles/listItem.module.css';

interface Props {
  questionList: FaqData[];
}

export const ListItem: FC<Props> = ({ questionList }: Props) => {
  return (
    <>
      {questionList?.map((question: FaqData) => (
        <section className={styles.accordion} key={question.id}>
          <input type="checkbox" name="collapse" id={`handle${question.id}`} />
          <h2 className={styles.handle}>
            <label htmlFor={`handle${question.id}`}>{question.question}</label>
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
