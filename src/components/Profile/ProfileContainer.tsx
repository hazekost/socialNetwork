import React from "react"
import { connect } from "react-redux"
import { RouteComponentProps, withRouter } from "react-router"
import { compose } from "redux"
import { ValuesType } from "../../api/api"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { addPost, getUserProfile, getUserStatus, ProfilePageType, savePhoto, saveProfile, updateMyStatus } from "../../redux/profile-reducer"
import { AppRootStateType } from "../../redux/redux-store"
import { MyPost } from "./MyPost/MyPost"
import s from "./ProfileContainer.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"

type ProfilePropsType = {
    profilePage: ProfilePageType
    authUserId: number | null
    addPost: (value: string) => void
    getUserProfile: (id: string) => void
    getUserStatus: (id: string) => void
    updateMyStatus: (status: string) => void
    savePhoto: (image: File) => void
    saveProfile: (values: ValuesType) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.authUserId)
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        let { userProfile, userStatus } = this.props.profilePage

        return <div className={s.profile}>
            <ProfileInfo isOwner={!this.props.match.params.userId} userProfile={userProfile} userStatus={userStatus}
                saveProfile={this.props.saveProfile} savePhoto={this.props.savePhoto} updateMyStatus={this.props.updateMyStatus} />
            <MyPost state={this.props.profilePage} addPost={this.props.addPost} />
        </div>
    }
}

const mapStateToProps = (state: AppRootStateType): { profilePage: ProfilePageType, authUserId: number | null } => ({
    profilePage: state.profilePage,
    authUserId: state.auth.id
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, { addPost, getUserProfile, getUserStatus, updateMyStatus, savePhoto, saveProfile }),
    withRouter, withAuthRedirect)(ProfileContainer)