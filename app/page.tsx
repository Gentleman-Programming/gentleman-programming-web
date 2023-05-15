import Footer from './components/Footer/Footer';
import { ServerButton } from './components/Navbar/components/NavButton/NavButton';

export const metadata = {
  title: 'Home',
};

function App() {
  return (
    <>
      <h1>Hola mundo</h1>
      <ServerButton description="Hola" link="https://google.com" mentions={2} />
      <Footer />
    </>
  );
}
export default App;
