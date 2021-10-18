import { Dispatch } from "redux"
import { GetUsersResponseType, ItemType, usersAPI } from "../api/api"

export type UsersStateType = {
    items: Array<ItemType>
    totalCount: number
    error: string
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type ActionType = FollowActionType | UnFollowActionType | SetUsersActionType
    | SetCurrentPageActionType | ToggleFetchActionType | ToggleFollowingActionType


let initialState: UsersStateType = {
    items: [],
    totalCount: 0,
    error: "",
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export const userReducer = (state: UsersStateType = initialState, action: ActionType): UsersStateType => {
    switch (action.type) {
        case "SET_USERS":
            return { ...state, ...action.data }
        case "SET_CURRENT_PAGE":
            return { ...state, currentPage: action.page }
        case "TOGGLE_FETCH":
            return { ...state, isFetching: action.isFetching }
        case "FOLLOW":
            return { ...state, items: state.items.map(i => i.id === action.id ? { ...i, followed: true } : i) }
        case "UNFOLLOW":
            return { ...state, items: state.items.map(i => i.id === action.id ? { ...i, followed: false } : i) }
        case "TOGGLE_FOLLOWING":
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state
    }
}

type FollowActionType = ReturnType<typeof follow>
type UnFollowActionType = ReturnType<typeof unFollow>
type SetUsersActionType = ReturnType<typeof setUsers>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
type ToggleFetchActionType = ReturnType<typeof toggleFetch>
type ToggleFollowingActionType = ReturnType<typeof toggleFollowing>

const follow = (id: number) => ({ type: "FOLLOW" as const, id })
const unFollow = (id: number) => ({ type: "UNFOLLOW" as const, id })
const setUsers = (data: GetUsersResponseType) => ({ type: "SET_USERS" as const, data })
const setCurrentPage = (page: number) => ({ type: "SET_CURRENT_PAGE" as const, page })
const toggleFetch = (isFetching: boolean) => ({ type: "TOGGLE_FETCH" as const, isFetching })
const toggleFollowing = (id: number, isFetching: boolean) => ({ type: "TOGGLE_FOLLOWING" as const, id, isFetching })

export const getUsersTC = (pageSize: number, currentPage: number) => (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleFetch(true))
    usersAPI.getUsers(pageSize, currentPage).then((resp) => {
        dispatch(setUsers(resp.data))
        dispatch(toggleFetch(false))
    })
}
export const changeUsersPageTC = (pageSize: number, page: number) => (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleFetch(true))
    dispatch(setCurrentPage(page))
    usersAPI.getUsers(pageSize, page).then((resp) => {
        dispatch(setUsers(resp.data))
        dispatch(toggleFetch(false))
    })
}
export const setFollowTC = (id: number) => (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleFollowing(id, true))
    usersAPI.follow(id).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(follow(id))
        }
        dispatch(toggleFollowing(id, false))
    })
}
export const setUnFollowTC = (id: number) => (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleFollowing(id, true))
    usersAPI.unFollow(id).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(unFollow(id))
        }
        dispatch(toggleFollowing(id, false))
    })
}