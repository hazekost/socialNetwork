import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    userPage: usersReducer,
    auth: authReducer
})

export const store = createStore(rootReducer)

export type rootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store