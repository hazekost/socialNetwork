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
}
type ActionType = AddMessageActionType

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
}

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionType): MessagesPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return { ...state, messages: [...state.messages, { message: action.message, id: 4 }] }
        default:
            return state
    }
}

type AddMessageActionType = ReturnType<typeof addMessage>

export const addMessage = (message: string) => ({ type: "ADD-MESSAGE" as const, message })