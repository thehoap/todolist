<<<<<<< HEAD
import { Alert } from "antd";
import Button from "components/Button";
import Input from "components/Input";
import { useFormik } from "formik";
import { useState } from "react";
import { useAddTodoMutation } from "services/todoApi";
=======
import { Alert, Modal, notification } from "antd";
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
>>>>>>> d3a62dbba3089a44f7c2f0ac1e34aad2be28eaab
import { objToTime } from "utils/helpers/dateConvert";
import * as Yup from "yup";
import { FormGroup, FormLabel, SForm } from "./styles";

<<<<<<< HEAD
const Form = ({ feature }) => {
    const isUpdateFeature = feature === "update";
    const [showAlert, setShowAlert] = useState(false);

    const [addTodo] = useAddTodoMutation();

=======
const Form = () => {
    //ADD TODO
    const [addTodo] = useAddTodoMutation();

    //UPDATE TODO
    const { id } = useParams();
    const [getTodo, { isSuccess, data: todo }] = useLazyGetTodoQuery();
    const [updateTodo] = useUpdateTodoMutation();

>>>>>>> d3a62dbba3089a44f7c2f0ac1e34aad2be28eaab
    const formik = useFormik({
        initialValues: {
            title: "",
            creator: "",
            createAt: objToTime(new Date()),
<<<<<<< HEAD
            // status: "newtask",
=======
            status: "newtask",
>>>>>>> d3a62dbba3089a44f7c2f0ac1e34aad2be28eaab
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
<<<<<<< HEAD
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
=======
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
                setTimeout(() => {
                    navigate("/");
                }, 500);
                deleteTodo(id);
                notification.warning({
                    message: `Task is deleted successfully`,
                    description:
                        "Your task has been deleted. You can not undo your action and will go back to home page.",
                    placement: "top",
                });
            },
        });
    };
>>>>>>> d3a62dbba3089a44f7c2f0ac1e34aad2be28eaab

    return (
        <SForm onSubmit={formik.handleSubmit}>
            {showAlert && (
                <Alert
                    message="Form submitted"
<<<<<<< HEAD
                    description="Your task has been added to the list."
=======
                    description={`Your task has been ${
                        id ? "updated" : "added to the list"
                    }.`}
>>>>>>> d3a62dbba3089a44f7c2f0ac1e34aad2be28eaab
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
<<<<<<< HEAD
                    value={formik.values.title}
=======
                    value={formik?.values?.title}
>>>>>>> d3a62dbba3089a44f7c2f0ac1e34aad2be28eaab
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
<<<<<<< HEAD
                    value={formik.values.creator}
=======
                    value={formik?.values?.creator}
>>>>>>> d3a62dbba3089a44f7c2f0ac1e34aad2be28eaab
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
<<<<<<< HEAD
                    value={formik.values.createAt}
=======
                    value={formik?.values?.createAt}
>>>>>>> d3a62dbba3089a44f7c2f0ac1e34aad2be28eaab
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
<<<<<<< HEAD
                    value={formik.values.description}
=======
                    value={formik?.values?.description}
>>>>>>> d3a62dbba3089a44f7c2f0ac1e34aad2be28eaab
                    onChange={formik.handleChange}
                />
            </FormGroup>
            {formik.errors.description && formik.touched.description && (
                <p className="form__message--error">
                    {formik.errors.description}
                </p>
            )}
<<<<<<< HEAD
            <FormGroup>
                <Button type="submit">Save</Button>
=======
            {!isNaN(id) && (
                <FormGroup>
                    <RadioGroup
                        status={formik?.values?.status}
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
>>>>>>> d3a62dbba3089a44f7c2f0ac1e34aad2be28eaab
            </FormGroup>
        </SForm>
    );
};

export default Form;
