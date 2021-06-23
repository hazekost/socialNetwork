import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type PostType = {
  id: number
  message: string
  likesCount: number
}
export type UserType = {
  id: number
  name: string
}
export type MessageType = {
  id: number
  message: string
}

let posts: Array<PostType> = [
  { id: 1, message: "Hi, how are you ?", likesCount: 15 },
  { id: 2, message: "It's my first post", likesCount: 20 }
]
let users: Array<UserType> = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Sveta" },
  { id: 3, name: "Sasha" },
  { id: 4, name: "Victor" },
  { id: 5, name: "Igon" },
  { id: 6, name: "Jason" },
  { id: 7, name: "Violet" }
]
let messages: Array<MessageType> = [
  { id: 1, message: "Hello" },
  { id: 2, message: "HI" },
  { id: 3, message: "Don't ignore me" },
  { id: 4, message: "Heey" }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} users={users} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
