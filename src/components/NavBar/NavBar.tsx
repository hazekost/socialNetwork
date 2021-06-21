import s from "./NavBar.module.css"

export const NavBar = () => {
    return <aside className={s.aside}>
        <div className={`${s.item} ${s.active}`}>
            <a>Profile</a>
        </div>
        <div className={`${s.item}`}>
            <a>Messages</a>
        </div>
        <div className={`${s.item}`}>
            <a>Users</a>
        </div>
        <div className={`${s.item}`}>
            <a>Music</a>
        </div>
    </aside>
}