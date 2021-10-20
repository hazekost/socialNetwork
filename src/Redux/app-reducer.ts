import { ThunkAction } from "redux-thunk"
import { getAuthTC } from "./auth-reducer"
import { AppRootStateType } from "./redux-store"

enum INIT_TYPES {
    SET_INIT = "SET_INIT",
}
export type AuthStateType = {
    initialized: boolean
}
type AuthActionTypes = SetAuthActionType
const initialAuthState: AuthStateType = {
    initialized: false
}

export const appReducer = (state: AuthStateType = initialAuthState, action: AuthActionTypes): AuthStateType => {
    switch (action.type) {
        case INIT_TYPES.SET_INIT:
            return { ...state, initialized: true }
        default:
            return state
    }
}

type SetAuthActionType = ReturnType<typeof initializedSeccess>

const initializedSeccess = () => ({ type: INIT_TYPES.SET_INIT })

export const initializeAppTC = (): ThunkAction<void, AppRootStateType, unknown, AuthActionTypes> => (dispatch) => {
    let promise = dispatch(getAuthTC())
    promise.then(() => {
        dispatch(initializedSeccess())
    })
}
