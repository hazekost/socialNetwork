import { Post } from "./Post/Post";
import s from "./MyPost.module.css"
import { PostType } from "../../..";

type MyPostPropsType = {
    posts: Array<PostType>
}

export const MyPost: React.FC<MyPostPropsType> = (props) => {

    return <div className={s.myPost}>
        <div>
            <textarea />
            <button>Add Post</button>
        </div>
        <div className={s.posts}>
            {
                props.posts.map(p => <Post key={p.id} value={p.post} likesCount={p.likesCount} />)
            }
        </div>
    </div>
}