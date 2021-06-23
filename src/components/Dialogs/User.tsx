import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"

type UserPropsType = {
    id: number
    name: string
}

export const User: React.FC<UserPropsType> = (props) => {
    return <div className={s.user}>
        <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
    </div>
}