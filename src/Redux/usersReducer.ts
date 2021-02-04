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
}
export type setCurrentPageReturnType = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}
export type setTotalUsersCountReturnType = {
    type: "SET-TOTAL-USERS-COUNT"
    totalCount: number
}
export type setFetchingReturnType = {
    type: "SET-FETCHING"
    isFetching: boolean
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
    currentPage: number
    isFetching: boolean
}

let initialState: initialStateType = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case "SET-USERS":
            return {...state, users: [...action.users]}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalCount: action.totalCount}
        case "SET-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const follow = (userID: number): followReturnType => {
    return {
        type: "FOLLOW",
        userID
    }
}
export const unFollow = (userID: number): unFollowReturnType => {
    return {
        type: "UNFOLLOW",
        userID
    }
}
export const setUsers = (users: Array<userType>): setUsersReturnType => {
    return {
        type: "SET-USERS",
        users: users
    }
}
export const setCurrentPage = (currentPage: number): setCurrentPageReturnType => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    }
}
export const setUsersCount = (totalCount: number): setTotalUsersCountReturnType => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalCount
    }
}
export const setFetching = (isFetching: boolean): setFetchingReturnType => {
    return {
        type: "SET-FETCHING",
        isFetching
    }
}