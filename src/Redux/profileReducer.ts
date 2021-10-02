import { AddMessageActionType, OnMessageChangeActionType } from "./dialogsReducer";

type PostType = {
    post: string
    id: number
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type AddPostActionType = {
    type: "ADD-POST"
}
type OnPostChangeActionType = {
    type: "ON-POST-CHANGE",
    value: string
}
export type ActionType = AddPostActionType | OnPostChangeActionType | AddMessageActionType | OnMessageChangeActionType

export const profileReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            if (state.newPostText.trim() !== "") {
                return { ...state, posts: [...state.posts, { id: 4, post: state.newPostText, likesCount: 0 }], newPostText: "" }
            }
            return state
        case "ON-POST-CHANGE":
            return { ...state, newPostText: action.value }
        default:
            return state
    }
}

export const addPostAC = (): AddPostActionType => ({ type: "ADD-POST" })
export const onPostChangeAC = (value: string): OnPostChangeActionType => ({
    type: "ON-POST-CHANGE",
    value
})