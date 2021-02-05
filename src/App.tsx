import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import ProfileContainerWithRouter from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderConstainer";

function App() {
    return (
        <BrowserRouter>
            <div className={"app"}>
                <HeaderContainer/>
                <Navbar/>
                <div className={"app-content"}>
                    <Route  path={"/profile/:userId?"} render={() => <ProfileContainerWithRouter/>}
                    />
                    <Route path={"/dialogs"}
                           render={() => <DialogsContainer />}
                    />
                    <Route path={"/users"}
                           render={() => <UsersContainer/>}
                    />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;