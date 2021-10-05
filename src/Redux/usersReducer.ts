export type ItemType = {
    id: number
    name: string
    uniqueUrlName: string | null
    photos: { small: string | null, large: string | null }
    status: string | null
    followed: boolean
}
type InitialStateType = {
    items: Array<ItemType>
    totalCount: number
    error: string
}
type FollowUnfollowActionCreatorType = {
    type: "FOLLOW-UNFOLLOW"
    id: number
    followed: boolean
}
type SetUsersType = {
    type: "SET-USERS"
    items: Array<ItemType>
}
type ActionType = FollowUnfollowActionCreatorType | SetUsersType

let initialState: InitialStateType = {
    items: [
        {
            "name": "antoshka_11659",
            "id": 20040,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "atnon_shurup11659",
            "id": 20039,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "Some_log",
            "id": 20038,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": "dsfdg",
            "followed": false
        },
        {
            "name": "brilook",
            "id": 20037,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        }
    ],
    totalCount: 0,
    error: ""
}

export const userReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW-UNFOLLOW":
            return { ...state, items: state.items.map(i => i.id === action.id ? { ...i, followed: action.followed } : i) }
        case "SET-USERS":
            return { ...state, items: [...state.items, ...action.items] }
        default:
            return state
    }
}

export const followUnfollowAC = (id: number, followed: boolean): FollowUnfollowActionCreatorType => (
    {
        type: "FOLLOW-UNFOLLOW",
        id,
        followed
    }
)
export const setUsersAC = (items: Array<ItemType>): SetUsersType => ({ type: "SET-USERS", items })