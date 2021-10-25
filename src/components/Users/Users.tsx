import s from "./Users.module.css"
import avatar from "../../assets/avatar.jpg"
import { NavLink } from "react-router-dom"
import { ItemType } from "../../api/api"
import { Paginator } from "./Paginator"

type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    items: Array<ItemType>
    followingInProgress: Array<number>
    onPageChanged: (page: number) => void
    follow: (id: number) => void
    unFollow: (id: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {

    let { totalCount, pageSize, currentPage, items, followingInProgress, onPageChanged, follow, unFollow } = props

    return <div>
        <Paginator currentPage={currentPage} pageSize={pageSize} totalCount={totalCount} onPageChanged={onPageChanged} />
        {items.map(u => {

            const followHandler = () => follow(u.id)
            const unFollowHandler = () => unFollow(u.id)

            return <div key={u.id}>
                <span>
                    <NavLink to={`profile/${u.id}`}>
                        <img className={s.userAva} alt="" src={u.photos.large ? u.photos.large : avatar} />
                    </NavLink>
                </span>
                <span>
                    {u.name}
                </span>
                <div>
                    {u.followed ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={unFollowHandler}>UnFollow</button>
                        : <button disabled={followingInProgress.some(id => id === u.id)} onClick={followHandler}>Follow</button>}
                </div>
            </div>
        })}
    </div>
}