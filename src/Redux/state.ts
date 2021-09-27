import { rerenderEntireTree } from './../rerender';
export type PostType = {
    post: string
    id: number
    likesCount: number
}
export type DialogType = {
    name: string
    id: number
}
export type MessageType = {
    message: string
    id: number
}
type ProfilePageType = {
    posts: Array<PostType>
}
export type MessagesPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

export let state: StateType = {
    profilePage: {
        posts: [
            { post: "Hi, how are you", id: 1, likesCount: 21 },
            { post: "How your it-kamasutra", id: 2, likesCount: 15 }
        ],
    },
    messagesPage: {
        messages: [
            { message: "Hi", id: 1 },
            { message: "How are u", id: 2 },
            { message: "Sup", id: 3 }
        ],
        dialogs: [
            { name: "Dimych", id: 1 },
            { name: "Valera", id: 2 },
            { name: "Vika", id: 3 },
            { name: "Sveta", id: 4 },
            { name: "Andrey", id: 5 },
        ]
    }
}

export const addPost = (post: string) => {
    state.profilePage.posts.push({ post, id: 3, likesCount: 0 })
    rerenderEntireTree(state)
}