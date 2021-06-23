
export type PostType = {
    id: number
    message: string
    likesCount: number
}
type UserType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type ProfilePageType = {
    posts: Array<PostType>
}
export type MessagesPageType = {
    users: Array<UserType>
    messages: Array<MessageType>
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

export const state: StateType = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you ?", likesCount: 15 },
            { id: 2, message: "It's my first post", likesCount: 20 }
        ]
    },
    messagesPage: {
        users: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Sveta" },
            { id: 3, name: "Sasha" },
            { id: 4, name: "Victor" },
            { id: 5, name: "Igon" },
            { id: 6, name: "Jason" },
            { id: 7, name: "Violet" }
        ],
        messages: [
            { id: 1, message: "Hello" },
            { id: 2, message: "HI" },
            { id: 3, message: "Don't ignore me" },
            { id: 4, message: "Heey" }
        ]
    }
}