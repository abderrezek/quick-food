import { h } from "preact";
import { useState, useEffect, useRef } from "preact/hooks"
import register from "preact-custom-element";

import { Button } from "../../ui/Button.js";
import { Success, Errors } from '../../ui/Alert';
import Method from "../../ui/Method.js";
import { utils } from "../../utils";
import NewEditAddress from "./NewEditAddress.js";

const Address = ({ data: locations, actionaa, actionga }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const [success, setSuccess] = useState(null);
    const [type, setType] = useState("add");
    const [dataEdit, setDataEdit] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => {
        // load data
        locations = locations.replace('[{', '');
        locations = locations.replace('}]', '');
        let objArrs = locations.split('},{');
        objArrs = objArrs.map(obj => `{${obj}}`);
        let data = [];
        objArrs.forEach(obj => {
            data.push(JSON.parse(obj));
        });
        setData(data);
    }, [locations]);

    const addClick = () => {
        setShow(true);
        setType("add");
    };

    const removeClick = (slug) => {
        if (confirm("do you want remove it?") == false) {
            return;
        }
        setLoading(true);
        axios.delete(`${actionaa}/${slug}`)
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    setSuccess(res.data.message);
                    setData(state => state.filter(state => state.slug !== slug));
                }
            })
            .catch((err) => {
                let resp = res.response;
                console.log(resp);
                if (resp.status === 409) {
                    setErrors(resp.data.message);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const editClick = (address) => {
        setDataEdit(address);
        setType("edit");
        setShow(true);
    };

    const loadData = async () => {
        setLoading(true);
        axios.get(actionga)
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    setData(res.data.locations);
                }
            })
            .catch((err) => {
                let resp = res.response;
                console.log(resp);
                if (resp.status === 409) {
                    setErrors(resp.data.message);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const closeModal = () => {
        setShow(false);
        setType(null);
    }

    return (
        <div>
            {errors && errors !== "" ? (
                <Errors errors={errors} />
            ) : null}
            {success && success !== "" ? (
                <Success responces={success} />
            ) : null}

            <div className="mb-2">
                <button type="button" className="btn btn-primary" onClick={addClick}>
                    Ajouter un nouveau
                </button>
            </div>

            {/* Table */}
            {loading ? (
                <div className="d-flex justify-content-center" style="height: 316x;">
                    <div className="spinner-border m-5" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Adresse</th>
                            <th scope="col">Nombre de fois</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((obj, index) => (
                            <tr key={index}>
                                <td>{ index + 1 }</td>
                                <td>{ obj.address }</td>
                                <td>{ obj.number_times }</td>
                                <td>
                                    <button type="button" className="btn btn-danger me-1" onClick={() => removeClick(obj.slug)}>
                                        Supprimer
                                    </button>
                                    <button type="button" className="btn btn-info " onClick={() => editClick(obj)}>
                                        Modifier
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Modals */}
            {type === "add" ? (
                <NewEditAddress
                    action={actionaa}
                    loadData={() => loadData()}
                    show={show}
                    onClose={closeModal}
                    title="Ajouter"
                />
            ) : type === "edit" ? (
                <NewEditAddress
                    action={actionaa}
                    loadData={() => loadData()}
                    data={dataEdit}
                    show={show}
                    onClose={closeModal}
                    title="Modifier"
                />
            ) : null}

        </div>
    );
};

export default Address;

register(
    Address,
    "address-form",
    []
);