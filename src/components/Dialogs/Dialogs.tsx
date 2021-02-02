import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type AddPostActionType = {
    type: "ADD-POST"
}
type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
type ChangePostTextActionType = {
    type: "CHANGE-POST-TEXT"
    value: string
}
type ChangeMessageTextActionType = {
    type: "CHANGE-MESSAGE-TEXT"
    value: string
}
type ActionType = AddPostActionType|AddMessageActionType|ChangePostTextActionType|ChangeMessageTextActionType
type DialogsPropsType = {
    messagesPage: {
        dialogs: Array<{ id: number, name: string }>,
        messages: Array<{ id: number, message: string }>,
        newMessageText: string
    }
    dispatch: (action: ActionType) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props: DialogsPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "CHANGE-MESSAGE-TEXT", value:e.currentTarget.value})
    }
    const addMessage = () => {
        props.dispatch({type: "ADD-MESSAGE"})
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
                    <textarea onChange={onChangeHandler} value={props.messagesPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>

            </div>
        </div>
    )
}