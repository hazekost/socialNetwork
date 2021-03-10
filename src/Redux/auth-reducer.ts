import {setFetchingReturnType} from "./users-reducer";
import {Dispatch} from "redux";
import {networkAPI} from "../api/networkAPI";
import {stopSubmit} from "redux-form";

type setAuthReturnType = ReturnType<typeof setAuth>
type ActionType = setAuthReturnType | setFetchingReturnType
export type initialStateType = {
    id: number | null
    login: string | null
    email: string | null
    isFetching: boolean
    isAuth: boolean
}
let initialState: initialStateType = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false
}

export const authReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "auth/SET-AUTH":
            return {...state, ...action.data}
        case "auth/SET-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

const setAuth = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: "auth/SET-AUTH",
        data: {id, email, login, isAuth},
    } as const
}

export const getAuthTC = () => async (dispatch: Dispatch<ActionType>) => {
    let response = await networkAPI.getAuth()
    if (response.data.resultCode === 0) {
        let {login, email, id} = response.data.data
        dispatch(setAuth(id, email, login, true))
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<any>) => {
    let response = await networkAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthTC())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("Login", {_error: message}))
    }
}


export const logoutTC = () => async (dispatch: Dispatch<setAuthReturnType>) => {
    let response = await networkAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch((setAuth(null, null, null, false)))
    }
}