import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import {appReducer} from "./app-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    userPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type rootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store