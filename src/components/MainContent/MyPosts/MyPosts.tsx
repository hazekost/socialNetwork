import React from "react"
import s from "../MainContent.module.css"
import { Post } from "./Post/Post"

export const MyPosts = () => {
    return <div className={s.posts}>
        <div>
            <textarea />
            <div>
                <button>Add post</button>
            </div>
        </div>
        <Post />
    </div>
}