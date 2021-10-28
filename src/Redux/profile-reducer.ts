import { Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { profileAPI, UserProfileType, ValuesType } from "../api/api"
import { AppRootStateType } from "./redux-store"

const ADD_POST = "profile/ADD_POST"
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_USER_STATUS = "profile/SET_USER_STATUS"
const SET_USER_PHOTO = "profile/SET_USER_PHOTO"

type PostType = {
    post: string
    id: number
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    userProfile: UserProfileType
    userStatus: string
}

type ActionType = ReturnType<typeof addPost> | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserStatusAC> | ReturnType<typeof setUserPhotoAC>

let initialState: ProfilePageType = {
    posts: [
        { post: "Hi, how are you", id: 1, likesCount: 21 },
        { post: "How your it-kamasutra", id: 2, likesCount: 15 }
    ],
    userProfile: {
        aboutMe: "",
        contacts: {
            facebook: "",
            github: "",
            instagram: "",
            mainLink: "",
            twitter: "",
            vk: "",
            website: "",
            youtube: "",
        },
        fullName: "",
        lookingForAJob: false,
        lookingForAJobDescription: "",
        photos: { small: undefined, large: undefined },
        userId: undefined
    },
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
        case SET_USER_PHOTO:
            return { ...state, userProfile: { ...state.userProfile, photos: action.images } }
        default:
            return state
    }
}

export const addPost = (text: string) => ({ type: ADD_POST, text } as const)
const setUserProfileAC = (profile: UserProfileType) => ({ type: SET_USER_PROFILE, profile } as const)
const setUserStatusAC = (status: string) => ({ type: SET_USER_STATUS, status } as const)
const setUserPhotoAC = (images: { small: string, large: string }) => ({ type: SET_USER_PHOTO, images } as const)

export const getUserProfile = (id: string) => async (dispatch: Dispatch) => {
    let res = await profileAPI.getProfile(id)
    dispatch(setUserProfileAC(res.data))
}
export const getUserStatus = (id: string) => async (dispatch: Dispatch) => {
    let res = await profileAPI.getStatus(id)
    dispatch(setUserStatusAC(res.data))
}
export const updateMyStatus = (status: string) => async (dispatch: Dispatch) => {
    let res = await profileAPI.updateMyStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setUserStatusAC(status))
    }
}
export const savePhoto = (image: File) => async (dispatch: Dispatch) => {
    let res = await profileAPI.savePhoto(image)
    if (res.data.resultCode === 0) {
        dispatch(setUserPhotoAC(res.data.data.photos))
    }
}
export const saveProfile = (values: ValuesType): ThunkAction<void, AppRootStateType, unknown, ActionType> =>
    async (dispatch, getState: () => AppRootStateType) => {
        let res = await profileAPI.saveProfile(values)
        if (res.data.resultCode === 0) {
            if (getState().auth.id) {
                let id = String(getState().auth.id)
                dispatch(getUserProfile(id))
            }
        }
    }