import { Route } from "react-router-dom";
import "./App.css"
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Header } from "./components/Header/Header";
import { Music } from "./components/Music/Music";
import { NavBar } from "./components/NavBar/NavBar";
import { News } from "./components/News/News";
import { Profile } from "./components/Profile/Profile";
import { Settings } from "./components/Settings/Settings";
import { store, StoreType } from "./Redux/state";

type AppPropsType = {
  store: StoreType
}

function App(props: AppPropsType) {

  let state = props.store.getState()

  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="content">
        <Route path="/messages" render={() => <Dialogs state={state.messagesPage}
          onMessageChange={props.store.onMessageChange.bind(props.store)}
          addMessage={store.addMessage.bind(props.store)} />} />
        <Route path="/profile" render={() => <Profile state={state.profilePage}
          addPost={props.store.addPost.bind(props.store)}
          onPostChange={props.store.onPostChange.bind(props.store)} />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
