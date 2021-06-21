import s from "../../MainContent.module.css"

export const Post = () => {
    return <div className={s.post}>
        <img src={"http://cdn.onlinewebfonts.com/svg/img_173956.png"} />
        post1
        <div>
            <button>Like</button>
        </div>
    </div>
}