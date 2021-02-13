import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} validate={[required]} name={"email"} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} validate={[required]} name={"password"} component={Input}/>
            </div>
            <div>
                <Field component={Input} validate={[required]} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>LogIn</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm<FormDataType>({form: "Login"})(LoginForm)

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}
