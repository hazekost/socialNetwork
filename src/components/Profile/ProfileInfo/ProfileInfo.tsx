import s from "./ProfileInfo.module.css"
import avatar from "../../../assets/avatar.jpg"
import { UserProfileType } from "../../../redux/profile-reducer"

type ProfileInfoPropsType = {
    userProfile: UserProfileType
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    return <div>
        <div className={s.wall}>
            <img src="https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg" alt="" />
        </div>
        <div className={s.description}>
            <img src={props.userProfile.photos.large ? props.userProfile.photos.large : avatar} alt="" />
            <span>{props.userProfile.fullName}</span>
        </div>
    </div>
}