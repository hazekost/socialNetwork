import React from "react";
import {userType} from "../../Redux/usersReducer";
import s from "./Users.module.css"
import axios from "axios";
import userIcon from "../../assets/images/userIcon.png"

type UsersPropsType = {
    users: Array<userType>
    totalCount: number
    pageSize: 5
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<userType>, totalCount: number) => void
}

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items, response.data.totalCount)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount/this.props.pageSize)
        let pages = []
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => <span>{p }</span>)}
                </div>
                {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div className={s.image}>
                        <img src={u.photos.small !== null ? u.photos.small : userIcon}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => this.props.unFollow(u.id)}>UnFollow</button>
                            : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
                </div>)}
            </div>
        )
    }
}