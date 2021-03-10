import {AddPost} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {rootStateType} from "../../../Redux/reduxStore";

const mapStateToProps = (state: rootStateType) => {

    return {
        state: state.profilePage
    }
}

export const MyPostsContainer = connect(mapStateToProps, {AddPost})(MyPosts)