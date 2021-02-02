import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    profilePage: {
        posts: Array<{ id: number, message: string, likeCount: number }>
        newPostText: string
    }
    addPost: () => void
    changePostText: (value: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props: ProfilePropsType) => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts profilePage={props.profilePage} addPost={props.addPost} changePostText={props.changePostText}/>
    </div>
}