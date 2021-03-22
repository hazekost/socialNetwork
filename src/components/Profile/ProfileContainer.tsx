import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {rootStateType} from "../../Redux/reduxStore";
import {getUserProfile, getStatus, updateStatus, userProfileType, savePhoto} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type ProfileContainerPropsType = {
    profile: userProfileType | null
    status: string
    authorizedUserId: number
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
}
type routerType = {
    userId: string | undefined
}
type PropsType = RouteComponentProps<routerType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile {...this.props}
                        isOwner={!this.props.match.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        savePhoto={this.props.savePhoto}
        />
    }
}

const mapStateToProps = (state: rootStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.userStatus,
        authorizedUserId: state.auth.id,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile: getUserProfile, getStatus, updateStatus, savePhoto}), withRouter)(ProfileContainer)
