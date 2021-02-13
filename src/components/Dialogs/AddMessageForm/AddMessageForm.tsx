import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";

export type formDataType = {
    newMessageBody: string
}

const maxLength100 = maxLengthCreator(100)

const AddMessageForm: React.FC<InjectedFormProps<formDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength100]} name={"newMessageBody"} placeholder={"Enter message"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm<formDataType>({form: "dialogAddMessageForm"})(AddMessageForm)
