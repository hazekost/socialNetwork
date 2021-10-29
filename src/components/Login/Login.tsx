import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { login } from "../../redux/auth-reducer";
import { AppRootStateType } from "../../redux/redux-store";
import s from "./Login.module.css"

function validateEmail(value: string) {
    let error;
    if (!value) {
        error = 'Email required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}
function validatePassword(value: string) {
    let error;
    if (!value) {
        error = 'Password required';
    } else if (value.length < 6) {
        error = 'Short password';
    }
    return error;
}

type LoginFormPropsType = {
    captcha: string | null
    login: (email: string, password: string, rememberMe: boolean, captcha?: string) => void
}

const LoginForm: React.FC<LoginFormPropsType> = (props) => {
    return <Formik
        initialValues={{
            email: "",
            password: "",
            rememberMe: false,
            captcha: ""
        }}
        onSubmit={(values, actions) => {
            props.login(values.email, values.password, values.rememberMe, values.captcha)
            actions.setSubmitting(false);
            return;
        }}>
        {formik => (
            <Form onSubmit={formik.handleSubmit}>
                <div>
                    <Field id="email" name="email" type="email" placeholder="Email"
                        validate={validateEmail} onChange={formik.handleChange} value={formik.values.email} />
                    <ErrorMessage name="email" render={(em) => <span className={s.errorMessage} > {em}</span>} />
                </div>
                <div>
                    <Field id="password" name="password" type="password" autoComplete="on"
                        placeholder="Password" validate={validatePassword} onChange={formik.handleChange} value={formik.values.password} />
                    <ErrorMessage name="password" render={(em) => <span className={s.errorMessage}> {em}</span>} />
                </div>
                <div>
                    <Field id="rememberMe" name="rememberMe" type="checkbox"
                        onChange={formik.handleChange} checked={formik.values.rememberMe} />
                    Remember me
                </div>
                {props.captcha && <img src={props.captcha} alt="" />}
                {props.captcha && <div>
                    <Field id="captcha" name="captcha" placeholder="Captcha" onChange={formik.handleChange} value={formik.values.captcha} />
                </div>}
                <div>
                    <button type="submit" disabled={false} >Submit</button>
                </div>
            </Form>
        )}
    </Formik>
}

type LoginPropsType = {
    isAuth: boolean
    captchaUrl: string | null
    login: (email: string, password: string, rememberMe: boolean, captcha?: string) => void
}

const Login: React.FC<LoginPropsType> = (props) => {

    const login = (email: string, password: string, rememberMe: boolean, captcha?: string) => {
        props.login(email, password, rememberMe, captcha)
    }

    if (props.isAuth) return <Redirect to={"/profile"} />

    return <div>
        <h1>Login</h1>
        <LoginForm login={login} captcha={props.captchaUrl} />
    </div>
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login)