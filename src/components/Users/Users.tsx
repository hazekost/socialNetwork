import s from "./Users.module.css";
import userIcon from "../../assets/images/userIcon.png";
import React from "react";
import {userType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../common/Paginator/Paginator";

type UsersPropsType = {
    totalCount: number
    pageSize: number
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: Array<userType>
    userUnFollow: (userId: number) => void
    userFollow: (userId: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {

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
            <Paginator totalCount={props.totalCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
        </div>
    )
}