import s from "./Profile.module.css"
import { MyPosts } from "./MyPosts/MyPosts"

export const Profile = () => {
    return <div>
        <div className={s.banner}>
            <img src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"} />
        </div>
        <div className={s.userDescr}>
            <div className={s.ava}>
                <img src={"http://cdn.onlinewebfonts.com/svg/img_173956.png"} />
            </div>
            <div>
                <div>Name</div>
                <div>Birth</div>
                <div>City</div>
                <div>Educ</div>
            </div>
        </div>
        <MyPosts />
    </div>
}