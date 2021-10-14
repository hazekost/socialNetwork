import React from "react"
import { Users } from "./Users"
import { connect } from "react-redux"
import { StateType } from "../../redux/redux-store"
import { changeUsersPageTC, getUsersTC, setFollowTC, setUnFollowTC, UsersStateType } from "../../redux/users-reducer"
import { Preloader } from "../common/Preloader"

type UsersPropsType = {
    state: UsersStateType
    getUsersTC: (pageSize: number, currentPage: number) => void
    changeUsersPageTC: (pageSize: number, page: number) => void
    setFollowTC: (id: number) => void
    setUnFollowTC: (id: number) => void
}

export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        let { pageSize, currentPage } = this.props.state
        this.props.getUsersTC(pageSize, currentPage)
    }
    onPageChanged = (page: number) => {
        let { pageSize } = this.props.state
        this.props.changeUsersPageTC(pageSize, page)
    }
    follow = (id: number) => {
        this.props.setFollowTC(id)
    }
    unFollow = (id: number) => {
        this.props.setUnFollowTC(id)
    }

    render() {
        let { currentPage, items, pageSize, totalCount, isFetching, followingInProgress } = this.props.state
        return <>
            {isFetching ? <Preloader />
                : <Users currentPage={currentPage} items={items} pageSize={pageSize} totalCount={totalCount}
                    followingInProgress={followingInProgress} onPageChanged={this.onPageChanged}
                    follow={this.follow} unFollow={this.unFollow} />}
        </>
    }
}

const mapStateToProps = (state: StateType) => ({
    state: state.usersPage
})

export default connect(mapStateToProps, { getUsersTC, changeUsersPageTC, setFollowTC, setUnFollowTC })(UsersContainer)