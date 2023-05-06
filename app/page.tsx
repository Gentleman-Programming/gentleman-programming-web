import { ServerButton } from './components/ServerButton';

export const metadata = {
  title: 'Home',
};

function App() {
  return (
    <>
      <h1>Hola mundo</h1>
      <ServerButton description="Hola" isLive selected mentions={2} />
    </>
  );
}
export default App;
