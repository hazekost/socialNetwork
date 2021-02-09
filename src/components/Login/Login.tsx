import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form"
import {getAuthLogin} from "../../Redux/authReducer";
import {connect} from "react-redux";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>LogIn</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm<FormDataType>({form: "Login"})(LoginForm)

type PropsType = {
    getAuthLogin: (a: string, b: string, c: boolean) => void
}

export const Login: React.FC<PropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        let {email, password, rememberMe} = formData
        console.log(formData)
        props.getAuthLogin(email, password, rememberMe)
    }
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = () => {
    return {}
}


export default connect(mapStateToProps, {getAuthLogin})(Login)