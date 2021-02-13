import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {AddMessageFormRedux, formDataType} from "./AddMessageForm/AddMessageForm";

type DialogsPropsType = {
    AddMessage: (value: string) => void
    state: {
        dialogs: Array<{ id: number, name: string }>
        messages: Array<{ id: number, message: string }>
        newMessageText: string
    }
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const addMessage = (values: formDataType) => {
        props.AddMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    props.state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
                }
            </div>
            <div className={s.messages}>
                {
                    props.state.messages.map(m => <Message key={m.id} message={m.message}/>)
                }
                <AddMessageFormRedux onSubmit={addMessage}/>
            </div>
        </div>
    )
}