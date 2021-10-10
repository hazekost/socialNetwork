import { Post } from "./Post/Post";
import s from "./MyPost.module.css"
import React, { ChangeEvent } from "react";
import { ProfilePageType } from "../../../Redux/profile-reducer";

type MyPostPropsType = {
    state: ProfilePageType
    addPost: () => void
    onPostChange: (value: string) => void
}

export const MyPost: React.FC<MyPostPropsType> = (props) => {

    const addPost = () => {
        props.addPost()
        // props.dispatch(addPostAC())
    }
    const onTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value)
        // props.dispatch(onPostChangeAC(e.currentTarget.value))
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