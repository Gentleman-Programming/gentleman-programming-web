import { FC } from 'react';

import {
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  TutiLightBox,
  TwitterIcon,
} from '@app/components';

import styles from './styles/footerCard.module.css';
import { Member } from '../../interface';

type Props = {
  member: Member;
};

export const FooterCard: FC<Props> = ({ member }) => {
  return (
    <article key={member.name + ' article'} className={styles.footer__card}>
      <div className={styles.footer__card_info}>
        <section className={styles.footer__card_side}>
          <TutiLightBox
            id={`${member.index}`}
            url={member.pic}
            alt={`${member.name} pic`}
            width={150}
            height={150}
          />
        </section>
        <section className={styles.footer__card_description}>
          <header className={styles.footer__card_header}>
            <p className={styles.footer__card_name}>{member.name}</p>
            <p>{member.role}</p>
          </header>
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
