import React, { useMemo, useState, useEffect } from 'react'
import { Spinner, Button, Dropdown } from "react-bootstrap"
import { Link, usePage } from '@inertiajs/inertia-react'
import axios from "axios"

import { DefaultTable } from "../../admin/components/Tables"
import { ModalDelete } from "../../admin/components/Modals"
import { AlertDanger, AlertSuccess } from "../../admin/components/Alerts"

const Plats = () => {
    const [data, setData] = useState([]);
    const [idPlat, setIdPlat] = useState(-1);
    const [loading, setLoading] = useState(true);
    const [showDelete, setShowDelete] = useState(false);
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
        setLoading(true)
        // setTimeout(function(){
        //     console.log("yes");
        // }, 5000);
        axios.get(route('api.admin.plats.index'))
            .then((res) => res.data.data)
            .then((res) => {
                console.log(res);
                if (res.length > 0) {
                    console.log("hey");
                    let table = []
                    res.forEach(p => {
                        table.push({
                            nom: p.name,
                            description: p.description,
                            prix: p.price,
                            evaluation: p.rating,
                            numberTimesSelected: p.number_times_selected,
                            action: p.id
                        });
                    });
                    setData(table);
                }
            })
            .catch((err) => {
                console.log(err.response);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const columns = useMemo(() => [
        {
            Header: 'Nom',
            accessor: 'nom',
        }, {
            Header: 'Description',
            accessor: 'description',
        }, {
            Header: 'Prix',
            accessor: 'prix',
        }, {
            Header: 'Evaluation',
            accessor: 'evaluation',
        }, {
            Header: 'Nombre de fois sélectionné',
            accessor: 'numberTimesSelected',
        }, {
            Header: 'Action',
            accessor: 'action',
            Cell: ({ value }) => (
                <Dropdown>
                  <Dropdown.Toggle variant="link" size="sm" bsPrefix="p-2">
                    <i className="fas fa-ellipsis-v"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} href={route('admin.plats.edit', [value])}>
                        <i className="far fa-edit"></i>{' '}Éditer
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => deleteHandled(value)}>
                        <i className="far fa-times-circle"></i>{' '}Supprimer
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            )
        }
    ], []);

    const deleteHandled = (id) => {
        setIdPlat(id);
        setShowDelete(true);
    };

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
            <h2>Plats</h2>
            {alert(showAlert)}
            <p>
                <Button variant="primary" as={Link} href={route('admin.plats.create')}>Ajouter</Button>
            </p>

            <DefaultTable data={data} columns={columns} />

            {idPlat !== -1 ? (
                <ModalDelete
                    show={showDelete}
                    onClose={() => setShowDelete(false)}
                    title="Suppression"
                    link={route('admin.plats.delete', [idPlat])}
                    msg="Voulez-vous supprimer cette plat ?"
                />
            ) : null}
        </>
    );
};

export default Plats;