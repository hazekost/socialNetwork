import React from "react"
import { connect } from "react-redux"
import { RouteComponentProps, withRouter } from "react-router"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { addPost, getUserProfile, getUserStatus, ProfilePageType, updateMyStatus } from "../../redux/profile-reducer"
import { AppRootStateType } from "../../redux/redux-store"
import { MyPost } from "./MyPost/MyPost"
import s from "./ProfileContainer.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"

type ProfilePropsType = {
    state: ProfilePageType
    authUserId: number | null
    addPost: (value: string) => void
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
            userId = String(this.props.authUserId)
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        let { userProfile, userStatus } = this.props.state

        return <div className={s.profile}>
            <ProfileInfo userProfile={userProfile} userStatus={userStatus} updateMyStatus={this.props.updateMyStatus} />
            <MyPost state={this.props.state} addPost={this.props.addPost} />
        </div>
    }
}

const mapStateToProps = (state: AppRootStateType): { state: ProfilePageType, authUserId: number | null } => ({
    state: state.profilePage,
    authUserId: state.auth.id
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, { addPost, getUserProfile, getUserStatus, updateMyStatus }),
    withRouter, withAuthRedirect)(ProfileContainer)