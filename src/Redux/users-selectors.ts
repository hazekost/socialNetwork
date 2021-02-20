import {rootStateType} from "./reduxStore";

export const getUsers = (state: rootStateType) => {
    return state.userPage.users
}

export const getPageSize = (state: rootStateType) => {
    return state.userPage.pageSize
}

export const getTotalUsersCount = (state: rootStateType) => {
    return state.userPage.totalCount
}

export const getCurrentPage = (state: rootStateType) => {
    return state.userPage.currentPage
}

export const getIsFetching = (state: rootStateType) => {
    return state.userPage.isFetching
}

export const getFollowingInProgress = (state: rootStateType) => {
    return state.userPage.followingInProgress
}