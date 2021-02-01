import React from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className={"app"}>
                <Header/>
                <Navbar/>
                <div className={"app-content"}>
                    <Route path={"/profile"} render={() => <Profile/>}/>
                    <Route path={"/dialogs"} render={() => <Dialogs/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;