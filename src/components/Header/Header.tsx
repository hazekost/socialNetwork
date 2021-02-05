import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css"
import {initialStateType} from "../../Redux/authReducer";
import {Preloader} from "../common/Preloader/Preloader";

type HeaderPropsType = {
    state: initialStateType
}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return <header className={s.header}>
        <img src={"https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"}/>
        <div className={s.loginBlock}>
            {props.state.isFetching
                ? <Preloader/>
                : <div>{props.state.isAuth ? <h3>{props.state.login}</h3> : <NavLink to={"/login"}>Login</NavLink>}</div>}
        </div>
    </header>
}