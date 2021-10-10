import s from "./Users.module.css"
import avatar from "../../assets/avatar.jpg"
import { ItemType } from "../../Redux/users-reducer"
import { NavLink } from "react-router-dom"

type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    items: Array<ItemType>
    onPageChanged: (page: number) => void
    toggleFollow: (id: number, followed: boolean) => void
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

            const toggleFollow = () => {
                props.toggleFollow(u.id, !u.followed)
            }

            return <div key={u.id}>
                <span>
                    <NavLink to={`profile/${u.id}`}><img className={s.userAva} alt=""
                        src={u.photos.large ? u.photos.large : avatar} /></NavLink>
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