import { connect } from "react-redux"
import { addMessageAC, onMessageChangeAC } from "../../Redux/dialogsReducer"
import { DispatchType, StateType } from "../../Redux/redux-store"
import { Dialogs } from "./Dialogs"

const mapStateToProps = (state: StateType) => ({
    state: state.messagesPage
})
const mapDispatchToProps = (dispatch: DispatchType) => ({
    addMessage: () => {
        dispatch(addMessageAC())
    },
    onDialogChange: (value: string) => {
        dispatch(onMessageChangeAC(value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)