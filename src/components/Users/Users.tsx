import s from "./Users.module.css";
import userIcon from "../../assets/images/userIcon.png";
import React from "react";
import {userType} from "../../Redux/usersReducer";
import { NavLink } from "react-router-dom";

type UsersPropsType = {
    totalCount: number
    pageSize: 5
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: Array<userType>
    follow: (userID: number) => void
    unFollow: (userID: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => <span onClick={() => {
                        props.onPageChanged(p)
                    }}
                                         className={props.currentPage === p ? s.selectedPage : ""}>{p}</span>)
                }
            </div>
            {props.users.map(u => <div key={u.id}>
                <div className={s.image}>
                    <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small !== null ? u.photos.small : userIcon}/>
                    </NavLink>
                </div>
                <div>
                    {
                        u.followed
                            ? <button onClick={() => props.unFollow(u.id)}>UnFollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>
                    }
                </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </div>)}
        </div>
    )
}