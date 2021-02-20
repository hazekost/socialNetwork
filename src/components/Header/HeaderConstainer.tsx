import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {initialStateType, logoutTC} from "../../Redux/auth-reducer";
import {rootStateType} from "../../Redux/reduxStore";

type HeaderContainerPropsType = {
    state: initialStateType
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
        return <Header state={this.props.state} logOut={this.props.logout}/>;
    }
}

const mapStateToProps = (state: rootStateType) => {
    return {
        state: state.auth
    }
}

export default connect(mapStateToProps, {logout: logoutTC})(HeaderContainer)