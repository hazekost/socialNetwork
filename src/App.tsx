import { Route } from "react-router-dom";
import "./App.css"
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Header } from "./components/Header/Header";
import { Music } from "./components/Music/Music";
import { NavBar } from "./components/NavBar/NavBar";
import { News } from "./components/News/News";
import { Profile } from "./components/Profile/Profile";
import { Settings } from "./components/Settings/Settings";
import { StateType } from "./Redux/state";

type AppPropsType = {
  state: StateType
  addPost: (post: string) => void
}

function App(props: AppPropsType) {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="content">
        <Route path="/messages" render={() => <Dialogs state={props.state.messagesPage} />} />
        <Route path="/profile" render={() => <Profile posts={props.state.profilePage.posts} addPost={props.addPost} />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
