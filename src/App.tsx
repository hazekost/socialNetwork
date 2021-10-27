import React, { Suspense } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import { Preloader } from "./components/common/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import { NavBar } from "./components/NavBar/NavBar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { withSuspense } from "./hoc/withSuspense";
import { initializeAppTC } from "./redux/app-reducer";
import { AppRootStateType } from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

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
          <Route path="/messages" render={() => {
            return <Suspense fallback={"...Loading"}>
              <DialogsContainer />
            </Suspense>
          }} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={withSuspense(UsersContainer)} />
          <Route path="/login" render={withSuspense(Login)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppRootStateType) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeAppTC })(App)