type followReturnType = {
    type: "FOLLOW"
    userID: number
}
type unFollowReturnType = {
    type: "UNFOLLOW"
    userID: number
}
type setUsersReturnType = {
    type: "SET-USERS"
    users: Array<userType>
}
type setCurrentPageReturnType = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}
type setTotalUsersCountReturnType = {
    type: "SET-TOTAL-USERS-COUNT"
    totalCount: number
}
export type setFetchingReturnType = {
    type: "SET-FETCHING"
    isFetching: boolean
}
type setFollowingReturnType = {
    type: "TOGGLE-FOLLOWING"
    userId: number
    isFetching: boolean
}
type ActionType = followReturnType|unFollowReturnType|setUsersReturnType|setFollowingReturnType
    |setCurrentPageReturnType|setTotalUsersCountReturnType|setFetchingReturnType
export type userType = {
    id: number
    photos: {small: string, large: string}
    followed: boolean
    name: string
    status: string
    uniqueUrlName: string
}
type initialStateType = {
    users: Array<userType>
    totalCount: number
    pageSize: 5
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

let initialState: initialStateType = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        case "TOGGLE-FOLLOWING":
            return {...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)}
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
export const setFollowing = (userId: number, isFetching: boolean): setFollowingReturnType => {
    return {
        type: "TOGGLE-FOLLOWING",
        userId,
        isFetching
    }
}