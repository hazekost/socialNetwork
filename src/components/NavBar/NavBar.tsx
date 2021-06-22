import { NavLink } from "react-router-dom"
import s from "./NavBar.module.css"

export const NavBar = () => {
    return <aside className={s.aside}>
        <div className={s.item}>
            <NavLink to={"/profile"} activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={"/dialogs"} activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={"/news"} activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={"/music"} activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={"/settings"} activeClassName={s.active}>Settings</NavLink>
        </div>
    </aside>
}