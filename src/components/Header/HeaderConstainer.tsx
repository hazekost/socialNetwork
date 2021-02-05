import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {dataType, initialStateType, setAuth} from "../../Redux/authReducer";
import {rootStateType} from "../../Redux/reduxStore";
import {setFetching} from "../../Redux/usersReducer";

type HeaderContainerPropsType = {
    setAuth: (data: dataType) => void
    setFetching: (isFetching: boolean) => void
    state: initialStateType
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.setFetching(true)
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true})
            .then((response) => {
                this.props.setFetching(false)
                if (response.data.resultCode === 0) {
                    this.props.setAuth(response.data.data)
                }
            })
    }

    render() {
        return <Header state={this.props.state}/>;
    }
}

const mapStateToProps = (state: rootStateType) => {
    return {
        state: state.auth
    }
}

export default connect(mapStateToProps, {setAuth, setFetching})(HeaderContainer)