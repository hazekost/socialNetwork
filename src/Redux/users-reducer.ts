import { Dispatch } from "redux"
import { GetUsersResponseType, ItemType, usersAPI } from "../api/api"

const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const TOGGLE_FETCH = "users/TOGGLE_FETCH";
const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const TOGGLE_FOLLOWING = "users/TOGGLE_FOLLOWING";

export type UsersStateType = {
    items: Array<ItemType>
    totalCount: number
    error: string
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type ActionType = ReturnType<typeof follow> | ReturnType<typeof unFollow> | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage> | ReturnType<typeof toggleFetch> | ReturnType<typeof toggleFollowing>


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
        case SET_USERS:
            return { ...state, ...action.data }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.page }
        case TOGGLE_FETCH:
            return { ...state, isFetching: action.isFetching }
        case FOLLOW:
            return { ...state, items: state.items.map(i => i.id === action.id ? { ...i, followed: true } : i) }
        case UNFOLLOW:
            return { ...state, items: state.items.map(i => i.id === action.id ? { ...i, followed: false } : i) }
        case TOGGLE_FOLLOWING:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state
    }
}

const follow = (id: number) => ({ type: FOLLOW, id } as const)
const unFollow = (id: number) => ({ type: UNFOLLOW, id } as const)
const setUsers = (data: GetUsersResponseType) => ({ type: SET_USERS, data } as const)
const setCurrentPage = (page: number) => ({ type: SET_CURRENT_PAGE, page } as const)
const toggleFetch = (isFetching: boolean) => ({ type: TOGGLE_FETCH, isFetching } as const)
const toggleFollowing = (id: number, isFetching: boolean) => ({ type: TOGGLE_FOLLOWING, id, isFetching } as const)

export const getUsersTC = (pageSize: number, currentPage: number) => async (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleFetch(true))
    let res = await usersAPI.getUsers(pageSize, currentPage)
    dispatch(setUsers(res.data))
    dispatch(toggleFetch(false))
}
export const changeUsersPageTC = (pageSize: number, page: number) => async (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleFetch(true))
    dispatch(setCurrentPage(page))
    let res = await usersAPI.getUsers(pageSize, page)
    dispatch(setUsers(res.data))
    dispatch(toggleFetch(false))
}
export const setFollowTC = (id: number) => async (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleFollowing(id, true))
    let res = await usersAPI.follow(id)
    if (res.data.resultCode === 0) {
        dispatch(follow(id))
    }
    dispatch(toggleFollowing(id, false))
}
export const setUnFollowTC = (id: number) => async (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleFollowing(id, true))
    let res = await usersAPI.unFollow(id)
    if (res.data.resultCode === 0) {
        dispatch(unFollow(id))
    }
    dispatch(toggleFollowing(id, false))
}