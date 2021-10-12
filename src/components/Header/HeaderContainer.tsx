import React from "react";
import { connect } from "react-redux";
import { DataType, socialAPI } from "../../api/api";
import { setAuth } from "../../redux/auth-reducer";
import { StateType } from "../../redux/redux-store";
import { Header } from "./Header";

type HeaderContainerPropsType = {
    isAuth: boolean
    login: string | null
    setAuth: (data: DataType) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        socialAPI.authMe().then((res) => {
            if (res.data.resultCode === 0) {
                this.props.setAuth(res.data.data)
            }
        })
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

export default connect(mapStateToProps, { setAuth })(HeaderContainer)