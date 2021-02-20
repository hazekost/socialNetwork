import {Dispatch} from "redux";
import {networkAPI} from "../api/networkAPI";

type AddPostActionReturnType = {
    type: "ADD-POST"
    value: string
}
type setUserProfileReturnType = {
    type: "SET-USER-PROFILE"
    profile: userProfileType
}
type setUserStatusReturnType = {
    type: "SET-USER-STATUS",
    status: string
}
type ActionType = AddPostActionReturnType|setUserProfileReturnType|setUserStatusReturnType
export type userProfileType = {
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
    photos: {
        small: string
        large: string
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
        case "ADD-POST":
            return {...state, posts: [...state.posts, {id: 3, message: action.value, likeCount: 0}]}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-USER-STATUS":
            return {...state, userStatus: action.status}
        default:
            return state
    }
}

export const AddPost = (value: string): AddPostActionReturnType => ({
    type: "ADD-POST",
    value
})
const SetUserProfile = (profile: userProfileType): setUserProfileReturnType => ({
    type: "SET-USER-PROFILE",
    profile
})
const SetUserStatus = (status: string): setUserStatusReturnType => ({
    type: "SET-USER-STATUS",
    status
})

export const getProfile = (userId: number) => {
    return (dispatch: Dispatch<ActionType>) => {
        networkAPI.getProfile(userId).then(response => {
            dispatch(SetUserProfile(response.data))
        })
    }
}
export const getStatus = (userId: number) => {
    return (dispatch: Dispatch<ActionType>) => {
        networkAPI.getStatus(userId).then(response => {
            dispatch(SetUserStatus(response.data))
        })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch<ActionType>) => {
        networkAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(SetUserStatus(status))
            }
        })
    }
}