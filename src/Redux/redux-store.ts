import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

let rootReducer = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer
})

export let store = createStore(rootReducer)

export type StoreType = typeof store
export type DispatchType = typeof store.dispatch