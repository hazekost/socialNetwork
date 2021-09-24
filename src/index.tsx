import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

export type PostType = {
  post: string
  id: number
  likesCount: number
}
export type DialogType = {
  name: string
  id: number
}
export type MessageType = {
  message: string
  id: number
}
type ProfilePageType = {
  posts: Array<PostType>
}
export type MessagesPageType = {
  messages: Array<MessageType>
  dialogs: Array<DialogType>
}
export type StateType = {
  profilePage: ProfilePageType
  messagesPage: MessagesPageType
}

let state: StateType = {
  profilePage: {
    posts: [
      { post: "Hi, how are you", id: 1, likesCount: 21 },
      { post: "How your it-kamasutra", id: 2, likesCount: 15 }
    ],
  },
  messagesPage: {
    messages: [
      { message: "Hi", id: 1 },
      { message: "How are u", id: 2 },
      { message: "Sup", id: 3 }
    ],
    dialogs: [
      { name: "Dimych", id: 1 },
      { name: "Valera", id: 2 },
      { name: "Vika", id: 3 },
      { name: "Sveta", id: 4 },
      { name: "Andrey", id: 5 },
    ]
  }
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
