import { Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { authAPI, DataType } from "../api/api"
import { StateType } from "./redux-store"

enum AUTH_TYPES {
    SET_AUTH = "SET_AUTH",
    DEL_AUTH = "DEL_AUTH"
}
export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
type AuthActionTypes = SetAuthActionType | DelAuthActionType

const initialAuthState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

export const authReducer = (state: AuthStateType = initialAuthState, action: AuthActionTypes): AuthStateType => {
    switch (action.type) {
        case AUTH_TYPES.SET_AUTH:
            return { ...state, ...action.data, isAuth: true }
        case AUTH_TYPES.DEL_AUTH:
            return { ...state, ...action.data, isAuth: false }
        default:
            return state
    }
}

type SetAuthActionType = ReturnType<typeof setAuth>
type DelAuthActionType = ReturnType<typeof delAuth>

const setAuth = (data: DataType) => ({ type: AUTH_TYPES.SET_AUTH, data })
const delAuth = (data: DataType) => ({ type: AUTH_TYPES.DEL_AUTH, data })

export const getAuthTC = () => (dispatch: Dispatch<AuthActionTypes>) => {
    authAPI.authMe().then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setAuth(res.data.data))
        }
    })
}
export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, StateType, unknown, AuthActionTypes> =>
    (dispatch) => {
        authAPI.logIn(email, password, rememberMe).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthTC())
            }
        })
    }
export const logout = () =>
    (dispatch: Dispatch<AuthActionTypes>) => {
        authAPI.logOut().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(delAuth({ id: null, email: null, login: null }))
            }
        })
    }