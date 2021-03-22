import {Dispatch} from "redux";
import {networkAPI} from "../api/networkAPI";

type AddPostActionReturnType = {
    type: "profile/ADD-POST"
    value: string
}
type setUserProfileReturnType = {
    type: "profile/SET-USER-PROFILE"
    profile: userProfileType
}
type setUserStatusReturnType = {
    type: "profile/SET-USER-STATUS",
    status: string
}
type DeletePostReturnType = ReturnType<typeof DeletePost>
type SavePhotoSuccessReturnType = ReturnType<typeof savePhotoSuccess>
type ActionType =
    AddPostActionReturnType
    | setUserProfileReturnType
    | setUserStatusReturnType
    | DeletePostReturnType
    | SavePhotoSuccessReturnType
export type userProfileType = {
    aboutMe?: string
    contacts?: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    userId?: number
    photos: {
        small: string | null
        large: string | null
    }
}
type initialStateType = {
    posts: Array<{ id: number, message: string, likeCount: number }>
    profile: userProfileType | null
    userStatus: string
}

let initialState: initialStateType = {
    posts: [
        {id: 1, message: "Hi", likeCount: 10},
        {id: 2, message: "Sup", likeCount: 15}
    ],
    profile: null,
    userStatus: ""
}

export const profileReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "profile/ADD-POST":
            return {...state, posts: [...state.posts, {id: 3, message: action.value, likeCount: 0}]}
        case "profile/SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "profile/SET-USER-STATUS":
            return {...state, userStatus: action.status}
        case "profile/DELETE-POST":
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
        case "profile/SAVE-PHOTO":
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }
}

export const AddPost = (value: string): AddPostActionReturnType => ({type: "profile/ADD-POST", value})
const SetUserProfile = (profile: userProfileType): setUserProfileReturnType => ({
    type: "profile/SET-USER-PROFILE", profile
})
const SetUserStatus = (status: string): setUserStatusReturnType => ({type: "profile/SET-USER-STATUS", status})
export const DeletePost = (id: number) => ({type: "profile/DELETE-POST", id} as const)
const savePhotoSuccess = (photos: {small: string, large: string}) => ({type: "profile/SAVE-PHOTO", photos} as const)

export const getUserProfile = (userId: number) => async (dispatch: Dispatch<ActionType>) => {
    let response = await networkAPI.getProfile(userId)
    dispatch(SetUserProfile(response.data))
}
export const getStatus = (userId: number) => async (dispatch: Dispatch<ActionType>) => {
    let response = await networkAPI.getStatus(userId)
    dispatch(SetUserStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch<ActionType>) => {
    let response = await networkAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(SetUserStatus(status))
    }
}
export const savePhoto = (file: File) => async (dispatch: Dispatch<ActionType>) => {
    let response = await networkAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data))
    }
}