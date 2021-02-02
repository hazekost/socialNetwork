import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

type AddPostActionType = {
    type: "ADD-POST"
}
type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
type ChangePostTextActionType = {
    type: "CHANGE-POST-TEXT"
    value: string
}
type ChangeMessageTextActionType = {
    type: "CHANGE-MESSAGE-TEXT"
    value: string
}
type ActionType = AddPostActionType|AddMessageActionType|ChangePostTextActionType|ChangeMessageTextActionType
type MyPostsPropsType = {
    profilePage: {
        posts: Array<{ id: number, message: string, likeCount: number }>
        newPostText: string
    }
    dispatch: (action: ActionType) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props: MyPostsPropsType) => {

    const addPost = () => {
        props.dispatch({type: "ADD-POST"})
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "CHANGE-POST-TEXT", value: e.currentTarget.value})
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