import {ActionType} from "./profileReducer";

export type followReturnType = {
    type: "FOLLOW"
    userID: number
}
export type unFollowReturnType = {
    type: "UNFOLLOW"
    userID: number
}
export type setUsersReturnType = {
    type: "SET-USERS"
    users: Array<userType>
    totalCount: number
}
export type userType = {
    id: number
    photos: {small: string, large: string}
    followed: boolean
    name: string
    status: string
}
type initialStateType = {
    users: Array<userType>
    totalCount: number
    pageSize: 5
}

let initialState: initialStateType = {
    users: [],
    totalCount: 0,
    pageSize: 5
}

export const usersReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users], totalCount: action.totalCount}
        default:
            return state
    }
}

export const followAC = (userID: number): followReturnType => {
    return {
        type: "FOLLOW",
        userID: userID
    }
}
export const unFollowAC = (userID: number): unFollowReturnType => {
    return {
        type: "UNFOLLOW",
        userID: userID
    }
}
export const setUsersAC = (users: Array<userType>, totalCount: number): setUsersReturnType => {
    return {
        type: "SET-USERS",
        users: users,
        totalCount: totalCount
    }
}