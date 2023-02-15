import styles from './contact-section.module.scss';
import Button from '@/ui/components/button/button';

type Props = {
  open?: boolean;
};

const ContactSection = ({ open = true }: Props) => {
  return (
    <div className={`${styles.root} ${open && styles.open}`}>
      <Button>Button</Button>
      <Button variant="outlined">Button</Button>
      <Button variant="text" disabled>
        Button
      </Button>
    </div>
  );
};

export default ContactSection;
