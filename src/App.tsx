import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import { Preloader } from "./components/common/Preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { NavBar } from "./components/NavBar/NavBar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeAppTC } from "./redux/app-reducer";
import { AppRootStateType } from "./redux/redux-store";

type AppPropsType = {
  initialized: boolean
  initializeAppTC: () => void
}

class App extends React.Component<AppPropsType> {

  componentDidMount() {
    this.props.initializeAppTC()
  }

  render() {
    if (!this.props.initialized) return <Preloader />
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />
        <div className="content">
          <Route path="/messages" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppRootStateType) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeAppTC })(App)