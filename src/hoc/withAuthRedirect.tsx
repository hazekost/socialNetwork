import { ComponentType } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"
import { StateType } from "../redux/redux-store"

type RedirectComponentPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: StateType): RedirectComponentPropsType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: RedirectComponentPropsType) {
        let { isAuth, ...restProps } = props
        if (!isAuth) return <Redirect to={"/login"} />
        return <Component {...restProps as T} />
    }
    return connect(mapStateToProps)(RedirectComponent)

}