import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type formDataType = {
    newPostText: string
}

const maxLength = maxLengthCreator(10)

const AddPostForm: React.FC<InjectedFormProps<formDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"} placeholder={"Post Message"}
                       validate={[required, maxLength]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<formDataType>({form: "profileAddPostForm"})(AddPostForm)

type MyPostsPropsType = {
    AddPost: (value: string) => void
    state: {
        posts: Array<{ id: number, message: string, likeCount: number }>
    }
}

export const MyPosts = React.memo((props: MyPostsPropsType) => {

    const addPost = (formData: formDataType) => {
        props.AddPost(formData.newPostText)
    }

    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>
            <AddPostFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {
                    props.state.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)
                }
            </div>
        </div>
    )
})