import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainContent } from './components/MainContent/MainContent';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
