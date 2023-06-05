export const metadata = {
  title: 'GP -> Home',
  description: 'Home page',
};
import '@app/styles/global.css';
import Home from './Home/page';

export default function App() {
  return (
    <>
      {/* Renders the Home component */}
      <Home />
    </>
  );
}
