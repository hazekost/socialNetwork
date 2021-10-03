export const lf = () => console.log("lf");


// import { dialogsReducer, MessagesPageType } from './dialogsReducer';
// import { ActionType, ProfilePageType, profileReducer } from './profileReducer';

// type StateType = {
//     profilePage: ProfilePageType
//     messagesPage: MessagesPageType
// }
// type StoreType = {
//     _state: StateType
//     getState: () => StateType
//     _subscriber: () => void
//     subscribe: (observer: () => void) => void
//     dispatch: (action: ActionType) => void
// }

// let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { post: "Hi, how are you", id: 1, likesCount: 21 },
//                 { post: "How your it-kamasutra", id: 2, likesCount: 15 }
//             ],
//             newPostText: ""
//         },
//         messagesPage: {
//             messages: [
//                 { message: "Hi", id: 1 },
//                 { message: "How are u", id: 2 },
//                 { message: "Sup", id: 3 }
//             ],
//             dialogs: [
//                 { name: "Dimych", id: 1 },
//                 { name: "Valera", id: 2 },
//                 { name: "Vika", id: 3 },
//                 { name: "Sveta", id: 4 },
//                 { name: "Andrey", id: 5 },
//             ],
//             newMessageText: ""
//         }
//     },
//     getState() {
//         return this._state
//     },
//     _subscriber() {
//         console.log("No subscribers");
//     },
//     subscribe(observer) {
//         this._subscriber = observer
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
//         this._subscriber()
//     }
// }