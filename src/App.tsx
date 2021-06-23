import { BrowserRouter, Route } from 'react-router-dom';
import { MessageType, PostType, UserType } from '.';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Profile } from './components/MainContent/Profile';
import { NavBar } from './components/NavBar/NavBar';

type AppPropsType = {
  posts: Array<PostType>
  users: Array<UserType>
  messages: Array<MessageType>
}

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <NavBar />
        <div className={"content"}>
          <Route path={"/profile"} render={() => <Profile posts={props.posts} />} />
          <Route path={"/dialogs"} render={() => <Dialogs users={props.users} messages={props.messages} />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
