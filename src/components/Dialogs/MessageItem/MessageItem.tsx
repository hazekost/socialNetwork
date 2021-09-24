import s from "./MessageItem.module.css";

type MessageItemPropsType = {
    message: string
}

export function MessageItem(props: MessageItemPropsType) {
    return <div className={s.message}>{props.message}</div>;
}
