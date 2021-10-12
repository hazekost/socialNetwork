import axios from "axios"
import React from "react"
import { connect } from "react-redux"
import { RouteComponentProps, withRouter } from "react-router"
import { addPostAC, onPostChangeAC, ProfilePageType, setUserProfileAC, UserProfileType } from "../../redux/profile-reducer"
import { DispatchType, StateType } from "../../redux/redux-store"
import { MyPost } from "./MyPost/MyPost"
import s from "./ProfileContainer.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"

type ProfilePropsType = {
    state: ProfilePageType
    addPost: () => void
    onPostChange: (value: string) => void
    setProfile: (profile: UserProfileType) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ? userId : 2}`)
            .then(resp => {
                this.props.setProfile(resp.data)
            })
    }

    render() {
        let { userProfile } = this.props.state

        return <div className={s.profile}>
            <ProfileInfo userProfile={userProfile} />
            <MyPost state={this.props.state} addPost={this.props.addPost} onPostChange={this.props.onPostChange} />
        </div>
    }
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
    },
    setProfile: (profile: UserProfileType) => {
        dispatch(setUserProfileAC(profile))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer))