import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderConstainer";
import {connect} from 'react-redux';
import {compose} from "redux";
import {RouteComponentProps} from "react-router";
import {initializeAppTC} from "./Redux/app-reducer";
import {rootStateType} from "./Redux/reduxStore";
import {Preloader} from "./components/common/Preloader/Preloader";
import {WithSuspense} from "./hoc/withSuspense";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import Login from "./components/Login/Login";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const Login = React.lazy(() => import("./components/Login/Login"))

type AppPropsType = {
    initializeAppTC: () => void
    initialized: boolean
}
type PropsType = RouteComponentProps & AppPropsType

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className={"app"}>
                <HeaderContainer/>
                <Navbar/>
                <div className={"app-content"}>
                    <Route path={"/profile/:userId?"} render={WithSuspense(ProfileContainer)}/>
                    <Route path={"/dialogs"} render={WithSuspense(DialogsContainer)}/>
                    <Route path={"/users"} render={WithSuspense(UsersContainer)}/>
                    <Route path={"/login"} render={WithSuspense(Login)}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: rootStateType) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeAppTC}))(App);