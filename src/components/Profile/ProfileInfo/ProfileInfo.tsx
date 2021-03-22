import React, {ChangeEvent} from "react";
import s from "./ProfileInfo.module.css"
import {userProfileType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import noImage from "../../../assets/images/noImage.png"
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: userProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            props.savePhoto(e.currentTarget.files[0])
        }
    }

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.description}>
                <img src={props.profile?.photos.large || noImage}/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div>Name: {props.profile?.fullName}</div>
                <div>About Me: {props.profile?.aboutMe}</div>
            </div>
        </div>
    )
}