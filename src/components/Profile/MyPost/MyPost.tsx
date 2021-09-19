import { Post } from "./Post/Post";
import s from "./MyPost.module.css"

export function MyPost() {
    return <div className={s.myPost}>
        <div>
            <textarea />
            <button>Add Post</button>
        </div>
        <div className={s.posts}>
            <Post value="LOLO" />
            <Post value="KEK" />
        </div>
    </div>
}