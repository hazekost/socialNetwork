import s from "../Profile.module.css"

export const ProfileInfo = () => {
    return <div>
        <div className={s.banner}>
            <img src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"} />
        </div>
        <div className={s.userDescr}>
            <div className={s.ava}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/2/24/Missing_avatar.svg"} />
            </div>
            <div>
                <div>Name</div>
                <div>Birth</div>
                <div>City</div>
                <div>Educ</div>
            </div>
        </div>
    </div>
}