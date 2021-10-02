import { ActionType, ProfilePageType } from "../../Redux/profileReducer"
import { MyPost } from "./MyPost/MyPost"
import s from "./Profile.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"

type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: ActionType) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div className={s.profile}>
        <ProfileInfo />
        <MyPost state={props.state} dispatch={props.dispatch} />
    </div>
}