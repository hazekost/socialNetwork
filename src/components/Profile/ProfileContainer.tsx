import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {rootStateType} from "../../Redux/reduxStore";
import {SetUserProfile, userProfileType} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter } from "react-router-dom";
import {networkAPI} from "../../api/api";

type ProfileContainerPropsType = {
    profile: userProfileType|null
    SetUserProfile: (profile: userProfileType) => void
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
        networkAPI.getUserProfile(userId).then(response => {
                this.props.SetUserProfile(response.data)
        })
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: rootStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {SetUserProfile})(ProfileContainerWithRouter)