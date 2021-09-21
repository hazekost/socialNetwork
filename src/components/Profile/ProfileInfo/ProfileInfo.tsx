import s from "./ProfileInfo.module.css"

export function ProfileInfo() {
    return <div>
        <div className={s.wall}>
            <img src="https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg" alt="" />
        </div>
        <div className={s.description}>
            <img src="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-15.jpg" alt="" />
            ava + descr
        </div>
    </div>
}