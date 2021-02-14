import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuth, initialStateType, logout} from "../../Redux/authReducer";
import {rootStateType} from "../../Redux/reduxStore";

type HeaderContainerPropsType = {
    state: initialStateType
    getAuth: () => void
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuth()
    }
    render() {
        return <Header state={this.props.state} logOut={this.props.logout}/>;
    }
}

const mapStateToProps = (state: rootStateType) => {
    return {
        state: state.auth
    }
}

export default connect(mapStateToProps, {getAuth, logout})(HeaderContainer)