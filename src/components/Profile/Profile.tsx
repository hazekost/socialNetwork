import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {userProfileType} from "../../Redux/profile-reducer";

type ProfilePropsType = {
    profile: userProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div>
        <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
                     savePhoto={props.savePhoto} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>;
}