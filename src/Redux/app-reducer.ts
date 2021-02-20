import {Dispatch} from "redux";
import {getAuthTC} from "./auth-reducer";

type initialStateType = {
    initialized: boolean
}
type setInitializedActionType = ReturnType<typeof setInitializedAC>
type ActionType = setInitializedActionType

let initialState: initialStateType = {
    initialized: false
}

export const appReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, initialized: true}
        default:
            return state
    }
}

const setInitializedAC = () => {
    return {type: "SET-INITIALIZED"} as const
}

export const initializeAppTC = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthTC())
        Promise.all([promise]).then(() => {
        dispatch(setInitializedAC())
    })
}