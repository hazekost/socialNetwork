import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {rootStateType} from "../../Redux/reduxStore";
import {SetUserProfile, userProfileType} from "../../Redux/profileReducer";

type ProfileContainerPropsType = {
    profile: null | userProfileType
    SetUserProfile: (profile: userProfileType) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`).then(response => {
            this.props.SetUserProfile(response.data)
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: rootStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {SetUserProfile})(ProfileContainer)