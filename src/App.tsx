import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderConstainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {connect} from 'react-redux';
import {compose} from "redux";
import {RouteComponentProps} from "react-router";
import {initializeAppTC} from "./Redux/app-reducer";
import {rootStateType} from "./Redux/reduxStore";
import {Preloader} from "./components/common/Preloader/Preloader";

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
                    <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}
                    />
                    <Route path={"/dialogs"}
                           render={() => <DialogsContainer/>}
                    />
                    <Route path={"/users"}
                           render={() => <UsersContainer/>}
                    />
                    <Route path={"/login"}
                           render={() => <Login/>}
                    />
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

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeAppTC}))(App);