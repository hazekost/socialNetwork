import React from "react"
import s from "./MyPosts.module.css"
import { Post } from "./Post/Post"

export const MyPosts = () => {

    let postData = [
        { id: 1, message: "Hi, how are you ?", likesCount: 15 },
        { id: 2, message: "It's my first post", likesCount: 20 }
    ]

    return <div className={s.posts}>
        <div>
            <textarea />
            <div>
                <button>Add post</button>
            </div>
        </div>
        {postData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)}
    </div>
}