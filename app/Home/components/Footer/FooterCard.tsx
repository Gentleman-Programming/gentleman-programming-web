import React from 'react';

import { Member } from './Footer';
import styles from './footer__card.module.css';
import { FacebookIcon, GithubIcon, LinkedInIcon, TwitterIcon } from './Icons';

type Props = {
  member: Member;
};

const FooterCard = ({ member }: Props) => {
  if (member.visibility === true)
    return (
      <article key={member.name + ' article'} className={styles.footer__card}>
        <div className={styles.footer__card_info}>
          <section className={styles.footer__card_side}>
            <img
              alt={member.name + ' pic'}
              className={styles.footer__card_pic}
              src={member.pic}
            />
            <header className={styles.footer__card_header}>
              <p className={styles.footer__card_name}>{member.name}</p>
              <p>{member.role}</p>
            </header>
          </section>
          <section className={styles.footer__card_description}>
            <p>{member.description}</p>
          </section>
        </div>
        <div className={styles.footer__card_info_socials}>
          {member.fb !== '' ? (
            <a
              href={member.fb}
              style={{ marginBottom: '0.15rem' }}
              target="__blank"
              title="Facebook"
            >
              <FacebookIcon />
            </a>
          ) : null}
          {member.twitter !== '' ? (
            <a
              href={member.twitter}
              style={{ marginTop: '0.08rem', marginRight: '0.25rem' }}
              target="__blank"
              title="Twitter"
            >
              <TwitterIcon />
            </a>
          ) : null}
          {member.linkedin !== '' ? (
            <a
              href={member.linkedin}
              style={{ marginBottom: '0.22rem' }}
              target="__blank"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          ) : null}
          {member.github !== '' ? (
            <a
              href={member.github}
              style={{ marginTop: '0.12rem' }}
              target="__blank"
              title="GitHub"
            >
              <GithubIcon />
            </a>
          ) : null}
        </div>
      </article>
    );
};

export default FooterCard;
