import { MessagesPageType } from "../../state/state"
import s from "./Dialogs.module.css"
import { Message } from "./Message/Message"
import { User } from "./User/User"

type DialogsPropsType = {
    state: MessagesPageType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    return <div className={s.dialogs}>
        <div className={s.users}>
            {props.state.users.map(u => <User key={u.id} id={u.id} name={u.name} />)}
        </div>
        <div className={s.messages}>
            {props.state.messages.map(m => <Message key={m.id} message={m.message} />)}
        </div>
    </div>
}