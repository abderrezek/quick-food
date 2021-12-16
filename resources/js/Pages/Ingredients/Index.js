import React, { useMemo, useState, useEffect } from 'react'
import { Spinner, Button, Dropdown } from "react-bootstrap"
import { Link, usePage } from '@inertiajs/inertia-react'
import axios from "axios"

import { DefaultTable } from "../../admin/components/Tables"
import { ModalDelete } from "../../admin/components/Modals"
import { AlertDanger, AlertSuccess } from "../../admin/components/Alerts"
import Add from "./comps/Add";
import Edit from "./comps/Edit";

const Ingredients = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [idIngredient, setIdIngredient] = useState(-1);
    const [showModal, setShowModal] = useState(false);
    const [ingredient, setIngredient] = useState(null);
    const [showAlert, setShowAlert] = useState({
        type: '',
        message: ''
    });
    const { flash } =  usePage().props;

    useEffect(() => {
        if (flash.type && flash.message) {
            if (flash.type === "success") {
                LoadData();
            }
            setShowAlert({
                type: flash.type,
                message: flash.message,
            });
        }
    }, [flash]);

    useEffect(() => {
        LoadData();
    }, []);

    const LoadData = () => {
        setLoading(true);
        axios.get(route('api.admin.ingredients.get'))
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    if (res.data.data.length > 0) {
                        let table = [];
                        res.data.data.forEach(ing => {
                            table.push({
                                nom: ing.name,
                                action: ing,
                            });
                        });
                        setData(table);
                    }
                }
            })
            .catch((err) => {
                setShowAlert({
                    type: 'error',
                    message: 'Quelque chose ne va pas?'
                });
            });
        setLoading(false);
    }

    const columns = useMemo(() => [
        {
            Header: 'Nom',
            accessor: 'nom',
        }, {
            Header: 'Action',
            accessor: 'action',
            Cell: ({ value }) => (
                <Dropdown>
                  <Dropdown.Toggle variant="link" size="sm" bsPrefix="p-2">
                    <i className="fas fa-ellipsis-v"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => {
                        setIngredient(value);
                        setShowModal(true);
                    }}>
                        <i className="far fa-edit"></i>{' '}Éditer
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => {
                        setIdIngredient(value.id);
                        setShowModal(true);
                    }}>
                        <i className="far fa-times-circle"></i>{' '}Supprimer
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            )
        }
    ], []);

    const hideAlert = () => setShowAlert(prevState => ({ ...prevState, type: '' }));

    const alert = ({ type, message }) => {
        if (type === "error") {
            return (
                <AlertDanger onClose={hideAlert}>{message}</AlertDanger>
            );
        } else if (type === "success") {
            return (
                <AlertSuccess onClose={hideAlert}>{message}</AlertSuccess>
            );
        }
        return null;
    };

    if (loading) {
        return (
            <div className="text-center my-5">
                <Spinner animation="border" role="status" size="lg">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <>
            <h2>Ingredients</h2>
            {alert(showAlert)}
            <p>
                <Button variant="primary" onClick={() => setShowModal(true)}>Ajouter</Button>
            </p>

            <DefaultTable data={data} columns={columns} />

            {!ingredient && showModal && idIngredient === -1 && (
                <Add
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    loadData={() => LoadData()}
                />
            )}

            {ingredient && showModal && idIngredient === -1 && (
                <Edit
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    ingredient={ingredient}
                    loadData={() => LoadData()}
                />
            )}

            {idIngredient !== -1 && (
                <ModalDelete
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    title="Suppression"
                    link={route('admin.ingredients.destroy', [idIngredient])}
                    msg="Voulez-vous supprimer cette plat ?"
                />
            )}
        </>
    );
};

export default Ingredients;