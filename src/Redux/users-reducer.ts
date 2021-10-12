import { GetUsersType, ItemType } from "../api/api"

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
    followingInProgress: [2, 3],
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

export const follow = (id: number) => ({ type: "FOLLOW" as const, id })
export const unFollow = (id: number) => ({ type: "UNFOLLOW" as const, id })
export const setUsers = (data: GetUsersType) => ({ type: "SET_USERS" as const, data })
export const setCurrentPage = (page: number) => ({ type: "SET_CURRENT_PAGE" as const, page })
export const toggleFetch = (isFetching: boolean) => ({ type: "TOGGLE_FETCH" as const, isFetching })
export const toggleFollowing = (id: number, isFetching: boolean) => ({ type: "TOGGLE_FOLLOWING" as const, id, isFetching })