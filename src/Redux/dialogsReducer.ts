type AddMessageActionType = {
    type: "ADD-MESSAGE"
    value: string
}
type ActionType = AddMessageActionType
type initialStateType = {
    dialogs: Array<{ id: number, name: string }>
    messages: Array<{ id: number, message: string }>
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
    ]
}

export const dialogsReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {...state, messages: [...state.messages, {id: 4, message: action.value}]}
        default:
            return state
    }
}

export const AddMessage = (value: string): AddMessageActionType => ({
    type: "ADD-MESSAGE",
    value
})