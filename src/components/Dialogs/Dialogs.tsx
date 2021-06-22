import s from "./Dialogs.module.css"

export const Dialogs = () => {
    return <div className={s.dialogs}>
        <div className={s.users}>
            <div className={`${s.user} ${s.active}`}>Dimych</div>
            <div className={s.user}>Andrew</div>
            <div className={s.user}>Victor</div>
            <div className={s.user}>Sasha</div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Hello</div>
            <div className={s.message}>HI</div>
            <div className={s.message}>Don't ignore me</div>
            <div className={s.message}>Heey</div>
        </div>
    </div>
}