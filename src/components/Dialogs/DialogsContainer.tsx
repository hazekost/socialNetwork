import React from "react";
import {AddMessage} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {rootStateType} from "../../Redux/reduxStore";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state: rootStateType) => {
    return {
        state: state.messagesPage
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {AddMessage}), withAuthRedirect)(Dialogs)
