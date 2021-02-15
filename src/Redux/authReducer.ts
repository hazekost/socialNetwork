import {setFetching, setFetchingReturnType} from "./usersReducer";
import {Dispatch} from "redux";
import {networkAPI} from "../api/networkAPI";
import {stopSubmit} from "redux-form";

type setAuthReturnType = ReturnType<typeof setAuth>
type ActionType = setAuthReturnType | setFetchingReturnType
export type dataType = {
    id: number
    login: string
    email: string
}
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
        case "SET-AUTH":
            return {...state, ...action.data, isAuth: action.isAuth}
        case "SET-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

const setAuth = (userId: number|null, email: string|null, login: string|null, isAuth: boolean) => {
    return {
        type: "SET-AUTH",
        data: {userId, email, login},
        isAuth
    } as const
}

export const getAuth = () => {
    return (dispatch: Dispatch<ActionType>) => {
        dispatch(setFetching(true))
        networkAPI.getAuth().then((response) => {
            dispatch(setFetching(false))
            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data
                dispatch(setAuth(id, email, login,true))
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {

    return (dispatch: Dispatch<any>) => {
        networkAPI.login(email, password, rememberMe).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuth())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit("Login", {_error: message}))
            }
        })
    }
}

export const logout = () => {
    return (dispatch: Dispatch<any>) => {
        networkAPI.logout().then((response) => {
            if (response.data.resultCode === 0) {
                dispatch((setAuth(null, null, null, false)))
            }
        })
    }
}