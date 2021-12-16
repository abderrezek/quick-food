import { h } from "preact";
import { useState, useEffect, useContext } from "preact/hooks";

import Modal from "../../ui/Modal.js";
import MyContext from "./MyContext";

const DetailPlat = ({ plat, onClose, show }) => {
    const { orders, dispatch } = useContext(MyContext);

    const incOrder = (id) => {
        dispatch({
            type: 'INC_ORDER',
            payload: id
        });
    };

    const decOrder = (plat) => {
        if (plat.numero === 1) {
            dispatch({
                type: "REMOVE_ORDER",
                payload: plat.id,
            });
        } else {
            dispatch({
                type: "DEC_ORDER",
                payload: plat.id,
            });
        }
    };

    const addOrder = (plat) => {
        if (plat.numero === 0) {
            plat.numero = 1;
            dispatch({
                type: 'ADD_ORDER',
                payload: plat
            });
        }
    };

    return (
        <Modal title="" onClose={onClose} show={show} footer={false}>
            <div className="shadow-sm bg-body d-flex flex-column justify-content-between" style={{ height: '200px' }}>
                <img class="card-img-top" src="" alt={`image plat ${plat.name}`} />

                <div>
                    <h4>{plat.name}</h4>
                    <h6>{plat.ingredients}</h6>
                </div>
            </div>

            <div className="pt-4 d-flex justify-content-evenly align-items-center">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-outline-primary" onClick={() => decOrder(plat)}>-</button>
                    <input className="py-1 ps-1 border border-dark" type="text" value={plat.numero === 0 ? 1 : plat.numero} />
                    <button type="button" className="btn btn-outline-primary" onClick={() => incOrder(plat.id)}>+</button>
                </div>

                <span className="fs-4 mx-2">{plat.price}</span>

                <button type="button" className="btn btn-primary" onClick={() => addOrder(plat)}>
                    Ajouter au panier
                </button>
            </div>
        </Modal>
    );
};

export default DetailPlat;