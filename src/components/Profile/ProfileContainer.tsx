import { connect } from "react-redux"
import { addPostAC, onPostChangeAC, ProfilePageType } from "../../Redux/profileReducer"
import { DispatchType, StateType } from "../../Redux/redux-store"
import { MyPost } from "./MyPost/MyPost"
import s from "./ProfileContainer.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"

type ProfilePropsType = {
    state: ProfilePageType
    addPost: () => void
    onPostChange: (value: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div className={s.profile}>
        <ProfileInfo />
        <MyPost state={props.state} addPost={props.addPost} onPostChange={props.onPostChange} />
    </div>
}

const mapStateToProps = (state: StateType) => ({
    state: state.profilePage
})
const mapDispatchToProps = (dispatch: DispatchType) => ({
    addPost: () => {
        dispatch(addPostAC())
    },
    onPostChange: (value: string) => {
        dispatch(onPostChangeAC(value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)