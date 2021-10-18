import { Post } from "./Post/Post";
import s from "./MyPost.module.css"
import React from "react";
import { ProfilePageType } from "../../../redux/profile-reducer";
import { AddItemForm } from "../../common/AddItemForm";

type MyPostPropsType = {
    state: ProfilePageType
    addPost: (value: string) => void
}

export const MyPost: React.FC<MyPostPropsType> = (props) => {
    const { state, addPost } = props
    return <div className={s.myPost}>
        <AddItemForm addItem={addPost} buttonName={"Add post"} />
        <div className={s.posts}>
            {
                state.posts.map(p => <Post key={p.id} value={p.post} likesCount={p.likesCount} />)
            }
        </div>
    </div>
}