import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import { AppRootStateType } from "../../redux/redux-store";
import { Header } from "./Header";

type HeaderContainerPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    logout = () => {
        this.props.logout()
    }

    render() {
        let { login, isAuth } = this.props
        return <Header isAuth={isAuth} login={login} logout={this.logout} />
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { logout })(HeaderContainer)