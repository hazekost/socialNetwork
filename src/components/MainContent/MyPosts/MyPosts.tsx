
import { PostType } from "../../../state/state"
import s from "./MyPosts.module.css"
import { Post } from "./Post/Post"

type MyPostsPropsType = {
    posts: Array<PostType>
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    return <div className={s.posts}>
        <div>
            <textarea />
            <div>
                <button>Add post</button>
            </div>
        </div>
        {props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)}
    </div>
}