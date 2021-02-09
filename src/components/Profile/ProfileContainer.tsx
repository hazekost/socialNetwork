import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {rootStateType} from "../../Redux/reduxStore";
import {getProfile, getStatus, updateStatus, userProfileType} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type ProfileContainerPropsType = {
    profile: userProfileType|null
    status: string
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type routerType = {
    userId: string
}
type PropsType = RouteComponentProps<routerType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "13123"
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)

    }

    render() {
        return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

const mapStateToProps = (state: rootStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.userStatus
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}), withRouter, /*withAuthRedirect*/
)(ProfileContainer)
