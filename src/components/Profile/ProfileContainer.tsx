import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {rootStateType} from "../../Redux/reduxStore";
import {getUserProfile, userProfileType} from "../../Redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type ProfileContainerPropsType = {
    profile: userProfileType|null
    getUserProfile: (userId: string) => void
    isAuth: boolean
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
        // networkAPI.getUserProfile(userId).then(response => {
        //         this.props.SetUserProfile(response.data)
        // })
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={"login"}/>
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: rootStateType) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(ProfileContainerWithRouter)