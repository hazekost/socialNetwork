import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postsData = [
        {id: 1, message:"Hi", likeCount: 10},
        {id: 2, message:"Sup",  likeCount: 15}
    ]

    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea />
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} likeCount={postsData[0].likeCount}/>
                <Post message={postsData[1].message} likeCount={postsData[1].likeCount}/>
            </div>
        </div>
    )
}