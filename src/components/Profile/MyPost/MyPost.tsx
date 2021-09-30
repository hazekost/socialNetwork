import { Post } from "./Post/Post";
import s from "./MyPost.module.css"
import { ProfilePageType } from "../../../Redux/state";
import React, { ChangeEvent } from "react";

type MyPostPropsType = {
    state: ProfilePageType
    onPostChange: (post: string) => void
    addPost: () => void
}

export const MyPost: React.FC<MyPostPropsType> = (props) => {

    const addPost = () => {
        if (props.state.newPostText.trim()) {
            props.addPost()
        }
    }
    const onTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value)
    }

    return <div className={s.myPost}>
        <div>
            <textarea onChange={onTextAreaChange} value={props.state.newPostText} />
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
        </div>
        <div className={s.posts}>
            {
                props.state.posts.map(p => <Post key={p.id} value={p.post} likesCount={p.likesCount} />)
            }
        </div>
    </div>
}