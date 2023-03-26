import Container from '@/components/Container';
import MainPage from '@/pages/MainPage';

function App() {
  return <MainPage childElement={<Container />} />;
}

export default App;
