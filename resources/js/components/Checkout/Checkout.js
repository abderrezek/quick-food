import { h, Fragment } from "preact";
import { useState, useEffect, useContext } from "preact/hooks";
import route from 'ziggy';
import { Ziggy } from '../../ziggy';

import Info from "./Info";
import Orders from "./Orders";
import MyContext from "../Accueils/MyContext";

const Checkout = ({ data: dataReceive, showNotify }) => {
    const [data, setData] = useState({
        orders: [],
        sommeOrders: 0,
        type: '',
        payment: '',
        when: '',
        // street: '',
        // zip: '',
        commune: '',
        city: '',
        address: '',
        apt: '',
        floor_number: '',
        prenom: '',
        nom: '',
        telephone: '',
        email: '',
        comment: '',
    });
    const [loading, setLoading] = useState(true);
    const [loadingButton, setLoadingButton] = useState(false);
    const [errors, setErrors] = useState([]);
    const { orders, dispatch } = useContext(MyContext);

    useEffect(() => {
        if (dataReceive && orders) {
            setData(prevState => ({
                ...prevState,
                type: dataReceive.type,
                sommeOrders: orders.reduce((t, cv, ci, ar) => t + (parseFloat(cv.price) * cv.numero), 0),
                orders,
            }));
            setLoading(false);
        }
    }, [dataReceive, orders]);

    const handleClick = () => {
        setLoadingButton(true);
        if (data.orders.length === 0 || data.type === '') {
            showNotify("Cart is empty. Add menu items.", "error");
            setLoadingButton(false);
            return;
        }
        setErrors([]);
        axios.post(route('api.checkout.create-order', undefined, undefined, Ziggy), data)
            .then((res) => {
                if (res.status === 201) {
                    window.location.href = route('checkout.index', undefined, undefined, Ziggy);
                }
            })
            .catch((err) => {
                if (err.response && 'errors' in err.response.data) {
                    console.log(err.response);
                    setErrors(err.response.data.errors);
                }
            });
        setLoadingButton(false);
    };

    if (loading) {
        return (
            <div class="d-flex justify-content-center">
                <div class="spinner-border m-5" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Info type={data.type} setData={setData} errors={errors} />
                    </div>

                    <div className="col-md-4">
                        <Orders orders={data.orders} sommes={data.sommeOrders} />

                        <div className="d-grid gap-2">
                            <button type="button"
                                className="btn btn-primary text-uppercase fw-bold"
                                onClick={handleClick}
                                disabled={loadingButton}
                            >
                                {loadingButton && (
                                    <span
                                        class="spinner-border spinner-border-sm"
                                        role="status"
                                        aria-hidden="true"
                                    ></span>
                                )}{" "}
                                créer une commande
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Checkout;