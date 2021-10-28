import { useFormik } from "formik"
import { UserProfileType, ValuesType } from "../../../api/api"

type ProfileDataFormPropsType = {
    userProfile: UserProfileType
    setEditMode: (value: boolean) => void
    saveProfile: (values: ValuesType) => void
}

export const ProfileDataForm: React.FC<ProfileDataFormPropsType> = (props) => {

    let { setEditMode, userProfile, saveProfile } = props

    const formik = useFormik({
        initialValues: {
            fullName: userProfile.fullName,
            aboutMe: userProfile.aboutMe,
            lookingForAJob: userProfile.lookingForAJob,
            lookingForAJobDescription: userProfile.lookingForAJobDescription,
            facebook: userProfile.contacts.facebook,
            website: userProfile.contacts.website,
            vk: userProfile.contacts.vk,
            twitter: userProfile.contacts.twitter,
            instagram: userProfile.contacts.instagram,
            youtube: userProfile.contacts.youtube,
            github: userProfile.contacts.github,
            mainLink: userProfile.contacts.mainLink,
        },
        onSubmit: (values) => {
            let { facebook, website, vk, twitter, instagram, youtube, github,
                mainLink, aboutMe, fullName, lookingForAJob, lookingForAJobDescription } = values
            let profile = {
                fullName,
                aboutMe,
                lookingForAJob,
                lookingForAJobDescription,
                contacts: { facebook, website, vk, twitter, instagram, youtube, github, mainLink }
            }
            saveProfile(profile)
            setEditMode(false)
        }
    })

    return <form onSubmit={formik.submitForm}>
        <div>
            <button>Save</button>
        </div>
        <div>
            <b>Full name</b>: <input {...formik.getFieldProps("fullName")} />
        </div>
        <div>
            <b>Loking for a job</b>: <input type="checkbox" checked={formik.values.lookingForAJob} {...formik.getFieldProps("lookingForAJob")} />
        </div>
        <div>
            <b>My professional skills</b>: <textarea {...formik.getFieldProps("lookingForAJobDescription")} />
        </div>
        <div>
            <b>About Me</b>: <textarea {...formik.getFieldProps("aboutMe")} />
        </div>
        <div>
            <b>Contacts</b>: <div>
                <div>
                    <b>facebook</b>: <input {...formik.getFieldProps("facebook")} />
                </div>
                <div>
                    <b>website</b>: <input {...formik.getFieldProps("website")} />
                </div>
                <div>
                    <b>vk</b>: <input {...formik.getFieldProps("vk")} />
                </div>
                <div>
                    <b>twitter</b>: <input {...formik.getFieldProps("twitter")} />
                </div>
                <div>
                    <b>instagram</b>: <input {...formik.getFieldProps("instagram")} />
                </div>
                <div>
                    <b>youtube</b>: <input {...formik.getFieldProps("youtube")} />
                </div>
                <div>
                    <b>github</b>: <input {...formik.getFieldProps("github")} />
                </div>
                <div>
                    <b>mainLink</b>: <input {...formik.getFieldProps("mainLink")} />
                </div>
            </div>
        </div>
    </form>
}