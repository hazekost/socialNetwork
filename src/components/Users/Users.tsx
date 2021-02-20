import s from "./Users.module.css";
import userIcon from "../../assets/images/userIcon.png";
import React from "react";
import {userType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalCount: number
    pageSize: 5
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: Array<userType>
    userUnFollow: (userId: number) => void
    userFollow: (userId: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <div className={s.image}>
                    <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small !== null ? u.photos.small : userIcon}/>
                    </NavLink>
                </div>
                <div>
                    {
                        u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.userUnFollow(u.id)
                            }}>UnFollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.userFollow(u.id)
                            }}>Follow</button>
                    }
                </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </div>)}
            <div>
                {
                    pages.map(p =>
                        <span onClick={() => {
                            props.onPageChanged(p)
                        }}
                              className={props.currentPage === p ? s.selectedPage : ""}>{p} </span>)
                }
            </div>
        </div>
    )
}