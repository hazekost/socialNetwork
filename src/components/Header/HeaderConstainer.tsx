import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuth, initialStateType} from "../../Redux/authReducer";
import {rootStateType} from "../../Redux/reduxStore";

type HeaderContainerPropsType = {
    state: initialStateType
    getAuth: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuth()
        // this.props.setFetching(true)
        // networkAPI.getAuth().then((response) => {
        //     this.props.setFetching(false)
        //     if (response.data.resultCode === 0) {
        //         this.props.setAuth(response.data.data)
        //     }
        // })
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

export default connect(mapStateToProps, {getAuth})(HeaderContainer)