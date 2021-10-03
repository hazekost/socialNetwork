import { Route } from "react-router-dom";
import "./App.css";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { Header } from "./components/Header/Header";
import { Music } from "./components/Music/Music";
import { NavBar } from "./components/NavBar/NavBar";
import { News } from "./components/News/News";
import { Profile } from "./components/Profile/Profile";
import { Settings } from "./components/Settings/Settings";
import { StoreType } from "./Redux/redux-store";

type AppPropsType = {
  store: StoreType
}

function App(props: AppPropsType) {

  let state = props.store.getState()
  let dispatch = props.store.dispatch

  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="content">
        <Route path="/messages" render={() => <DialogsContainer state={state.messagesPage} dispatch={dispatch} />} />
        <Route path="/profile" render={() => <Profile state={state.profilePage} dispatch={dispatch} />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
