import { NavLink } from "react-router-dom"
import s from "./Dialogs.module.css"

export function Dialogs() {
    return <div className={s.dialogs}>
        <div className={s.users}>
            <DialogItem id={1} name={"Dimysn"} />
            <DialogItem id={2} name={"Valera"} />
            <DialogItem id={3} name={"Vika"} />
            <DialogItem id={4} name={"Sveta"} />
        </div>
        <div className={s.messages}>
            <MessageItem message={"Hello"} />
            <MessageItem message={"How are u"} />
            <MessageItem message={"Yo"} />
        </div>
    </div>
}

type DialogItemPropsType = {
    id: number
    name: string
}

function DialogItem(props: DialogItemPropsType) {
    return <div>
        <NavLink to={`/messages/${props.id}`} className={`${s.user} ${s.active}`}>{props.name}</NavLink>
    </div>
}

type MessageItemPropsType = {
    message: string
}

function MessageItem(props: MessageItemPropsType) {
    return <div className={s.message}>{props.message}</div>
}