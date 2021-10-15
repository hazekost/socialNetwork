import { ComponentType } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { addMessageAC, onMessageChangeAC } from "../../redux/dialogs-reducer"
import { DispatchType, StateType } from "../../redux/redux-store"
import { Dialogs } from "./Dialogs"

const mapStateToProps = (state: StateType) => ({
    state: state.messagesPage,
})
const mapDispatchToProps = (dispatch: DispatchType) => ({
    addMessage: () => {
        dispatch(addMessageAC())
    },
    onDialogChange: (value: string) => {
        dispatch(onMessageChangeAC(value))
    }
})

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)