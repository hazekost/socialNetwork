import React from "react"
import axios from "axios"
import { Users } from "./Users"
import { connect } from "react-redux"
import { StateType } from "../../Redux/redux-store"
import { followUnfollow, GetType, setCurrentPage, setUsers, toggleFetch, UsersStateType } from "../../Redux/users-reducer"
import { Preloader } from "../common/Preloader"

type UsersPropsType = {
    state: UsersStateType
    followUnfollow: (id: number, follow: boolean) => void
    setUsers: (data: GetType) => void
    setCurrentPage: (page: number) => void
    toggleFetch: (fetch: boolean) => void
}

export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleFetch(true)
        axios.get<GetType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.pageSize}&page=${this.props.state.currentPage}`)
            .then((resp) => {
                this.props.setUsers(resp.data)
                this.props.toggleFetch(false)
            })
    }

    onPageChanged = (page: number) => {
        this.props.toggleFetch(true)
        this.props.setCurrentPage(page)
        axios.get<GetType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.pageSize}&page=${page}`)
            .then((resp) => {
                this.props.setUsers(resp.data)
                this.props.toggleFetch(false)
            })
    }

    render() {
        let { currentPage, items, pageSize, totalCount, isFetching } = this.props.state

        return <>
            {isFetching ? <Preloader />
                : <Users currentPage={currentPage} items={items} pageSize={pageSize}
                    totalCount={totalCount} onPageChanged={this.onPageChanged} toggleFollow={this.props.followUnfollow} />}
        </>
    }
}

const mapStateToProps = (state: StateType) => ({
    state: state.usersPage
})
// const mapDispatchToProps = (dispatch: DispatchType) => ({
//     toggleFollow: (id: number, followed: boolean) => dispatch(followUnfollowAC(id, followed)),
//     setUsers: (data: GetType) => dispatch(setUsersAC(data)),
//     setPage: (page: number) => dispatch(setCurrentPageAC(page)),
//     toggleFetch: (fetch: boolean) => dispatch(toggleFetchAC(fetch)),
// })

export default connect(mapStateToProps, { followUnfollow, setUsers, setCurrentPage, toggleFetch })(UsersContainer)