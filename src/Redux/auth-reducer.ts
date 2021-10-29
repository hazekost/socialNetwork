import { Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { authAPI, DataType, securityAPI } from "../api/api"
import { AppRootStateType } from "./redux-store"

const SET_AUTH = "auth/SET_AUTH"
const DEL_AUTH = "auth/DEL_AUTH"
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS"

export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captchaUrl: string | null
}
type AuthActionTypes = ReturnType<typeof setAuth> | ReturnType<typeof delAuth> | ReturnType<typeof getCaptchaUrlSuccess>

const initialAuthState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state: AuthStateType = initialAuthState, action: AuthActionTypes): AuthStateType => {
    switch (action.type) {
        case SET_AUTH:
            return { ...state, ...action.data, isAuth: true, captchaUrl: null }
        case DEL_AUTH:
            return { ...state, ...action.data, isAuth: false }
        case GET_CAPTCHA_URL_SUCCESS:
            return { ...state, captchaUrl: action.url }
        default:
            return state
    }
}

const setAuth = (data: DataType) => ({ type: SET_AUTH, data } as const)
const delAuth = (data: DataType) => ({ type: DEL_AUTH, data } as const)
const getCaptchaUrlSuccess = (url: string) => ({ type: GET_CAPTCHA_URL_SUCCESS, url } as const)

export const getAuthTC = () => async (dispatch: Dispatch<AuthActionTypes>) => {
    let res = await authAPI.authMe();
    if (res.data.resultCode === 0) {
        dispatch(setAuth(res.data.data))
    }
}
export const getCaptcha = () => async (dispatch: Dispatch<AuthActionTypes>) => {
    let res = await securityAPI.getCaptcha()
    dispatch(getCaptchaUrlSuccess(res.data.url))
}
export const login = (email: string, password: string, rememberMe: boolean, captcha?: string): ThunkAction<void, AppRootStateType, unknown, AuthActionTypes> =>
    async (dispatch) => {
        let res = await authAPI.logIn(email, password, rememberMe, captcha);
        if (res.data.resultCode === 0) {
            dispatch(getAuthTC())
        } else if (res.data.resultCode === 10) {
            dispatch(getCaptcha())
        }
    }
export const logout = () => async (dispatch: Dispatch<AuthActionTypes>) => {
    let res = await authAPI.logOut()
    if (res.data.resultCode === 0) {
        dispatch(delAuth({ id: null, email: null, login: null }))
    }
}