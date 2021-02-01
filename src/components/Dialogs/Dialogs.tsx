import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css"

type DialogPropsType = {
    id: number
    name: string
}

const Dialog: React.FC<DialogPropsType> = (props: DialogPropsType) => {
    return (
        <div>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

const Message: React.FC<MessagePropsType> = (props: MessagePropsType) => {
    return (
        <div>{props.message}</div>
    )
}

export const Dialogs = () => {

    let dialogData = [
        {id: 1, name: "Konstantin"},
        {id: 2, name: "Alex"},
        {id: 3, name: "John"},
        {id: 4, name: "Ler"}
    ]

    let messagesData = [
        {id: 1, message:"Hi"},
        {id: 2, message:"Yo"},
        {id: 3, message:"Sup"}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog id={dialogData[0].id} name={dialogData[0].name}/>
                <Dialog id={dialogData[1].id} name={dialogData[1].name}/>
                <Dialog id={dialogData[2].id} name={dialogData[2].name}/>
                <Dialog id={dialogData[3].id} name={dialogData[3].name}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    )
}