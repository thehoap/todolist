import { Alert, Modal } from "antd";
import Button from "components/Button";
import Input from "components/Input";
import RadioGroup from "components/RadioGroup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    useAddTodoMutation,
    useDeleteTodoMutation,
    useLazyGetTodoQuery,
    useUpdateTodoMutation,
} from "services/todoApi";
import { objToTime } from "utils/helpers/dateConvert";
import * as Yup from "yup";
import { FormGroup, FormLabel, SForm } from "./styles";

const Form = () => {
    //ADD TODO
    const [addTodo] = useAddTodoMutation();

    //UPDATE TODO
    const { id } = useParams();
    const [getTodo, { isSuccess, data: todo }] = useLazyGetTodoQuery();
    const [updateTodo] = useUpdateTodoMutation();

    const formik = useFormik({
        initialValues: {
            title: "",
            creator: "",
            createAt: objToTime(new Date()),
            status: "newtask",
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
            console.log(values);
            if (id) {
                updateTodo({ ...values, id: id });
            } else {
                addTodo(values);
                formik.resetForm({
                    values: {
                        title: "",
                        creator: "",
                        createAt: objToTime(new Date()),
                        description: "",
                    },
                });
            }
            setShowAlert(true);
        },
    });

    useEffect(() => {
        formik.resetForm();
        if (id) {
            getTodo(id);
        }
        if (id && isSuccess) {
            formik.setValues(todo[0]);
        }
    }, [id, todo]);

    const [showAlert, setShowAlert] = useState(false);

    //DELETE TODO
    const navigate = useNavigate();
    const [deleteTodo] = useDeleteTodoMutation();

    const { confirm } = Modal;
    const showDeleteConfirm = () => {
        confirm({
            title: "Are you sure delete this task?",
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            centered: true,
            onOk() {
                deleteTodo(id);
                setTimeout(() => {
                    navigate("/");
                }, 500);
            },
        });
    };
    console.log(formik.values);
    return (
        <SForm onSubmit={formik.handleSubmit}>
            {showAlert && (
                <Alert
                    message="Form submitted"
                    description={`Your task has been ${
                        id ? "updated" : "added to the list"
                    }.`}
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
            {!isNaN(id) && (
                <FormGroup>
                    <RadioGroup
                        status={formik.values.status}
                        onChange={formik.handleChange}
                    />
                </FormGroup>
            )}
            <FormGroup>
                <Button type="submit">Save</Button>
                {!isNaN(id) && (
                    <>
                        <Button
                            type="reset"
                            onClick={() => {
                                console.log("reset");
                                formik.resetForm({
                                    values: {
                                        title: todo[0]?.title,
                                        creator: todo[0]?.creator,
                                        status: todo[0]?.status,
                                        description: todo[0]?.description,
                                    },
                                });
                            }}
                        >
                            Reset
                        </Button>
                        <Button type="button" onClick={showDeleteConfirm}>
                            Delete
                        </Button>
                    </>
                )}
            </FormGroup>
        </SForm>
    );
};

export default Form;
