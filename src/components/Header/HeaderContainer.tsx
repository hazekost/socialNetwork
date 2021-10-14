import React from "react";
import { connect } from "react-redux";
import { getAuthTC } from "../../redux/auth-reducer";
import { StateType } from "../../redux/redux-store";
import { Header } from "./Header";

type HeaderContainerPropsType = {
    isAuth: boolean
    login: string | null
    getAuthTC: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthTC()
    }

    render() {
        let { login, isAuth } = this.props
        return <Header isAuth={isAuth} login={login} />
    }
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { getAuthTC })(HeaderContainer)