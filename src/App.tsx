import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
    return (
        <BrowserRouter>
            <div className={"app"}>
                <Header/>
                <Navbar/>
                <div className={"app-content"}>
                    <Route path={"/profile"} render={() => <ProfileContainer/>}
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