import styles from './contact-section.module.scss';

type Props = {
  open?: boolean;
};

const ContactSection = ({ open = true }: Props) => {
  return (
    <div className={`${styles.root} ${open && styles.open}`}>
      <h1>ContactSection</h1>
    </div>
  );
};

export default ContactSection;
