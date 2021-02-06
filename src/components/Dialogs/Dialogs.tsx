import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import { Redirect } from "react-router-dom";

type DialogsPropsType = {
    AddMessage: () => void
    ChangeMessageText: (value: string) => void
    state: {
        dialogs: Array<{ id: number, name: string }>
        messages: Array<{ id: number, message: string }>
        newMessageText: string
    }
    isAuth: boolean
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.ChangeMessageText(e.currentTarget.value)
    }
    const addMessage = () => {
        props.AddMessage()
    }

    if(!props.isAuth) return <Redirect to={"/login"}/>


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
                <div>
                    <textarea onChange={onChangeHandler} placeholder={"Enter message"}
                              value={props.state.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>
    )
}