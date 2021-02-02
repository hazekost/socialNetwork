import React from "react";

type MessagePropsType = {
    message: string
}
export const Message: React.FC<MessagePropsType> = (props: MessagePropsType) => {
    return (
        <div>{props.message}</div>
    )
}