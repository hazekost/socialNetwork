import { NavLink } from "react-router-dom"
import s from "./Header.module.css"

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
}

export function Header(props: HeaderPropsType) {
    return <header className={s.header}>
        <img src="https://coollogo.net/wp-content/uploads/2021/03/React-logo.svg" alt="" />
        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>
}