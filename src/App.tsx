import React from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";

type AppPropsType = {
    state: {
        profilePage: {
            posts: Array<{ id: number, message: string, likeCount: number }>
            newPostText: string
        },
        messagesPage: {
            dialogs: Array<{ id: number, name: string }>,
            messages: Array<{ id: number, message: string }>
        }
    }
    addPost: () => void
    changePostText: (value: string) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={"app"}>
                <Header/>
                <Navbar/>
                <div className={"app-content"}>
                    <Route path={"/profile"} render={() => <Profile
                        changePostText={props.changePostText}
                        addPost={props.addPost}
                        profilePage={props.state.profilePage}/>}
                    />
                    <Route path={"/dialogs"}
                           render={() => <Dialogs messagesPage={props.state.messagesPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;