import {ActionType} from "./profileReducer";

export type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
export type ChangeMessageTextActionType = {
    type: "CHANGE-MESSAGE-TEXT"
    value: string
}
type initialStateType = {
    dialogs: Array<{ id: number, name: string }>
    messages: Array<{ id: number, message: string }>
    newMessageText: string
}
let initialState: initialStateType = {
    dialogs: [
        {id: 1, name: "Konstantin"},
        {id: 2, name: "Alex"},
        {id: 3, name: "John"},
        {id: 4, name: "Ler"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Sup"}
    ],
    newMessageText: ""
}

export const dialogsReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {...state, messages: [...state.messages, {id: 4, message: state.newMessageText}], newMessageText: ""}
        case "CHANGE-MESSAGE-TEXT":
            return {...state, newMessageText: action.value}
        default:
            return state
    }
}

export const AddMessage = (): AddMessageActionType => ({
    type: "ADD-MESSAGE"
})
export const ChangeMessageText = (value: string): ChangeMessageTextActionType => ({
    type: "CHANGE-MESSAGE-TEXT",
    value: value
})