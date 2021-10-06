import axios from "axios"
import { connect } from "react-redux"
import { DispatchType, StateType } from "../../Redux/redux-store"
import { followUnfollowAC, InitialStateType, ItemType, setUsersAC } from "../../Redux/usersReducer"
import avatar from "../../assets/avatar.jpg"
import React from "react"

type UsersPropsType = {
    state: Array<ItemType>
    toggleFollow: (id: number, follow: boolean) => void
    setUsers: (items: Array<ItemType>) => void
}

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get<InitialStateType>("https://social-network.samuraijs.com/api/1.0/users").then((resp) => {
            this.props.setUsers(resp.data.items)
        })
    }

    render() {
        return <div>
            {this.props.state.map(u => {

                const toggleFollow = () => {
                    this.props.toggleFollow(u.id, !u.followed)
                }

                return <div key={u.id}>
                    <span>
                        <img style={{ width: "50px" }}
                            src={u.photos.small ? u.photos.small : avatar}
                            alt="" />
                    </span>
                    <span>
                        {u.name}
                    </span>
                    <div>
                        <button onClick={toggleFollow}>{u.followed ? "UnFollow" : "Folow"}</button>
                    </div>
                </div>
            })}
        </div>
    }
}

const mapStateToProps = (state: StateType) => ({
    state: state.usersPage.items
})
const mapDispatchToProps = (dispatch: DispatchType) => ({
    toggleFollow: (id: number, followed: boolean) => dispatch(followUnfollowAC(id, followed)),
    setUsers: (items: Array<ItemType>) => dispatch(setUsersAC(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)