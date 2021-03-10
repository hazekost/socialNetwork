import {AddPost, DeletePost, profileReducer} from "./profile-reducer";

test("new post should be added", () => {
    const initialState = {
        posts: [
            {id: 1, message: "Hi", likeCount: 10},
            {id: 2, message: "Sup", likeCount: 15}
        ],
        profile: null,
        userStatus: ""
    }
    let action = AddPost("Yo")
    let newState = profileReducer(initialState, action)

    expect(newState.posts[2].message).toBe("Yo")
    expect(newState.posts.length).toBe(3)
})

test("post should be deleted", () => {
    const initialState = {
        posts: [
            {id: 1, message: "Hi", likeCount: 10},
            {id: 2, message: "Sup", likeCount: 15}
        ],
        profile: null,
        userStatus: ""
    }

    let action = DeletePost(2)
    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(1)
    expect(newState.posts[1]).toBeUndefined()
})