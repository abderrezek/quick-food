import { h, Fragment } from "preact";
import { useContext } from "preact/hooks";

import PlatOrder from "../Accueils/PlatOrder";
import MyContext from "../Accueils/MyContext";

const Orders = ({ orders, sommes }) => {
    const { dispatch } = useContext(MyContext);

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

    return (
        <div>
            <h5 className="text-uppercase">VOTRE COMMANDE</h5>

            {orders.length > 0 ? (
                <Fragment>
                    <hr className="my-2" />
                    {orders.map((order, i) => (
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
                        <span>{sommes} DZD</span>
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
        </div>
    );
};

export default Orders;