import {connect} from "react-redux";
import {rootStateType} from "../../Redux/reduxStore";
import {
    follow,
    setCurrentPage,
    setFetching, setFollowing,
    setUsers,
    setUsersCount,
    unFollow,
    userType
} from "../../Redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {networkAPI} from "../../api/api";

type UsersPropsType = {
    users: Array<userType>
    totalCount: number
    pageSize: 5
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setUsersCount: (usersCount: number) => void
    setFetching: (isFetching: boolean) => void
    setFollowing: (userId: number, isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.setFetching(true)
        networkAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.setFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setFetching(true)
        networkAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.setFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                setFollowing={this.props.setFollowing}
                totalCount={this.props.totalCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                onPageChanged={this.onPageChanged}
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

export default connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setUsersCount, setFetching, setFollowing
})(UsersContainer)


// const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
//     return {
//         follow: (userID: number) => {
//             dispatch(followAC(userID))
//         },
//         unFollow: (userID: number) => {
//             dispatch(unFollowAC(userID))
//         },
//         setUsers: (users: Array<userType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setUsersCount: (usersCount: number) => {
//             dispatch(setUsersCountAC(usersCount))
//         },
//         setFetching: (isFetching: boolean) => {
//             dispatch(setFetchingAC(isFetching))
//         }
//     }
// }

