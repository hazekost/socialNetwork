import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return <div>
        My Posts
        <div>New Post</div>
        <div>
            <textarea/>
            <button>Add Post</button>
        </div>
        <Post message={"HI"} likeCount={15}/>
        <Post message={"Sup"} likeCount={20}/>
    </div>
}