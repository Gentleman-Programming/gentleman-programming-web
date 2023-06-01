import { NavBar } from '@app/components';

import { ContactBody } from './components';

export const metadata = {
  title: 'GP -> Contact',
  description: 'Contact page',
};
function Contact() {
  return (
    <>
      <NavBar />
      <ContactBody />
    </>
  );
}
export default Contact;
