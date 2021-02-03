import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

type MyPostsPropsType = {
    addPost: () => void
    changePostText: (value: string) => void
    state: {
        posts: Array<{ id: number, message: string, likeCount: number }>
        newPostText: string
    }
}

export const MyPosts: React.FC<MyPostsPropsType> = (props: MyPostsPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostText(e.currentTarget.value)
    }
    const addPost = () => {
        props.addPost()
    }

    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeHandler} value={props.state.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {
                    props.state.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)
                }
            </div>
        </div>
    )
}