import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {userProfileType} from "../../Redux/profileReducer";

type ProfilePropsType = {
    profile: userProfileType|null
    status: string
    updateStatus: (status: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>;
}