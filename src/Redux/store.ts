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
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type MessagesPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageText: string
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _subscriber: () => void
    subscribe: (observer: () => void) => void
    addPost: () => void
    onPostChange: (value: string) => void
    addMessage: () => void
    onMessageChange: (value: string) => void
}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                { post: "Hi, how are you", id: 1, likesCount: 21 },
                { post: "How your it-kamasutra", id: 2, likesCount: 15 }
            ],
            newPostText: ""
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
            ],
            newMessageText: ""
        }
    },
    getState() {
        return this._state
    },
    _subscriber() {
        console.log("No subscribers");
    },
    subscribe(observer) {
        this._subscriber = observer
    },
    addPost() {
        let post = this._state.profilePage.newPostText
        this._state.profilePage.posts.push({ post, id: 3, likesCount: 0 })
        this._state.profilePage.newPostText = ""
        this._subscriber()
    },
    onPostChange(value) {
        this._state.profilePage.newPostText = value
        this._subscriber()
    },
    addMessage() {
        let message = this._state.messagesPage.newMessageText
        this._state.messagesPage.messages.push({ message, id: 4 })
        this._state.messagesPage.newMessageText = ""
        this._subscriber()
    },
    onMessageChange(value) {
        this._state.messagesPage.newMessageText = value
        this._subscriber()
    }
}