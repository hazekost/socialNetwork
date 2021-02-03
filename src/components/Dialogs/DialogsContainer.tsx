import {AddMessageAC, ChangeMessageTextAC} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {rootStateType} from "../../Redux/reduxStore";

const mapStateToProps = (state: rootStateType) => {
    return {
        state: state.messagesPage
    }
}
// const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
//     return {
//         addMessage: () => {
//             dispatch(AddMessageAC())
//         },
//         changeMessageText: (value: string) => {
//             dispatch(ChangeMessageTextAC(value))
//         }
//     }
// }

export const DialogsContainer = connect(mapStateToProps, {
    addMessage: AddMessageAC,
    changeMessageText: ChangeMessageTextAC
})(Dialogs)