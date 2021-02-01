import React from "react";
import s from "./Post.module.css";

type PostPropsType = {
    message: string
    likeCount: number
}

export const Post: React.FC<PostPropsType> = (props: PostPropsType) => {
    return <div className={s.post}>
        <img src={"https://themindsetproject.com.au/wp-content/uploads/2017/08/avatar-icon.png"}/>
        <span className={s.text}>
            {props.message}
        </span>
        <div>
            <span>Like {props.likeCount}</span>
        </div>
    </div>
}