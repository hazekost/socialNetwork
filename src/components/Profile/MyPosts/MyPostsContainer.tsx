import {AddPostAC, ChangePostTextAC} from "../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {rootStateType} from "../../../Redux/reduxStore";

const mapStateToProps = (state: rootStateType) => {

    return {
        state: state.profilePage
    }
}
// const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
//     return {
//         changePostText: (value: string) => {
//             dispatch(ChangePostTextAC(value))
//         },
//         addPost: () => {
//             dispatch(AddPostAC())
//         }
//     }
// }

export const MyPostsContainer = connect(mapStateToProps, {
    changePostText: ChangePostTextAC,
    addPost: AddPostAC
})(MyPosts)