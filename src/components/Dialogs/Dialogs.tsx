import s from "./Dialogs.module.css"
import { Message } from "./Message"
import { User } from "./User"

export const Dialogs = () => {

    let usersData = [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Sveta" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Victor" },
        { id: 5, name: "Igon" },
        { id: 6, name: "Jason" },
        { id: 7, name: "Violet" }
    ]

    let messagesData = [
        { id: 1, message: "Hello" },
        { id: 2, message: "HI" },
        { id: 3, message: "Don't ignore me" },
        { id: 4, message: "Heey" }
    ]

    return <div className={s.dialogs}>
        <div className={s.users}>
            {usersData.map(u => <User key={u.id} id={u.id} name={u.name} />)}
        </div>
        <div className={s.messages}>
            {messagesData.map(m => <Message key={m.id} message={m.message} />)}
        </div>
    </div>
}