import { createRef } from 'react';

import Image from 'next/image';

import styles from './styles.module.css';

export const metadata = {
  title: 'Contact',
};

const Contact = () => (
  <div className={styles.container}>
    <section className={styles['section-contact']}>
      <div className={styles['section-form']}>
        <h1>Contact</h1>
        <p>Quieres una mentora con de Tuti?</p>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className={styles['section-social']}>
        <h1>Social media links</h1>
        <p>¿Por que no mejor me sigues en mis redes sociales?</p>
        <div className={styles['section-social__links']}>
          <a
            href="https://www.instagram.com/tutidev/"
            target="_blank"
            rel="noreferrer"
          >
            IG
          </a>
          <a
            href="https://www.linkedin.com/in/tutidev/"
            target="_blank"
            rel="noreferrer"
          >
            LI
          </a>
          <a
            href="https://twitter.com/tutidev"
            target="_blank"
            rel="noreferrer"
          >
            TW
          </a>
        </div>
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
