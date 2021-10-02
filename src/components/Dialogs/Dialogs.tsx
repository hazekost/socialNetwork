import { DialogItem } from "./DialogItem/DialogItem"
import { MessageItem } from "./MessageItem/MessageItem"
import s from "./Dialogs.module.css"
import { ChangeEvent } from "react"
import { addMessageAC, MessagesPageType, onMessageChangeAC } from "../../Redux/dialogsReducer"
import { ActionType } from "../../Redux/profileReducer"

type DialogsPropsType = {
    state: MessagesPageType
    dispatch: (action: ActionType) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const addMessage = () => {
        props.dispatch(addMessageAC())
    }
    const onDialogChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(onMessageChangeAC(e.currentTarget.value))
    }

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
            <div>
                <textarea onChange={onDialogChange} value={props.state.newMessageText} />
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    </div>
}