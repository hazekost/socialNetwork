import { DataType } from "../api/api"

enum AUTH_TYPES {
    SET_AUTH = "SET_AUTH"
}
export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
type ActionType = SetAuthActionType

const initialAuthState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

export const authReducer = (state: AuthStateType = initialAuthState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case AUTH_TYPES.SET_AUTH:
            return { ...state, ...action.data, isAuth: true }
        default:
            return state
    }
}

type SetAuthActionType = ReturnType<typeof setAuth>

export const setAuth = (data: DataType) => ({
    type: AUTH_TYPES.SET_AUTH,
    data,
})