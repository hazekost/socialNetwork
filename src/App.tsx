import React, { Suspense } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
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
      <div className="back-ground">
        <div className="app-wrapper">
          <HeaderContainer />
          <NavBar />
          <div className="content">
            <Switch>
              <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
              <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
              <Route path="/users" render={withSuspense(UsersContainer)} />
              <Route path="/messages" render={() => {
                return <Suspense fallback={"...Loading"}>
                  <DialogsContainer />
                </Suspense>
              }} />
              <Route path="/login" render={withSuspense(Login)} />
              <Route path="/404" render={() => <div>404 NOT FOUND</div>} />
              <Redirect from="*" to="/404" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppRootStateType) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeAppTC })(App)