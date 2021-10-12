import s from "./Users.module.css"
import avatar from "../../assets/avatar.jpg"
import { NavLink } from "react-router-dom"
import { ItemType } from "../../api/api"

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

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pagesArray = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i)
    }

    return <div>
        <div>
            {pagesArray.map((p, i) => {
                return <span key={i}
                    onClick={() => props.onPageChanged(p)}
                    className={props.currentPage === p ? s.selectedPage : ""}>{p} </span>
            })}
        </div>
        {props.items.map(u => {

            const follow = () => props.follow(u.id)
            const unFollow = () => props.unFollow(u.id)

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
                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={unFollow}>UnFollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={follow}>Follow</button>}
                </div>
            </div>
        })}
    </div>
}