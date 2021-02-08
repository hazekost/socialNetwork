import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {rootStateType} from "../../Redux/reduxStore";
import {getUserProfile, userProfileType} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type ProfileContainerPropsType = {
    profile: userProfileType|null
    getUserProfile: (userId: string) => void
}
type routerType = {
    userId: string
}
type PropsType = RouteComponentProps<routerType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: rootStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}), withRouter, withAuthRedirect
)(ProfileContainer)
