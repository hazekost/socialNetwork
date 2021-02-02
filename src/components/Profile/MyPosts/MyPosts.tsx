import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

type MyPostsPropsType = {
    profilePage: {
        posts: Array<{ id: number, message: string, likeCount: number }>
        newPostText: string
    }
    addPost: () => void
    changePostText: (value: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props: MyPostsPropsType) => {

    const addPost = () => {
        props.addPost()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostText(e.currentTarget.value)
    }

    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeHandler} value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {
                    props.profilePage.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)
                }
            </div>
        </div>
    )
}