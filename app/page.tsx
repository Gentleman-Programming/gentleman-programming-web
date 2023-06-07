export const metadata = {
  title: 'GP -> Home',
  description: 'Home page',
};
import '@app/styles/global.css';
/* `import Home from './Home/page'. */
import Home from './Home/page';
/**
 * Renders the App component.
 * @returns {JSX.Element} The rendered component.
 */
export default function App(): JSX.Element {
  return (
    /* Renders the Home component */
    <Home />
  );
}
