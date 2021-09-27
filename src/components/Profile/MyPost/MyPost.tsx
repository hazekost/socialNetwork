import { Post } from "./Post/Post";
import s from "./MyPost.module.css"
import { PostType } from "../../../Redux/state";
import React from "react";

type MyPostPropsType = {
    posts: Array<PostType>
    addPost: (post: string) => void
}

export const MyPost: React.FC<MyPostPropsType> = (props) => {

    const addPost = () => {
        if (textAreaRef.current) {
            props.addPost(textAreaRef.current.value)
            textAreaRef.current.value = ""
        }
    }
    const textAreaRef = React.createRef<HTMLTextAreaElement>()

    return <div className={s.myPost}>
        <div>
            <textarea ref={textAreaRef} />
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
        </div>
        <div className={s.posts}>
            {
                props.posts.map(p => <Post key={p.id} value={p.post} likesCount={p.likesCount} />)
            }
        </div>
    </div>
}