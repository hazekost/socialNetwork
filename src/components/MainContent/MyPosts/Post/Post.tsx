import s from "./Post.module.css"

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post: React.FC<PostPropsType> = (props) => {
    return <div className={s.post}>
        <img src={"https://upload.wikimedia.org/wikipedia/commons/2/24/Missing_avatar.svg"} />
        {props.message}
        <div>
            <span>Like </span>
            <span>{props.likesCount}</span>
        </div>
    </div>
}