import { PostType } from "../../state/state"
import { MyPosts } from "./MyPosts/MyPosts"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"

type ProfilePropsType = {
    posts: Array<PostType>
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div>
        <ProfileInfo />
        <MyPosts posts={props.posts} />
    </div>
}