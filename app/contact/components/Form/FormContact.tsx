import styles from './styles.module.css';

const FormContact = () => {
  return (
    <form className={styles.form}>
      <div className={styles.form__group}>
        <input
          type="text"
          className={styles.form__input}
          placeholder="Full name"
          id="name"
          required
        />
        <label htmlFor="name" className={styles.form__label}>
          Nombre
        </label>
      </div>
      <div className={styles.form__group}>
        <input
          type="email"
          className={styles.form__input}
          placeholder="Email address"
          id="email"
          required
        />
        <label htmlFor="email" className={styles.form__label}>
          Email address
        </label>
      </div>

      <div className={styles.form__group}>
        <textarea
          className={styles.form__input}
          placeholder="Message"
          id="message"
          required
        />
        <label htmlFor="email" className={styles.form__label}>
          Message
        </label>
      </div>
    </form>
  );
};
export default FormContact;
