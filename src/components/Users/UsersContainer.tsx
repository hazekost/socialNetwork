import { connect } from "react-redux"
import { DispatchType, StateType } from "../../Redux/redux-store"
import { followUnfollowAC, ItemType, setUsersAC } from "../../Redux/usersReducer"

type UsersPropsType = {
    state: Array<ItemType>
    toggleFollow: (id: number, follow: boolean) => void
    setUsers: (items: Array<ItemType>) => void
}

const Users: React.FC<UsersPropsType> = (props) => {
    return <div>
        {props.state.map(u => {

            const toggleFollow = () => {
                props.toggleFollow(u.id, !u.followed)
            }

            return <div key={u.id}>
                <span>
                    <img style={{ width: "50px" }} src="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-15.jpg" alt="" />
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

const mapStateToProps = (state: StateType) => ({
    state: state.usersPage.items
})
const mapDispatchToProps = (dispatch: DispatchType) => ({
    toggleFollow: (id: number, followed: boolean) => dispatch(followUnfollowAC(id, followed)),
    setUsers: (items: Array<ItemType>) => dispatch(setUsersAC(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)