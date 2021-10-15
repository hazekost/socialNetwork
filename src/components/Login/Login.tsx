import { useFormik } from "formik";

const LoginForm = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: "",
            rememberMe: false,
        },
        onSubmit: values => {
            console.log(JSON.stringify(values));
        },
    });

    return <form onSubmit={formik.handleSubmit}>
        <div>
            <input id="email" name="email" type="email" placeholder="Email"
                onChange={formik.handleChange} value={formik.values.email} />
        </div>
        <div>
            <input id="password" name="password" type="password" placeholder="Password"
                onChange={formik.handleChange} value={formik.values.password} />
        </div>
        <div>
            <input id="rememberMe" name="rememberMe" type="checkbox"
                onChange={formik.handleChange} checked={formik.values.rememberMe} />
            Remember me
        </div>
        <div>
            <button type="submit" onClick={formik.submitForm}>Submit</button>
        </div>
    </form>
}

export const Login = () => {
    return <div>
        <h1>Login</h1>
        <LoginForm />
    </div>
}