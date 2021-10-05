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

let initialState: ProfilePageType = {
    posts: [
        { post: "Hi, how are you", id: 1, likesCount: 21 },
        { post: "How your it-kamasutra", id: 2, likesCount: 15 }
    ],
    newPostText: ""
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
        default:
            return state
    }
}

export const addPostAC = (): AddPostActionType => ({ type: "ADD-POST" })
export const onPostChangeAC = (value: string): OnPostChangeActionType => ({
    type: "ON-POST-CHANGE",
    value
})