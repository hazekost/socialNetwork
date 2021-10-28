import s from "./ProfileInfo.module.css"
import avatar from "../../../assets/avatar.jpg"
import { UserProfileType, ValuesType } from "../../../api/api"
import { ProfileStatus } from "./ProfileStatus"
import { ChangeEvent, useState } from "react"
import { ProfileDataForm } from "./ProfileDataForm"

type ProfileInfoPropsType = {
    userProfile: UserProfileType
    userStatus: string
    isOwner: boolean
    savePhoto: (image: File) => void
    updateMyStatus: (status: string) => void
    saveProfile: (values: ValuesType) => void
}

export function ProfileInfo(props: ProfileInfoPropsType) {

    let { isOwner, savePhoto, updateMyStatus, userProfile, userStatus, saveProfile } = props

    let [editMode, setEditMode] = useState(false)

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length) {
            savePhoto(e.currentTarget.files[0])
        }
    }

    return <div className={s.description}>
        <img src={userProfile.photos.large ? userProfile.photos.large : avatar} alt="" />
        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        {editMode
            ? <ProfileDataForm userProfile={userProfile} setEditMode={setEditMode} saveProfile={saveProfile} />
            : <ProfileData isOwner={isOwner} userProfile={userProfile} setEditMode={setEditMode} />}
        <ProfileStatus status={userStatus} updateMyStatus={updateMyStatus} />
    </div>
}

type ProfileDataPropsType = {
    userProfile: UserProfileType
    isOwner: boolean
    setEditMode: (value: boolean) => void
}

const ProfileData: React.FC<ProfileDataPropsType> = (props) => {

    let { userProfile, setEditMode, isOwner } = props

    return <div>
        {isOwner && <div><button onClick={() => setEditMode(true)}>Edit</button></div>}
        <div>
            <b>Full name</b>: {userProfile.fullName}
        </div>
        <div>
            <b>Loking for a job</b>: {userProfile.lookingForAJob ? "Yes" : "No"}
        </div>
        {
            userProfile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {userProfile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me</b>: {userProfile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(userProfile.contacts).map(key => {
                //@ts-ignore
                return <Contact key={key} contactTitle={key} contactValue={userProfile.contacts[key]} />
            })}
        </div>
    </div>
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<ContactPropsType> = (props) => {

    let { contactTitle, contactValue } = props

    return <div className={s.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}