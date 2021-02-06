import {setFetching, setFetchingReturnType} from "./usersReducer";
import {Dispatch} from "redux";
import {networkAPI} from "../api/api";

type setAuthReturnType = {
    type: "SET-AUTH"
    data: dataType
}
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
            return {...state, ...action.data, isAuth: true}
        case "SET-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

const setAuth = (data: dataType): setAuthReturnType => {
    return {
        type: "SET-AUTH",
        data
    }
}

export const getAuth = () => {
    return (dispatch: Dispatch<ActionType>) => {
        dispatch(setFetching(true))
        networkAPI.getAuth().then((response) => {
            dispatch(setFetching(false))
            if (response.data.resultCode === 0) {
                dispatch(setAuth(response.data.data))
            }
        })
    }
}