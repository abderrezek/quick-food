import { h, Fragment } from "preact";
import { useState, useEffect, useContext } from "preact/hooks";
import route from 'ziggy';
import { Ziggy } from '../../ziggy';

import PlatOrder from "./PlatOrder";
import MyContext from "./MyContext";
import Modal from "../../ui/Modal";

const Panier = ({ showNotify, modal, setData: setDataReceive }) => {
    const [data, setData] = useState({
        orders: [],
        type: "delivery",
        sommeOrders: 0,
    });
    const [sommeOrders, setSommeOrders] = useState(0);
    const [loading, setLoading] = useState(false);
    const { orders, dispatch } = useContext(MyContext);

    useEffect(() => {
        setSommeOrders(orders.reduce((t, cv, ci, ar) => t + (parseFloat(cv.price) * cv.numero), 0));
        setData((prevState) => ({ ...prevState, orders }));
    }, [orders]);

    useEffect(() => {
        setData((prevState) => ({ ...prevState, sommeOrders }));
    }, [sommeOrders]);

    const clickHandled = () => {
        setLoading(true);
        if (data.orders.length === 0 || sommeOrders === 0 || data.type === '') {
            showNotify("Cart is empty. Add menu items.", "error");
            setLoading(false);
            return;
        }
        axios.post(route('api.checkout.index', undefined, undefined, Ziggy), data)
            .then((res) => {
                // console.log('data.sommeOrders: ', data.sommeOrders);
                setDataReceive({
                    // orders,
                    type: data.type,
                    // sommeOrders: data.sommeOrders,
                });
            })
            .catch((err) => {
                console.log('error in Panier js : ', err.response);
            })
            .finally(() => {
                setLoading(false);
                modal.show();
            });
    };

    const incOrder = (id) => {
        dispatch({
            type: 'INC_ORDER',
            payload: id
        });
    };

    const decOrder = (order) => {
        if (order.numero === 1) {
            dispatch({
                type: "REMOVE_ORDER",
                payload: order.id,
            });
        } else {
            dispatch({
                type: "DEC_ORDER",
                payload: order.id,
            });
        }
    };

    const removeOrder = (id) => {
        dispatch({
            type: "REMOVE_ORDER",
            payload: id,
        });
    };

    const removeAllOrders = () => {
        if (orders.length > 0) {
            dispatch({
                type: "REMOVE_ALL",
            });
        }
    };

    const handleChange = (e) => setData((prevState) => ({ ...prevState, type: e.target.value }));

    return (
        <Fragment>
            {/* type */}
            <select
                className="form-select my-4"
                value={data.type}
                onChange={handleChange}
            >
                <option value="delivery">
                    <i className="fa fa-car" ariaHidden="true"></i> Livraison
                </option>
                <option value="pickup">
                    <i className="fa fa-shopping-bag" ariaHidden="true"></i>{" "}
                    Récupérer
                </option>
            </select>

            {/* title */}
            <div className="d-flex justify-content-between align-items-center">
                <h6 className="text-uppercase">
                    <strong>your order</strong>
                </h6>

                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={removeAllOrders}
                    disabled={data.orders.length === 0}
                >
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </div>

            {data.orders.length !== 0 ? (
                <Fragment>
                    <hr className="my-2" />
                    {data.orders.map((order, i) => (
                        <PlatOrder
                            key={i}
                            order={order}
                            addClick={() => incOrder(order.id)}
                            minusClick={() => decOrder(order)}
                            deleteClick={() => removeOrder(order.id)}
                        />
                    ))}
                    <hr className="my-2" />
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-uppercase">total</span>
                        <span>{sommeOrders} DZD</span>
                    </div>
                </Fragment>
            ) : (
                <div className="text-center text-secondary">
                    <i
                        className="fa fa-shopping-cart fa-5x"
                        ariaHidden="true"
                    ></i>
                    <p className="my-3">Cart is empty. Add menu items.</p>
                </div>
            )}

            {/* checkout button */}
            <div className="d-grid gap-2">
                <button
                    type="button"
                    className="btn btn-primary text-uppercase fw-bold"
                    disabled={loading && orders.length > 0}
                    onClick={clickHandled}
                >
                    {loading && (
                        <span
                            class="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                        ></span>
                    )}{" "}
                    Aller à la caisse
                </button>
            </div>

            {/* Checkout */}
            {/*{showCheckout && (
                <Modal fullWidth={true} show={showCheckout} onClose={() => setShowCheckout(false)}>
                    <div id="checkout"></div>
                </Modal>
            )}*/}
        </Fragment>
    );
};

export default Panier;
