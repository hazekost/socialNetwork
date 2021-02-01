import React from "react";
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.image}>
                <img
                    src={"https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png"}/>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    )
}