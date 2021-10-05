import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { userReducer } from "./usersReducer";

let rootReducer = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: userReducer
})

export let store = createStore(rootReducer)

export type StateType = ReturnType<typeof rootReducer>
export type DispatchType = typeof store.dispatch