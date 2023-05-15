import React from 'react';

import { Member } from './Prefooter';
import styles from './prefooter__card.module.css';
import {
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../Footer/Icons';

type Props = {
  member: Member;
};

const PrefooterCard = ({ member }: Props) => {
  return (
    <article key={member.name + ' article'} className={styles.prefooter__card}>
      <div className={styles.prefooter__card_info}>
        <section className={styles.prefooter__card_side}>
          <img
            alt={member.name + ' pic'}
            className={styles.prefooter__card_pic}
            src={member.pic}
          />
          <header className={styles.prefooter__card_header}>
            <p className={styles.prefooter__card_name}>{member.name}</p>
            <p>{member.role}</p>
          </header>
        </section>
        <section className={styles.prefooter__card_description}>
          <p>{member.description}</p>
        </section>
      </div>
      <div className={styles.prefooter__card_info_socials}>
        <a
          href={member.fb}
          style={{ marginBottom: '0.15rem' }}
          target="__blank"
          title="Facebook"
        >
          <FacebookIcon />
        </a>
        <a
          href={member.twitter}
          style={{ marginTop: '0.08rem', marginRight: '0.25rem' }}
          target="__blank"
          title="Twitter"
        >
          <TwitterIcon />
        </a>
        <a
          href={member.linkedin}
          style={{ marginBottom: '0.22rem' }}
          target="__blank"
          title="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a
          href={member.github}
          style={{ marginTop: '0.12rem' }}
          target="__blank"
          title="GitHub"
        >
          <GithubIcon />
        </a>
      </div>
    </article>
  );
};

export default PrefooterCard;
