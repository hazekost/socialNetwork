import {setFetchingReturnType} from "./usersReducer";

type setAuthReturnType = {
    type: "SET-AUTH"
    data: dataType
}
type ActionType = setAuthReturnType|setFetchingReturnType
export type dataType = {
    id: number
    login: string
    email: string
}
export type initialStateType = {
    id: number|null
    login: string|null
    email: string|null
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

export const authReducer = (state: initialStateType = initialState , action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET-AUTH":
            return {...state, ...action.data, isAuth: true}
        case "SET-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}


export const setAuth = (data: dataType): setAuthReturnType => {
    return {
        type: "SET-AUTH",
        data
    }
}