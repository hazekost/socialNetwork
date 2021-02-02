import {Render} from "../Render";

type stateType = {
    profilePage: {
        posts: Array<{ id: number, message: string, likeCount: number }>
        newPostText: string
    }
    messagesPage: {
        dialogs: Array<{ id: number, name: string }>,
        messages: Array<{ id: number, message: string }>
    }
}

export let state: stateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi", likeCount: 10},
            {id: 2, message: "Sup", likeCount: 15}
        ],
        newPostText: ""
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: "Konstantin"},
            {id: 2, name: "Alex"},
            {id: 3, name: "John"},
            {id: 4, name: "Ler"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Yo"},
            {id: 3, message: "Sup"}
        ]
    }
}

export const changePostText = (value: string) => {
    state.profilePage.newPostText = value
    Render(state, addPost, changePostText)
}
export const addPost = () => {
    let newPost = {id: 3, message: state.profilePage.newPostText, likeCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    Render(state, addPost, changePostText)
}