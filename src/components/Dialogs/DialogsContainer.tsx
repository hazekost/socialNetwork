import { ComponentType } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { addMessage, MessagesPageType } from "../../redux/dialogs-reducer"
import { AppRootStateType } from "../../redux/redux-store"
import { Dialogs } from "./Dialogs"

const mapStateToProps = (state: AppRootStateType): { state: MessagesPageType } => ({
    state: state.messagesPage,
})

export default compose<ComponentType>(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect)(Dialogs)