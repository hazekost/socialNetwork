import { Dispatch } from "redux"
import { socialAPI } from "../api/api"

type PostType = {
    post: string
    id: number
    likesCount: number
}
export type UserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: { small: string, large: string }
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    userProfile: UserProfileType
}

type ActionType = AddPostActionType | OnPostChangeActionType | SetUserProfileActionType

let initialState: ProfilePageType = {
    posts: [
        { post: "Hi, how are you", id: 1, likesCount: 21 },
        { post: "How your it-kamasutra", id: 2, likesCount: 15 }
    ],
    newPostText: "",
    userProfile: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: "",
            vk: "",
            twitter: "",
            instagram: "",
            youtube: "",
            github: "",
            mainLink: "",
        },
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 2,
        photos: { small: "", large: "", }
    }
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

export const addPost = (): AddPostActionType => ({ type: "ADD-POST" })
export const onPostChange = (value: string): OnPostChangeActionType => ({
    type: "ON-POST-CHANGE",
    value
})
const setUserProfile = (profile: UserProfileType): SetUserProfileActionType => ({
    type: "SET-USER-PROFILE",
    profile
})

export const getUserProfile = (id: string) => (dispatch: Dispatch) => {
    socialAPI.getUserProfile(id)
        .then(resp => {
            dispatch(setUserProfile(resp.data))
        })
}