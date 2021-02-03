import {connect} from "react-redux";
import {rootStateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";
import {ActionType} from "../../Redux/profileReducer";
import {followAC, setUsersAC, unFollowAC, userType} from "../../Redux/usersReducer";
import {Users} from "./Users";

const mapStateToProps = (state: rootStateType) => {
    return {
        users: state.userPage.users,
        totalCount: state.userPage.totalCount,
        pageSize: state.userPage.pageSize
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: Array<userType>, totalCount: number) => {
            dispatch(setUsersAC(users, totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)