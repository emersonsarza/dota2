import './App.css';
import { Background, Container } from './styles';
import ThemeProvider from './utils/ThemeProvider';
import Heroes from './pages/heroes/Heroes';
import Header from './components/header/Header';

const Body = () => {
  return (
    <Background>
      <Container>
        <Header />
        <Heroes />
      </Container>
    </Background>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Body />
    </ThemeProvider>
  );
}

export default App;
