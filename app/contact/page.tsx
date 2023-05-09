import Image from 'next/image';

import { FormContact } from './components';
import styles from './styles.module.css';

export const metadata = {
  title: 'Contact',
};

const Contact = () => (
  <section className={`${styles.container} ${styles.formulario}`}>
    <div className={styles.formulario__grid}>
      <div className={styles.formulario__contenido}>
        Contactanos
        <h2 className={styles.formulario__heading}>
          ¿Con tuti? This is a example title
        </h2>
        <form action="#" className="formulario__buscar">
          <div className={styles.formulario__campo}>
            <label className={styles.formulario__label} htmlFor="name">
              Nombre
            </label>
            <input
              className={styles.formulario__input}
              type="text"
              id="name"
              placeholder="Nombre"
            />
          </div>

          <div className={styles.formulario__campo}>
            <label className={styles.formulario__label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.formulario__input}
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>

          <div className={styles.formulario__campo}>
            <label className={styles.formulario__label} htmlFor="message">
              Mensaje
            </label>
            <textarea
              className={styles.formulario__textarea}
              id="message"
              placeholder="Mensaje"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Enviar"
            className={styles.formulario__submit}
          />
        </form>
      </div>
      <div className="formulario__imagen-contenedor">
        <Image
          src="/logo-form.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  </section>
);

export default Contact;
