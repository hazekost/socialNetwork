import React from "react"
import s from "./MyPosts.module.css"
import { Post } from "./Post/Post"

export const MyPosts = () => {
    return <div className={s.posts}>
        <div>
            <textarea />
            <div>
                <button>Add post</button>
            </div>
        </div>
        <Post message={"Hi, how are you ?"} likeCount={15} />
        <Post message={"It's my first post"} likeCount={20} />
    </div>
}