import s from "./Post.module.css"

type PostPropsType = {
    message: string
    likeCount: number
}

export const Post: React.FC<PostPropsType> = (props) => {
    return <div className={s.post}>
        <img src={"http://cdn.onlinewebfonts.com/svg/img_173956.png"} />
        {props.message}
        <div>
            <span>Like</span>
            <span>{props.likeCount}</span>
        </div>
    </div>
}