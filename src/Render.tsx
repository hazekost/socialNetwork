import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

type stateType = {
    profilePage: {
        posts: Array<{ id: number, message: string, likeCount: number }>
        newPostText: string
    }
    messagesPage: {
        dialogs: Array<{ id: number, name: string }>,
        messages: Array<{ id: number, message: string }>
    }
}

export const Render = (state: stateType, addPost: () => void, changePostText: (value: string) => void) => ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} changePostText={changePostText}/>
  </React.StrictMode>,
  document.getElementById('root')
);
