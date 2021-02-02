import reportWebVitals from './reportWebVitals';
import {Render} from "./Render";
import {addPost, changePostText, state} from "./Redux/state";

Render(state, addPost, changePostText)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
