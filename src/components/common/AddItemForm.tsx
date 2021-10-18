import { Field, Form, Formik } from "formik";

type AddItemFormPropsType = {
    buttonName: string
    addItem: (text: string) => void
}

export const AddItemForm: React.FC<AddItemFormPropsType> = (props) => {

    const { addItem, buttonName } = props

    return <Formik
        initialValues={{ text: '' }}
        onSubmit={(values, actions) => {
            if (values.text.trim() !== "") {
                addItem(values.text)
            }
            values.text = ""
            actions.setSubmitting(false);
        }}>
        {formik => (
            <Form onSubmit={formik.handleSubmit}>
                <Field onChange={formik.handleChange} value={formik.values.text} name="text"
                    component="textarea" placeholder="Enter your text" />
                <div>
                    <button type="submit">{buttonName}</button>
                </div>
            </Form>
        )}
    </Formik>
}