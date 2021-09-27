import { PostType } from "../../Redux/state"
import { MyPost } from "./MyPost/MyPost"
import s from "./Profile.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"

type ProfilePropsType = {
    posts: Array<PostType>
    addPost: (post: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div className={s.profile}>
        <ProfileInfo />
        <MyPost posts={props.posts} addPost={props.addPost} />
    </div>
}