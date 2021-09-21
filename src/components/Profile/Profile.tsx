import { MyPost } from "./MyPost/MyPost"
import s from "./Profile.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"

export function Profile() {
    return <div className={s.profile}>
        <ProfileInfo />
        <MyPost />
    </div>
}