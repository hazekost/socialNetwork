import { connect } from "react-redux"
import { addMessageAC, onMessageChangeAC } from "../../redux/dialogs-reducer"
import { DispatchType, StateType } from "../../redux/redux-store"
import { Dialogs } from "./Dialogs"

const mapStateToProps = (state: StateType) => ({
    state: state.messagesPage,
    isAuth: state.auth.isAuth
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