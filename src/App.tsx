import React from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";

type AddPostActionType = {
    type: "ADD-POST"
}
type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
type ChangePostTextActionType = {
    type: "CHANGE-POST-TEXT"
    value: string
}
type ChangeMessageTextActionType = {
    type: "CHANGE-MESSAGE-TEXT"
    value: string
}
type ActionType = AddPostActionType|AddMessageActionType|ChangePostTextActionType|ChangeMessageTextActionType
type AppPropsType = {
    store: {
        _state: {
            profilePage: {
                posts: Array<{ id: number, message: string, likeCount: number }>
                newPostText: string
            }
            messagesPage: {
                dialogs: Array<{ id: number, name: string }>,
                messages: Array<{ id: number, message: string }>,
                newMessageText: string
            }
        }
        _callSubscriber: () => void
        subscribe: (observer: () => void) => void
        getState: () => {
            profilePage: {
                posts: Array<{ id: number, message: string, likeCount: number }>
                newPostText: string
            }
            messagesPage: {
                dialogs: Array<{ id: number, name: string }>,
                messages: Array<{ id: number, message: string }>,
                newMessageText: string
            }
        }
        dispatch: (action: ActionType) => void
    }
}

function App(props: AppPropsType) {

    let state = props.store.getState()

    return (
        <BrowserRouter>
            <div className={"app"}>
                <Header/>
                <Navbar/>
                <div className={"app-content"}>
                    <Route path={"/profile"} render={() => <Profile
                        dispatch={props.store.dispatch.bind(props.store)}
                        profilePage={state.profilePage}/>}
                    />
                    <Route path={"/dialogs"}
                           render={() => <Dialogs
                               dispatch={props.store.dispatch.bind(props.store)}
                               messagesPage={state.messagesPage}/>}
                    />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;