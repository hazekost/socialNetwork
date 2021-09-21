import { Route } from "react-router-dom";
import "./App.css"
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Header } from "./components/Header/Header";
import { Music } from "./components/Music/Music";
import { NavBar } from "./components/NavBar/NavBar";
import { News } from "./components/News/News";
import { Profile } from "./components/Profile/Profile";
import { Settings } from "./components/Settings/Settings";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="content">
        <Route path="/messages" component={Dialogs} />
        <Route path="/profile" component={Profile} />
        <Route path="/music" component={Music} />
        <Route path="/news" component={News} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
