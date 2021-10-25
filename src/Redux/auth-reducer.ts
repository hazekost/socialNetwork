import { Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { authAPI, DataType } from "../api/api"
import { AppRootStateType } from "./redux-store"

const SET_AUTH = "auth/SET_AUTH"
const DEL_AUTH = "auth/DEL_AUTH"

export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
type AuthActionTypes = ReturnType<typeof setAuth> | ReturnType<typeof delAuth>

const initialAuthState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

export const authReducer = (state: AuthStateType = initialAuthState, action: AuthActionTypes): AuthStateType => {
    switch (action.type) {
        case SET_AUTH:
            return { ...state, ...action.data, isAuth: true }
        case DEL_AUTH:
            return { ...state, ...action.data, isAuth: false }
        default:
            return state
    }
}

const setAuth = (data: DataType) => ({ type: SET_AUTH, data })
const delAuth = (data: DataType) => ({ type: DEL_AUTH, data })

export const getAuthTC = () => async (dispatch: Dispatch<AuthActionTypes>) => {
    let res = await authAPI.authMe();
    if (res.data.resultCode === 0) {
        dispatch(setAuth(res.data.data))
    }
}
export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppRootStateType, unknown, AuthActionTypes> =>
    async (dispatch) => {
        let res = await authAPI.logIn(email, password, rememberMe);
        if (res.data.resultCode === 0) {
            dispatch(getAuthTC())
        }
    }
export const logout = () => async (dispatch: Dispatch<AuthActionTypes>) => {
    let res = await authAPI.logOut()
    if (res.data.resultCode === 0) {
        dispatch(delAuth({ id: null, email: null, login: null }))
    }
}