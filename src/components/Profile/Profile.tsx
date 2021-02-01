import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return <div className={s.content}>
        <img src={"https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png"}/>
        <div>ava + descr</div>
        <MyPosts/>
    </div>
}