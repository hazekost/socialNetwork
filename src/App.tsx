import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderConstainer";
import {Login} from "./components/Login/Login";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
    return (
        <BrowserRouter>
            <div className={"app"}>
                <HeaderContainer/>
                <Navbar/>
                <div className={"app-content"}>
                    <Route  path={"/profile/:userId?"} render={() => <ProfileContainer/>}
                    />
                    <Route path={"/dialogs"}
                           render={() => <DialogsContainer />}
                    />
                    <Route path={"/users"}
                           render={() => <UsersContainer/>}
                    />
                    <Route path={"/login"}
                           render={() => <Login/>}
                    />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;