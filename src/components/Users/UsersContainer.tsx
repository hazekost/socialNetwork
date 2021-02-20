import {connect} from "react-redux";
import {rootStateType} from "../../Redux/reduxStore";
import {follow, requestUsers, setFollowing, unFollow, userFollow, userType, userUnFollow
} from "../../Redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getCurrentPage, getIsFetching, getFollowingInProgress, getTotalUsersCount, getPageSize, getUsers
} from "../../Redux/users-selectors";

type UsersPropsType = {
    users: Array<userType>
    totalCount: number
    pageSize: 5
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    getUsersPage: (currentPage: number, pageSize: number) => void
    userFollow: (userId: number) => void
    userUnFollow: (userId: number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsersPage(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersPage(pageNumber, this.props.pageSize)
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

/*const mapStateToProps = (state: rootStateType) => {
    return {
        users: state.userPage.users,
        totalCount: state.userPage.totalCount,
        pageSize: state.userPage.pageSize,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress
    }
}*/

const mapStateToProps = (state: rootStateType) => {
    return {
        users: getUsers(state),
        totalCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {
    follow, unFollow, setFollowing, getUsersPage: requestUsers, userFollow, userUnFollow
    })
)(UsersContainer)

