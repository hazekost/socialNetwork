import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./app-reducer";
import { authReducer } from "./auth-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { userReducer } from "./users-reducer";

let rootReducer = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: userReducer,
    auth: authReducer,
    app: appReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
export type DispatchType = typeof store.dispatch

//@ts-ignore
window.store = store