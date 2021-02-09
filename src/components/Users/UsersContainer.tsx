import {connect} from "react-redux";
import {rootStateType} from "../../Redux/reduxStore";
import {follow, getUsers, setFollowing, unFollow, userFollow, userType, userUnFollow} from "../../Redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type UsersPropsType = {
    users: Array<userType>
    totalCount: number
    pageSize: 5
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    getUsers: (currentPage: number, pageSize: number) => void
    userFollow: (userId: number) => void
    userUnFollow: (userId: number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                totalCount={this.props.totalCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                userFollow={this.props.userFollow}
                userUnFollow={this.props.userUnFollow}
            />
        </>
    }
}

const mapStateToProps = (state: rootStateType) => {
    return {
        users: state.userPage.users,
        totalCount: state.userPage.totalCount,
        pageSize: state.userPage.pageSize,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {
    follow, unFollow, setFollowing, getUsers, userFollow, userUnFollow
    }),
    /*withAuthRedirect*/
)(UsersContainer)

