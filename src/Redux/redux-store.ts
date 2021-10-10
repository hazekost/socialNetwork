import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { userReducer } from "./users-reducer";

let rootReducer = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: userReducer
})

export let store = createStore(rootReducer)

export type StateType = ReturnType<typeof rootReducer>
export type DispatchType = typeof store.dispatch