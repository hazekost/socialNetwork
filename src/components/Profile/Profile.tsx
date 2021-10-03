import { ActionType, ProfilePageType } from "../../Redux/profileReducer"
import { MyPostContainer } from "./MyPost/MyPostContainer"
import s from "./Profile.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"

type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: ActionType) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div className={s.profile}>
        <ProfileInfo />
        <MyPostContainer state={props.state} dispatch={props.dispatch} />
    </div>
}