import { DialogItem } from "./DialogItem/DialogItem"
import { MessageItem } from "./MessageItem/MessageItem"
import s from "./Dialogs.module.css"
import { MessagesPageType } from "../../redux/dialogs-reducer"
import { AddItemForm } from "../common/AddItemForm"

type DialogsPropsType = {
    state: MessagesPageType
    addMessage: (message: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const { addMessage, state } = props

    return <div className={s.dialogs}>
        <div className={s.users}>
            {
                state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
            }
        </div>
        <div className={s.messages}>
            {
                state.messages.map(m => <MessageItem key={m.id} message={m.message} />)
            }
            <AddItemForm addItem={addMessage} buttonName={"Add message"} />
        </div>
    </div>
}