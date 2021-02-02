type AddPostActionType = {
    type: "ADD-POST"
}
type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
type ChangePostTextActionType = {
    type: "CHANGE-POST-TEXT"
    value: string
}
type ChangeMessageTextActionType = {
    type: "CHANGE-MESSAGE-TEXT"
    value: string
}
type ActionType = AddPostActionType|AddMessageActionType|ChangePostTextActionType|ChangeMessageTextActionType
type storeType = {
    _state: {
        profilePage: {
            posts: Array<{ id: number, message: string, likeCount: number }>
            newPostText: string
        }
        messagesPage: {
            dialogs: Array<{ id: number, name: string }>,
            messages: Array<{ id: number, message: string }>,
            newMessageText: string
        }
    }
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => {
        profilePage: {
            posts: Array<{ id: number, message: string, likeCount: number }>
            newPostText: string
        }
        messagesPage: {
            dialogs: Array<{ id: number, name: string }>,
            messages: Array<{ id: number, message: string }>,
            newMessageText: string
        }
    }
    dispatch: (action: ActionType) => void
}

export let store: storeType = {
    _state: {
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
            ],
            newMessageText: ""
        }
    },
    _callSubscriber() {
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {id: 3, message: this._state.profilePage.newPostText, likeCount: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber()
        }
        if (action.type === "ADD-MESSAGE") {
            let newMessage = {id: 4, message: this._state.messagesPage.newMessageText}
            this._state.messagesPage.messages.push(newMessage)
            this._state.messagesPage.newMessageText = ""
            this._callSubscriber()
        }
        if (action.type === "CHANGE-POST-TEXT") {
            this._state.profilePage.newPostText = action.value
            this._callSubscriber()
        }
        if (action.type === "CHANGE-MESSAGE-TEXT") {
            this._state.messagesPage.newMessageText = action.value
            this._callSubscriber()
        }
    }
}
