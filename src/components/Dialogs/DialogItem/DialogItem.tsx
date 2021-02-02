import React from "react";
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";

type DialogPropsType = {
    id: number
    name: string
}
export const DialogItem: React.FC<DialogPropsType> = (props: DialogPropsType) => {
    return (
        <div>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}