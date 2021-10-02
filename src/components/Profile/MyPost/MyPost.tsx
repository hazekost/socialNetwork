import { Post } from "./Post/Post";
import s from "./MyPost.module.css"
import React, { ChangeEvent } from "react";
import { ActionType, addPostAC, onPostChangeAC, ProfilePageType } from "../../../Redux/profileReducer";

type MyPostPropsType = {
    state: ProfilePageType
    dispatch: (action: ActionType) => void
}

export const MyPost: React.FC<MyPostPropsType> = (props) => {

    const addPost = () => {
        props.dispatch(addPostAC())
    }
    const onTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(onPostChangeAC(e.currentTarget.value))
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