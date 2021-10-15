import s from "./ProfileInfo.module.css"
import avatar from "../../../assets/avatar.jpg"
import { UserProfileType } from "../../../api/api"
import { ProfileStatus } from "./ProfileStatus"

type ProfileInfoPropsType = {
    userProfile: UserProfileType | null
    userStatus: string
    updateMyStatus: (status: string) => void
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    return <div className={s.description}>
        <img src={props.userProfile?.photos.large ? props.userProfile.photos.large : avatar} alt="" />
        <span>{props.userProfile?.fullName}</span>
        <ProfileStatus status={props.userStatus} updateMyStatus={props.updateMyStatus} />
    </div>
}