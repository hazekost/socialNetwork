import { ActionType } from "./profileReducer"

type DialogType = {
    name: string
    id: number
}
type MessageType = {
    message: string
    id: number
}
export type MessagesPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageText: string
}
export type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
export type OnMessageChangeActionType = {
    type: "ON-MESSAGE-CHANGE",
    value: string
}

let initialState = {
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
    ],
    newMessageText: ""
}

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionType): MessagesPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            if (state.newMessageText.trim() !== "") {
                return { ...state, messages: [...state.messages, { id: 4, message: state.newMessageText }], newMessageText: "" }
            }
            return { ...state, newMessageText: "" }
        case "ON-MESSAGE-CHANGE":
            return { ...state, newMessageText: action.value }
        default:
            return state
    }
}

export const addMessageAC = (): AddMessageActionType => ({ type: "ADD-MESSAGE" })
export const onMessageChangeAC = (value: string): OnMessageChangeActionType => ({
    type: "ON-MESSAGE-CHANGE",
    value
})