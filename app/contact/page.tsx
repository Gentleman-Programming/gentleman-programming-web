import { Card, FormContact } from './components';
import styles from './styles.module.css';

export const metadata = {
  title: 'Contact',
};

const Contact = () => (
  <div className={styles.container}>
    <section className={styles['grid-contact']}>
      <div className={styles['grid-contact__form']}>
        <FormContact />
      </div>
      <div className={styles['grid-contact__social']}>
        <Card />
      </div>
    </section>
    <section className={styles['section-question']}>
      <h1>¿Tienes alguna pregunta?</h1>
      <section className={styles.accordion}>
        <input type="checkbox" name="collapse" id="handle1" />
        <h2 className={styles.handle}>
          <label htmlFor="handle1">¿Quién soy?</label>
        </h2>
        <div className={styles.content}>
          <p className={styles.paragraph}>
            <strong>Who is me?</strong>Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Architecto nam similique quaerat voluptas
            perspiciatis eum quas nulla laborum magnam sit sapiente deserunt
            nesciunt consequatur consectetur distinctio, quam facilis quasi ut
            itaque unde adipisci voluptate? At fugit illo, fuga veritatis nemo
            libero molestias consectetur maiores esse et porro nisi beatae earum
            doloribus non deleniti dolorum vel corporis nihil maxime voluptatem
            incidunt officia perspiciatis quisquam. Sit numquam aliquid sed,
            sint quibusdam voluptates adipisci quam magnam esse in.
          </p>
        </div>
      </section>
      <section className={styles.accordion}>
        <input type="checkbox" name="collapse" id="handle2" />
        <h2 className={styles.handle}>
          <label htmlFor="handle2">¿Por que seguirme?</label>
        </h2>
        <div className={styles.content}>
          <p className={styles.paragraph}>
            <strong>Its me:</strong> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis sit consequuntur perferendis sunt
            necessitatibus assumenda explicabo, atque mollitia ea provident?
            Laboriosam quaerat, fugiat voluptate nisi rem nihil velit dolorum
            accusantium, quam nulla deleniti cum odio! Nemo excepturi,
            laboriosam accusantium recusandae expedita perferendis soluta
            voluptatibus cumque inventore dolore dolorem facilis blanditiis.
          </p>
        </div>
      </section>
    </section>
  </div>
);

export default Contact;
