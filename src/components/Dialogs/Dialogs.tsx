import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DialogsPropsType = {
    messagesPage: {
        dialogs: Array<{ id: number, name: string }>,
        messages: Array<{ id: number, message: string }>
    }
}

export const Dialogs: React.FC<DialogsPropsType> = (props: DialogsPropsType) => {

    const NewMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        alert(NewMessageElement.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    props.messagesPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
                }
            </div>
            <div className={s.messages}>
                {
                    props.messagesPage.messages.map(m => <Message key={m.id} message={m.message}/>)
                }
                <div>
                    <textarea ref={NewMessageElement}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>

            </div>
        </div>
    )
}