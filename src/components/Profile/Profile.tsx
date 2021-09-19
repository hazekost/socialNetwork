import { MyPost } from "./MyPost/MyPost"
import s from "./Profile.module.css"

export function Profile() {
    return <div className={s.profile}>
        <div className={s.wall}>
            <img src="https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg" />
        </div>
        <div className={s.description}>
            <img src="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-15.jpg" />
            ava + descr
        </div>
        <MyPost />
    </div>
}