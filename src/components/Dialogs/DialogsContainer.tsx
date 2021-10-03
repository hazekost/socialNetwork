import { addMessageAC, onMessageChangeAC } from "../../Redux/dialogsReducer"
import { ActionType } from "../../Redux/profileReducer"
import { Dialogs } from "./Dialogs"

type DialogContainerPropsType = {
    state: any
    dispatch: (action: ActionType) => void
}

export const DialogsContainer: React.FC<DialogContainerPropsType> = ({ state, dispatch }) => {

    const addMessage = () => {
        dispatch(addMessageAC())
    }
    const onDialogChange = (value: string) => {
        dispatch(onMessageChangeAC(value))
    }
    return <Dialogs state={state} addMessage={addMessage} onDialogChange={onDialogChange} />
}