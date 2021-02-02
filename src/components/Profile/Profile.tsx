import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type AddPostActionType = {
    type: "ADD-POST"
}
type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
type ChangePostTextActionType = {
    type: "CHANGE-POST-TEXT"
    value: string
}
type ChangeMessageTextActionType = {
    type: "CHANGE-MESSAGE-TEXT"
    value: string
}
type ActionType = AddPostActionType|AddMessageActionType|ChangePostTextActionType|ChangeMessageTextActionType
type ProfilePropsType = {
    profilePage: {
        posts: Array<{ id: number, message: string, likeCount: number }>
        newPostText: string
    }
    dispatch: (action: ActionType) => void
}

export const Profile: React.FC<ProfilePropsType> = (props: ProfilePropsType) => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/>
    </div>
}