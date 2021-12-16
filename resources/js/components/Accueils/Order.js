import { h, Fragment } from "preact";
import { useState, useEffect, useContext } from "preact/hooks";

import DetailPlat from "./DetailPlat";
import MyContext from "./MyContext";

const Order = ({ plat: platReceive, showNotify }) => {
    const [plat, setPlat] = useState({
        id: platReceive.id,
        name: platReceive.name,
        price: platReceive.price,
        description: platReceive.description,
        ingredients: platReceive.ingredients,
        numero: 0,
    });
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [click, setClick] = useState('click');
    const { orders, dispatch } = useContext(MyContext);

    useEffect(() => {
        setClick('no');
        let order = orders.filter(ord => ord.id === plat.id);
        if (order.length > 0 && order[0].id === plat.id) {
            setPlat(order[0]);
        } else {
            setPlat(prevState => ({ ...prevState, numero: 0 }));
        }
    }, [orders]);

    useEffect(() => {
        if (click === 'click') {
            if (plat.numero === 1) {
                dispatch({
                    type: 'ADD_ORDER',
                    payload: plat
                });
                setLoading(false);
            } else if (plat.numero > 1) {
                dispatch({
                    type: 'INC_ORDER',
                    payload: plat.id
                });
                setLoading(false);
            }
        }
    }, [plat.numero]);

    const clickHandled = () => {
        setLoading(true);
        setClick('click');
        setPlat(prevState => ({ ...prevState, numero: prevState.numero + 1 }));
        showNotify("Menu item was added to your cart", "success");
    };

    return (
        <Fragment>
            <div class="card text-center">
                {/* image */}
                <img class="card-img-top" style={{ cursor: 'pointer' }} src="" alt={`image plat ${plat.name}`} onClick={() => setShowModal(true)} />

                {/* body */}
                <div class="card-body">
                    {/* title */}
                    <h5 class="card-title">
                        { plat.name }
                    </h5>

                    {/* description */}
                    <p class="card-text">
                        <p>{ plat.description }</p>
                        <h4>{ plat.price } DZD</h4>
                    </p>

                    {/* Button */}
                    <div class="d-grid gap-2">
                        <button type="button" class="btn btn-primary position-relative" disabled={loading} onClick={clickHandled}>
                            {loading && (
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            )}{" "}Commandez maintenant
                            {plat.numero > 0 ? (
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {plat.numero} <span class="visually-hidden">unread messages</span>
                                </span>
                            ) : null}
                        </button>
                    </div>
                </div>
            </div>

            <DetailPlat
                show={showModal}
                onClose={() => setShowModal(false)}
                plat={plat}
            />
        </Fragment>
    );
};

export default Order;