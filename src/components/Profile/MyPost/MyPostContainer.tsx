import { ActionType, addPostAC, onPostChangeAC, ProfilePageType } from "../../../Redux/profileReducer";
import { MyPost } from "./MyPost";

type MyPostContainerPropsType = {
    state: ProfilePageType
    dispatch: (action: ActionType) => void
}

export const MyPostContainer: React.FC<MyPostContainerPropsType> = ({ state, dispatch }) => {

    const addPost = () => {
        dispatch(addPostAC())
    }
    const onPostChange = (value: string) => {
        dispatch(onPostChangeAC(value))
    }

    return <MyPost state={state} addPost={addPost} onPostChange={onPostChange} />
}