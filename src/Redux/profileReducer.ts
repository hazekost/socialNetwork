import {AddMessageActionType, ChangeMessageTextActionType} from "./dialogsReducer";
import {followReturnType, setUsersReturnType, unFollowReturnType} from "./usersReducer";

export type AddPostActionType = {
    type: "ADD-POST"
}
export type ChangePostTextActionType = {
    type: "CHANGE-POST-TEXT"
    value: string
}
export type ActionType =
    AddPostActionType
    | ChangePostTextActionType
    | AddMessageActionType
    | ChangeMessageTextActionType
    | setUsersReturnType
    | unFollowReturnType
    | followReturnType
type initialStateType = {
    posts: Array<{ id: number, message: string, likeCount: number }>
    newPostText: string
}

let initialState: initialStateType = {
    posts: [
        {id: 1, message: "Hi", likeCount: 10},
        {id: 2, message: "Sup", likeCount: 15}
    ],
    newPostText: ""
}

export const profileReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: state.newPostText, likeCount: 0}],
                newPostText: ""
            }
        case "CHANGE-POST-TEXT":
            return {...state, newPostText: action.value}
        default:
            return state
    }
}

export const ChangePostTextAC = (value: string): ChangePostTextActionType => ({
    type: "CHANGE-POST-TEXT",
    value: value
})
export const AddPostAC = (): AddPostActionType => ({
    type: "ADD-POST"
})