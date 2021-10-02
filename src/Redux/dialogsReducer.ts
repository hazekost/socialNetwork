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

export const dialogsReducer = (state: MessagesPageType, action: ActionType): MessagesPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            if (state.newMessageText.trim() !== "") {
                return { ...state, messages: [...state.messages, { id: 4, message: state.newMessageText }], newMessageText: "" }
            }
            return state
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