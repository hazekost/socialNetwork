import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Profile } from './components/MainContent/Profile';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <NavBar />
        <div className={"content"}>
          <Route path={"/profile"} render={() => <Profile />} />
          <Route path={"/dialogs"} render={() => <Dialogs />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
