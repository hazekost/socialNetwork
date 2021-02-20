import React from "react";
import s from "./ProfileInfo.module.css"
import {userProfileType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import noImage from "../../../assets/images/noImage.png"
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: userProfileType|null
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    return (
        <div>
            {/*<div className={s.image}>
                <img
                    src={"https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png"}/>
            </div>*/}
            {!props.profile && <Preloader/>}
            <div className={s.description}>
                <img src={props.profile?.photos.large === null ? noImage : props.profile?.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>Name: {props.profile?.fullName}</div>
                <div>About Me: {props.profile?.aboutMe}</div>
            </div>
        </div>
    )
}