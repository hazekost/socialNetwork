import s from "./Post.module.css"

type PostType = {
    value: string
    likesCount: number
}

export function Post(props: PostType) {
    return <div className={s.post}>
        <img src="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-15.jpg" alt="" />
        {props.value}
        <div>
            <span>Like: {props.likesCount}</span>
        </div>
    </div>
}