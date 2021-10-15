import { Dispatch } from "redux"
import { socialAPI, UserProfileType } from "../api/api"

type PostType = {
    post: string
    id: number
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    userProfile: UserProfileType | null
    userStatus: string
}

type ActionType = AddPostActionType | OnPostChangeActionType | SetUserProfileActionType | SetUserStatusActionType

let initialState: ProfilePageType = {
    posts: [
        { post: "Hi, how are you", id: 1, likesCount: 21 },
        { post: "How your it-kamasutra", id: 2, likesCount: 15 }
    ],
    newPostText: "",
    userProfile: null,
    userStatus: "",
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            if (state.newPostText.trim() !== "") {
                return { ...state, posts: [...state.posts, { id: 4, post: state.newPostText, likesCount: 0 }], newPostText: "" }
            }
            return { ...state, newPostText: "" }
        case "ON-POST-CHANGE":
            return { ...state, newPostText: action.value }
        case "SET-USER-PROFILE":
            return { ...state, userProfile: action.profile }
        case "SET-USER-STATUS":
            return { ...state, userStatus: action.status }
        default:
            return state
    }
}

type AddPostActionType = {
    type: "ADD-POST"
}
type OnPostChangeActionType = {
    type: "ON-POST-CHANGE"
    value: string
}
type SetUserProfileActionType = {
    type: "SET-USER-PROFILE"
    profile: UserProfileType
}
type SetUserStatusActionType = {
    type: "SET-USER-STATUS"
    status: string
}

export const addPost = (): AddPostActionType => ({ type: "ADD-POST" })
export const onPostChange = (value: string): OnPostChangeActionType => ({
    type: "ON-POST-CHANGE",
    value
})
const setUserProfile = (profile: UserProfileType): SetUserProfileActionType => ({
    type: "SET-USER-PROFILE",
    profile
})
const setUserStatus = (status: string): SetUserStatusActionType => ({
    type: "SET-USER-STATUS",
    status
})

export const getUserProfile = (id: string) => (dispatch: Dispatch) => {
    socialAPI.getUserProfile(id)
        .then(resp => {
            dispatch(setUserProfile(resp.data))
        })
}
export const getUserStatus = (id: string) => (dispatch: Dispatch) => {
    socialAPI.getUserStatus(id)
        .then(resp => {
            dispatch(setUserStatus(resp.data))
        })
}
export const updateMyStatus = (status: string) => (dispatch: Dispatch) => {
    socialAPI.updateMyStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}