import { FC } from 'react';

import { TutiLightBox } from '@app/common';
import {
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@app/components';

import { Member } from './interface';
import styles from './styles/memberCard.module.css';

type Props = {
  member: Member;
};

export const MemberCard: FC<Props> = ({ member }) => {
  return (
    <article key={member.name + ' article'} className={styles.member__card}>
      <div className={styles.member__card_info}>
        <section className={styles.member__card_side}>
          <TutiLightBox
            key={member.index}
            id={`${member.index}`}
            url={member.pic}
            alt={`${member.name} pic`}
            width={150}
            height={150}
          />
        </section>
        <section className={styles.member__card_description}>
          <header className={styles.member__card_header}>
            <p className={styles.member__card_name}>{member.name}</p>
            <p>{member.role}</p>
          </header>
          <p>{member.description}</p>
        </section>
      </div>
      <div className={styles.member__card_info_socials}>
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
