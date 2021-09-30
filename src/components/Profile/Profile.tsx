import { ProfilePageType } from "../../Redux/state"
import { MyPost } from "./MyPost/MyPost"
import s from "./Profile.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"

type ProfilePropsType = {
    state: ProfilePageType
    onPostChange: (post: string) => void
    addPost: () => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div className={s.profile}>
        <ProfileInfo />
        <MyPost state={props.state} addPost={props.addPost} onPostChange={props.onPostChange} />
    </div>
}