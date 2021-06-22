import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"

type UserPropsType = {
    userID: number
    name: string
}

export const User: React.FC<UserPropsType> = (props) => {
    return <div className={s.user}>
        <NavLink to={`/dialogs/${props.userID}`} activeClassName={s.active}>{props.name}</NavLink>
    </div>
}