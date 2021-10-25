import { ThunkAction } from "redux-thunk"
import { getAuthTC } from "./auth-reducer"
import { AppRootStateType } from "./redux-store"


const SET_INIT = "app/SET_INIT"

export type AuthStateType = {
    initialized: boolean
}
type AuthActionTypes = ReturnType<typeof initializedSeccess>

const initialAuthState: AuthStateType = {
    initialized: false
}

export const appReducer = (state: AuthStateType = initialAuthState, action: AuthActionTypes): AuthStateType => {
    switch (action.type) {
        case SET_INIT:
            return { ...state, initialized: true }
        default:
            return state
    }
}

const initializedSeccess = () => ({ type: SET_INIT })

export const initializeAppTC = (): ThunkAction<void, AppRootStateType, unknown, AuthActionTypes> => (dispatch) => {
    let promise = dispatch(getAuthTC())
    promise.then(() => {
        dispatch(initializedSeccess())
    })
}
