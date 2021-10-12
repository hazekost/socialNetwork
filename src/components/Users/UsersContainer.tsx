import React from "react"
import { Users } from "./Users"
import { connect } from "react-redux"
import { StateType } from "../../redux/redux-store"
import { follow, setCurrentPage, setUsers, toggleFetch, toggleFollowing, unFollow, UsersStateType } from "../../redux/users-reducer"
import { Preloader } from "../common/Preloader"
import { GetUsersType, socialAPI } from "../../api/api"

type UsersPropsType = {
    state: UsersStateType
    setUsers: (data: GetUsersType) => void
    setCurrentPage: (page: number) => void
    toggleFetch: (fetch: boolean) => void
    follow: (id: number) => void
    unFollow: (id: number) => void
    toggleFollowing: (id: number, isFetching: boolean) => void
}



export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        let { pageSize, currentPage } = this.props.state
        this.props.toggleFetch(true)
        socialAPI.getUsers(pageSize, currentPage).then((resp) => {
            this.props.setUsers(resp.data)
            this.props.toggleFetch(false)
        })
    }

    follow = (id: number) => {
        this.props.toggleFollowing(id, true)
        socialAPI.follow(id).then((res) => {
            if (res.data.resultCode === 0) {
                this.props.follow(id)
            }
            this.props.toggleFollowing(id, false)
        })
    }

    unFollow = (id: number) => {
        this.props.toggleFollowing(id, true)
        socialAPI.unFollow(id).then((res) => {
            if (res.data.resultCode === 0) {
                this.props.unFollow(id)
            }
            this.props.toggleFollowing(id, false)
        })
    }

    onPageChanged = (page: number) => {
        let { pageSize } = this.props.state
        this.props.toggleFetch(true)
        this.props.setCurrentPage(page)
        socialAPI.getUsers(pageSize, page).then((resp) => {
            this.props.setUsers(resp.data)
            this.props.toggleFetch(false)
        })
    }

    render() {
        let { currentPage, items, pageSize, totalCount, isFetching, followingInProgress } = this.props.state
        return <>
            {isFetching ? <Preloader />
                : <Users currentPage={currentPage} items={items} pageSize={pageSize} totalCount={totalCount}
                    followingInProgress={followingInProgress} onPageChanged={this.onPageChanged} follow={this.follow} unFollow={this.unFollow} />}
        </>
    }
}

const mapStateToProps = (state: StateType) => ({
    state: state.usersPage
})

export default connect(mapStateToProps, { setUsers, setCurrentPage, toggleFetch, follow, unFollow, toggleFollowing })(UsersContainer)