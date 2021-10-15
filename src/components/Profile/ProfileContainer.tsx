import React from "react"
import { connect } from "react-redux"
import { RouteComponentProps, withRouter } from "react-router"
import { compose } from "redux"
import { addPost, getUserProfile, getUserStatus, onPostChange, ProfilePageType, updateMyStatus } from "../../redux/profile-reducer"
import { StateType } from "../../redux/redux-store"
import { MyPost } from "./MyPost/MyPost"
import s from "./ProfileContainer.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"

type ProfilePropsType = {
    state: ProfilePageType
    addPost: () => void
    onPostChange: (value: string) => void
    getUserProfile: (id: string) => void
    getUserStatus: (id: string) => void
    updateMyStatus: (status: string) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "13123"
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        let { userProfile, userStatus } = this.props.state

        return <div className={s.profile}>
            <ProfileInfo userProfile={userProfile} userStatus={userStatus} updateMyStatus={this.props.updateMyStatus} />
            <MyPost state={this.props.state} addPost={this.props.addPost} onPostChange={this.props.onPostChange} />
        </div>
    }
}

const mapStateToProps = (state: StateType) => ({
    state: state.profilePage,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, { addPost, onPostChange, getUserProfile, getUserStatus, updateMyStatus }),
    withRouter,
    /*withAuthRedirect*/)(ProfileContainer)