import React from "react";
import s from "./ProfileInfo.module.css"
import {userProfileType} from "../../../Redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import noImage from "../../../assets/images/noImage.png"

type ProfileInfoPropsType = {
    profile: userProfileType | null
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    return (
        <div>
            <div className={s.image}>
                <img
                    src={"https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png"}/>
            </div>
            {!props.profile && <Preloader/>}
            <div className={s.description}>
                <img src={props.profile?.photos.small === null ? noImage : props.profile?.photos.small}/>
                <div>{props.profile?.fullName}</div>
                <div>{props.profile?.aboutMe}</div>
            </div>
        </div>
    )
}