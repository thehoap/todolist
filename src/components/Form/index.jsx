import { Alert } from "antd";
import Button from "components/Button";
import Input from "components/Input";
import { useFormik } from "formik";
import { useState } from "react";
import { useAddTodoMutation } from "services/todoApi";
import { objToTime } from "utils/helpers/dateConvert";
import * as Yup from "yup";
import { FormGroup, FormLabel, SForm } from "./styles";

const Form = ({ feature }) => {
    const isUpdateFeature = feature === "update";
    const [showAlert, setShowAlert] = useState(false);

    const [addTodo] = useAddTodoMutation();

    const formik = useFormik({
        initialValues: {
            title: "",
            creator: "",
            createAt: objToTime(new Date()),
            // status: "newtask",
            description: "",
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Please enter the title"),
            creator: Yup.string()
                .required("Please enter the creator")
                .min(4, "Name must me 4 characters or more"),
            description: Yup.string().required("Please enter the description"),
        }),
        onSubmit: (values) => {
            addTodo(values);
            setShowAlert(true);
            formik.resetForm({
                values: {
                    title: "",
                    creator: "",
                    createAt: objToTime(new Date()),
                    description: "",
                },
            });
        },
    });

    return (
        <SForm onSubmit={formik.handleSubmit}>
            {showAlert && (
                <Alert
                    message="Form submitted"
                    description="Your task has been added to the list."
                    type="success"
                    showIcon
                    closable
                />
            )}
            <FormGroup>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input
                    id="title"
                    name="title"
                    placeholder="Enter the task's title"
                    width={"300px"}
                    value={formik.values.title}
                    onChange={formik.handleChange}
                />
            </FormGroup>
            {formik.errors.title && formik.touched.title && (
                <p className="form__message--error">{formik.errors.title}</p>
            )}
            <FormGroup>
                <FormLabel htmlFor="creator">Creator</FormLabel>
                <Input
                    id="creator"
                    name="creator"
                    placeholder="Enter the name of creator"
                    width={"300px"}
                    value={formik.values.creator}
                    onChange={formik.handleChange}
                />
            </FormGroup>
            {formik.errors.creator && formik.touched.creator && (
                <p className="form__message--error">{formik.errors.creator}</p>
            )}
            <FormGroup>
                <FormLabel htmlFor="createAt">Create at</FormLabel>
                <Input
                    id="createAt"
                    name="createAt"
                    width={"300px"}
                    value={formik.values.createAt}
                    onChange={formik.handleChange}
                    disabled={true}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="description">Description</FormLabel>
                <Input
                    id="description"
                    name="description"
                    placeholder="Description the task"
                    width={"300px"}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                />
            </FormGroup>
            {formik.errors.description && formik.touched.description && (
                <p className="form__message--error">
                    {formik.errors.description}
                </p>
            )}
            <FormGroup>
                <Button type="submit">Save</Button>
            </FormGroup>
        </SForm>
    );
};

export default Form;
