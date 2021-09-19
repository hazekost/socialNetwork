import s from "./Post.module.css"

type PostType = {
    value: string
}

export function Post(props: PostType) {
    return <div className={s.post}>
        <img src="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-15.jpg" />
        {props.value}
        <div>
            <span>Like</span>
        </div>
    </div>
}