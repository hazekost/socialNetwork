import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {

  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="content">
        <Route path="/messages" render={() => <DialogsContainer />} />
        <Route path="/profile" render={() => <ProfileContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;
