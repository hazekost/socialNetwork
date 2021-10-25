import { Dispatch } from "redux"
import { profileAPI, UserProfileType } from "../api/api"

const ADD_POST = "profile/ADD_POST"
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_USER_STATUS = "profile/SET_USER_STATUS"

type PostType = {
    post: string
    id: number
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    userProfile: UserProfileType | null
    userStatus: string
}

type ActionType = ReturnType<typeof addPost> | ReturnType<typeof setUserProfile> | ReturnType<typeof setUserStatus>

let initialState: ProfilePageType = {
    posts: [
        { post: "Hi, how are you", id: 1, likesCount: 21 },
        { post: "How your it-kamasutra", id: 2, likesCount: 15 }
    ],
    userProfile: null,
    userStatus: "",
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return { ...state, posts: [...state.posts, { id: 4, post: action.text, likesCount: 0 }] }
        case SET_USER_PROFILE:
            return { ...state, userProfile: action.profile }
        case SET_USER_STATUS:
            return { ...state, userStatus: action.status }
        default:
            return state
    }
}

export const addPost = (text: string) => ({ type: ADD_POST, text } as const)
const setUserProfile = (profile: UserProfileType) => ({ type: SET_USER_PROFILE, profile } as const)
const setUserStatus = (status: string) => ({ type: SET_USER_STATUS, status } as const)

export const getUserProfile = (id: string) => async (dispatch: Dispatch) => {
    let res = await profileAPI.getProfile(id)
    dispatch(setUserProfile(res.data))
}
export const getUserStatus = (id: string) => async (dispatch: Dispatch) => {
    let res = await profileAPI.getStatus(id)
    dispatch(setUserStatus(res.data))
}
export const updateMyStatus = (status: string) => async (dispatch: Dispatch) => {
    let res = await profileAPI.updateMyStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}