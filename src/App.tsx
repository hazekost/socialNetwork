import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Profile } from './components/MainContent/Profile';
import { NavBar } from './components/NavBar/NavBar';
import { StateType } from './state/state';

type AppPropsType = {
  state: StateType
}

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <NavBar />
        <div className={"content"}>
          <Route path={"/profile"} render={() => <Profile posts={props.state.profilePage.posts} />} />
          <Route path={"/dialogs"} render={() => <Dialogs state={props.state.messagesPage} />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;
