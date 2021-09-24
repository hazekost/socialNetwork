import { DialogItem } from "./DialogItem/DialogItem"
import { MessageItem } from "./MessageItem/MessageItem"
import s from "./Dialogs.module.css"
import { MessagesPageType } from "../.."

type DialogsPropsType = {
    state: MessagesPageType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    return <div className={s.dialogs}>
        <div className={s.users}>
            {
                props.state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
            }
        </div>
        <div className={s.messages}>
            {
                props.state.messages.map(m => <MessageItem key={m.id} message={m.message} />)
            }
        </div>
    </div>
}