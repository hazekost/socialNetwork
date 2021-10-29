import { NavLink } from "react-router-dom"
import s from "./NavBar.module.css"

export const NavBar = () => {
    return <nav className={s.nav}>
        <div className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
        <div className={s.item}><NavLink to="/messages" activeClassName={s.active}>Messages</NavLink></div>
        <div className={s.item}><NavLink to="/users" activeClassName={s.active}>Users</NavLink></div>
    </nav>
}