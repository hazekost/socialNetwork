import React from "react"
import { connect } from "react-redux"
import { Redirect, RouteComponentProps, withRouter } from "react-router"
import { addPost, getUserProfile, onPostChange, ProfilePageType } from "../../redux/profile-reducer"
import { StateType } from "../../redux/redux-store"
import { MyPost } from "./MyPost/MyPost"
import s from "./ProfileContainer.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"

type ProfilePropsType = {
    state: ProfilePageType
    isAuth: boolean
    addPost: () => void
    onPostChange: (value: string) => void
    getUserProfile: (id: string) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(userId)
    }

    render() {
        let { userProfile } = this.props.state

        if (!this.props.isAuth) {
            return <Redirect to={"/login"} />
        }

        return <div className={s.profile}>
            <ProfileInfo userProfile={userProfile} />
            <MyPost state={this.props.state} addPost={this.props.addPost} onPostChange={this.props.onPostChange} />
        </div>
    }
}

const mapStateToProps = (state: StateType) => ({
    state: state.profilePage,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { addPost, onPostChange, getUserProfile })(withRouter(ProfileContainer))