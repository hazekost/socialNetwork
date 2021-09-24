import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

type DialogItemPropsType = {
    id: number
    name: string
}

export function DialogItem(props: DialogItemPropsType) {
    return <div>
        <NavLink to={`/messages/${props.id}`} className={s.user} activeClassName={s.active}>{props.name}</NavLink>
    </div>;
}
