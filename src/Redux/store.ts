/*
type StoreType = {
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

let store: StoreType = {
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
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.messagesPage, action)
        this._callSubscriber()
    }
}*/

export const fuck = () => {}
