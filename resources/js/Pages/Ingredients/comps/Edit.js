import React, { useState } from "react";
import { Modal, Form, Button, Spinner, Alert } from "react-bootstrap";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "react-hook-form";
import axios from "axios";

const Edit = ({ show, onHide, ingredient, loadData }) => {
    const [errors, setErrors] = useState("");
    const [success, setSuccess] = useState("");
    const { register, handleSubmit, reset, formState: { errors: errsForm, isSubmitting } } = useForm({
        defaultValues: {
            name: ingredient.name
        },
        shouldFocusError: false,
    });

    const submit = (data) => {
        axios.post(route('api.admin.ingredients.store'), data)
            .then(res => {
                console.log(res);
                if (res.status === 422 && _.has(res.data.errors, 'name')) {
                    console.log('yes');
                    setErrors(res.data.errors.name[0]);
                } else if (res.status === 201) {
                    loadData();
                    setSuccess(res.data.message);
                }
            })
            .catch(err => {
                console.log(err.response);
            });
    }

    const showErrorMsg = ({ message }) => (
        <Form.Control.Feedback type="invalid">
          {message}
        </Form.Control.Feedback>
    );

    const showErrs = () => errors !== "" && (
        <Alert variant="danger">{errors}</Alert>
    );

    const showSuccs = () => success !== "" && (
        <Alert variant="success">{success}</Alert>
    );

    const onClose = () => {
        setErrors("");
        setSuccess("");
        reset();
        onHide();
    };

    return (
        <Modal show={show} onHide={onClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Modifier ingredient</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {showErrs()}
                {showSuccs()}
                <Form method="post" onSubmit={handleSubmit(submit)}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Nom Ingredient</Form.Label>
                        <Form.Control type="text" {...register('name', {
                            required: {
                                value: true,
                                message: 'Nom est requis'
                            },
                        })} isInvalid={errsForm && errsForm.name} />
                        {errsForm && errsForm.name && showErrorMsg(errsForm.name)}
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" disabled={isSubmitting}>
                            {isSubmitting && (
                                <Spinner
                                  as="span"
                                  animation="border"
                                  size="sm"
                                  role="status"
                                  aria-hidden="true"
                                />
                            )}{' '}Modifier
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default Edit;