export type ItemType = {
    id: number
    name: string
    uniqueUrlName: string | null
    photos: { small: string | undefined, large: string | undefined }
    status: string | null
    followed: boolean
}
export type UsersStateType = {
    items: Array<ItemType>
    totalCount: number
    error: string
    pageSize: number
    currentPage: number
    isFetching: boolean
}
export type GetType = {
    items: Array<ItemType>
    totalCount: number
    error: string
}
type ActionType = FollowUnfollowActionType | SetUsersActionType | SetCurrentPageActionType | ToggleFetchActionType


let initialState: UsersStateType = {
    items: [],
    totalCount: 0,
    error: "",
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
}

export const userReducer = (state: UsersStateType = initialState, action: ActionType): UsersStateType => {
    switch (action.type) {
        case "FOLLOW-UNFOLLOW":
            return { ...state, items: state.items.map(i => i.id === action.id ? { ...i, followed: action.followed } : i) }
        case "SET-USERS":
            return { ...state, ...action.data }
        case "SET-CURRENT-PAGE":
            return { ...state, currentPage: action.page }
        case "TOGGLE-FETCH":
            return { ...state, isFetching: action.fetch }
        default:
            return state
    }
}

type FollowUnfollowActionType = {
    type: "FOLLOW-UNFOLLOW"
    id: number
    followed: boolean
}
type SetUsersActionType = {
    type: "SET-USERS"
    data: GetType
}
type SetCurrentPageActionType = {
    type: "SET-CURRENT-PAGE"
    page: number
}
type ToggleFetchActionType = {
    type: "TOGGLE-FETCH"
    fetch: boolean
}

export const followUnfollow = (id: number, followed: boolean): FollowUnfollowActionType => (
    { type: "FOLLOW-UNFOLLOW", id, followed }
)
export const setUsers = (data: GetType): SetUsersActionType => ({ type: "SET-USERS", data })
export const setCurrentPage = (page: number): SetCurrentPageActionType => ({ type: "SET-CURRENT-PAGE", page })
export const toggleFetch = (fetch: boolean): ToggleFetchActionType => ({ type: "TOGGLE-FETCH", fetch })