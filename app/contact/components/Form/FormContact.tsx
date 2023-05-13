import styles from './styles/styles.module.css';

const FormContact = () => {
  return (
    <form className={`${styles.form} ${styles['contact-form']}`}>
      <h1 className={styles.form__heading}>Contact me</h1>
      <div>
        <label className={styles.form__label} htmlFor="name">
          Name
        </label>
        <input
          className={styles.form__control}
          id="name"
          name="name"
          type="text"
          required
        />
      </div>
      <div>
        <label className={styles.form__label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.form__control}
          id="email"
          name="email"
          type="email"
          required
        />
      </div>
      <div>
        <label className={styles.form__label} htmlFor="message">
          Message
        </label>
        <textarea
          className={styles.form__control}
          id="message"
          name="message"
          required
        ></textarea>
      </div>
      <div>
        <button className={styles.form__submit} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormContact;
