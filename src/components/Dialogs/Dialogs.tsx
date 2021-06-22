import s from "./Dialogs.module.css"
import { Message } from "./Message"
import { User } from "./User"

export const Dialogs = () => {
    return <div className={s.dialogs}>
        <div className={s.users}>
            <User userID={1} name={"Dimych"} />
            <User userID={2} name={"Sveta"} />
            <User userID={3} name={"Sasha"} />
            <User userID={4} name={"Victor"} />
        </div>
        <div className={s.messages}>
            <Message message={"Hello"} />
            <Message message={"HI"} />
            <Message message={"Don't ignore me"} />
            <Message message={"Heey"} />
        </div>
    </div>
}