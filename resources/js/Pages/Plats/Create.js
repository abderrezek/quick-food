import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import Select from 'react-select';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';

import Picture from '../../admin/components/Picture';
import { AlertDanger } from "../../admin/components/Alerts";

const Create = ({ ingredients, inputs }) => {
    const [readOnly, setReadOnly] = useState(false);
    const [img, setImg] = useState('');
    const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            description: "",
            discount: "",
            ingredients: [],
            is_discount: false,
            is_enabled: true,
            name: "azee",
            price: 123
        },
        shouldFocusError: false,
    });
    const { errors: errsValidation } = usePage().props

    useEffect(() => {

        console.log('inputs', inputs);
    }, [inputs]);

    useEffect(() => {
        if (!_.isEmpty(errsValidation)) {
            console.log('errorsValidation', errsValidation);
        }
    }, [errsValidation]);

    const onSubmit = (data) => {
        data.image = img;
        console.log({data});
        Inertia.post(route('admin.plats.store'), data, {
            headers: { ingredients }
        });
    };

    const showErrorMsg = ({ message }) => (
        <Form.Control.Feedback type="invalid">
          {message}
        </Form.Control.Feedback>
    );

    const showErrors = (errs) => !_.isEmpty(errsValidation) && (
        <AlertDanger onClose={null}>
            <ul>
            {_.mapValues(errsValidation, (value, key) => (
                <li {...key}>{value}</li>
            ))}
            </ul>
        </AlertDanger>
    );

    return (
        <>
            <h2>Plats / Create</h2>
            {showErrors(errsValidation)}
            <form method="post" onSubmit={handleSubmit(onSubmit)} className="p-2">
                <Container>
                    <Row>
                        {/* left */}
                        <Col md={12} lg={6}>
                            {/* Nom */}
                            <Form.Group className="mb-2">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control type="text" {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'nom est requis'
                                    },
                                    pattern: {
                                        value: /^[A-Za-z ]+$/,
                                        message: 'Il ne doit s\'agir que de lettres'
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Il doit être supérieur à 3 lettres'
                                    }
                                })} isInvalid={errors && errors.name} />
                                {errors && errors.name && showErrorMsg(errors.name)}
                            </Form.Group>

                            {/* Prix */}
                            <Form.Group className="mb-2">
                                <Form.Label>Prix</Form.Label>
                                <Form.Control type="text" {...register('price', {
                                    required: {
                                        value: true,
                                        message: 'prix est requis'
                                    },
                                    pattern: {
                                        value: /^[0-9\,]+$/,
                                        message: 'Il ne doit s\'agir que de nombres'
                                    },
                                    minLength: {
                                        value: 0,
                                        message: 'Il doit être supérieur à 0'
                                    }
                                })} isInvalid={errors && errors.price} />
                                {errors && errors.price && showErrorMsg(errors.price)}
                            </Form.Group>

                            {/* Ingrédients */}
                            <div className="mb-2">
                                <label className="form-label">Ingrédients</label>
                                <Controller
                                    as={Select}
                                    name="ingredients"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            isMulti
                                            options={ingredients}
                                        />
                                    )}
                                />
                            </div>

                            {/* Description */}
                            <Form.Group className="mb-2">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} {...register('description')} />
                            </Form.Group>

                            {/* Remise */}
                            <Form.Group as={Row} controlId="formRemise">
                                <Col>
                                    <Form.Check
                                        label="Est-ce Remise ?"
                                        {...register('is_discount')}
                                        defaultChecked={readOnly}
                                        onChange={() => setReadOnly(prevState => !prevState)}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Control type="text" {...register('discount', {
                                    required: {
                                        value: readOnly,
                                        message: 'discount est requis'
                                    },
                                    pattern: {
                                        value: /^[0-9\,]+$/,
                                        message: 'Il ne doit s\'agir que de nombres'
                                    },
                                    minLength: {
                                        value: 0,
                                        message: 'Il doit être supérieur à 0'
                                    }
                                })} readOnly={!readOnly} isInvalid={errors && errors.discount} />
                                {errors && errors.discount && showErrorMsg(errors.discount)}
                            </Form.Group>

                            {/* plat is enabled */}
                            <Form.Group as={Row} className="mb-2" controlId="isEnabled">
                                <Col>
                                    <Form.Check
                                        label="Est-ce à vendre ?"
                                        {...register('is_enabled')}
                                    />
                                </Col>
                            </Form.Group>
                        </Col>

                        {/* right */}
                        <Col md={12} lg={6}>
                            {/* Change Image */}
                            <div className="mb-2">
                                <Picture img={img} setImg={setImg} />
                            </div>
                        </Col>

                        <Col md={12} lg={6}>
                            <Button className="mt-2" type="submit" variant="primary" disabled={isSubmitting}>
                                {isSubmitting && (
                                    <Spinner
                                      as="span"
                                      animation="border"
                                      size="sm"
                                      role="status"
                                      aria-hidden="true"
                                    />
                                )}
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </form>
        </>
    );
};

export default Create;