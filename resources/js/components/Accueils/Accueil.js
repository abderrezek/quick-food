import { Fragment, h } from "preact";
import { useState, useEffect, useReducer, useRef } from "preact/hooks";
import register from "preact-custom-element";
import toast, { Toaster } from 'react-hot-toast';
import route from 'ziggy';
import { Ziggy } from '../../ziggy';

import Order from "./Order";
import Panier from "./Panier";
import MyContext from "./MyContext";
import Checkout from "../Checkout/Checkout";

const initialState = [];
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            let order = state.filter(ord => ord.id === action.payload.id)
            if (order.length === 0) {
                return [
                    ...state,
                    action.payload
                ];
            }
            return state;

        case 'REMOVE_ORDER': return state.filter(ord => ord.id !== action.payload);

        case 'INC_ORDER':
            let prevStateI = state.map(ord => {
                if (ord.id === action.payload) {
                    ord.numero += 1
                }
                return ord
            });
            return prevStateI;

        case 'DEC_ORDER':
            let prevStateD = state.map((ord, i) => {
                if (ord.id === action.payload) {
                    ord.numero -= 1
                }
                return ord
            });
            return prevStateD;

        case 'REMOVE_ALL': return [];

        default: return state;
    }
}

const Accueil = ({ checkout }) => {
    const [categories, setCategories] = useState([]);
    const [plats, setPlats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [orders, dispatch] = useReducer(reducer, initialState);
    const modalRef = useRef(null);
    const [modal, setModal] = useState(null);
    const [data, setData] = useState(null);

    // load data
    useEffect(() => {
        axios.get(route('api.plats.index', undefined, undefined, Ziggy))
            .then((res) => {
                // console.log(res);
                if (res.status === 200) {
                    setCategories(res.data.categories);
                    setPlats(res.data.plats);
                }
            })
            .catch((err) => {
                console.log(err.response);
            })
            .finally(() => {
                setLoading(false);
            });
        setModal(
            new bootstrap.Modal(modalRef.current)
        );
    }, []);

    const showNotify = (msg, type) => {
        if (type === "success") {
            toast.success(msg);
        } else if (type === "error") {
            toast.error(msg);
        }
    }

    return (
    <MyContext.Provider value={{ dispatch, orders }}>
        <div className="row">
            {/* Toaster Notification */}
            <Toaster
                position="top-center"
                reverseOrder={true}
                toastOptions={{
                    success: {
                      duration: 3000,
                      theme: {
                        primary: 'green',
                        secondary: 'black',
                      },
                    },
                }}
            />

            {/* Groups Plats */}
            <div className="col-9">
                {loading ? (
                    <div className="text-center my-5">
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                ) : (
                    <Fragment>
                        {/* Navs */}
                        <nav id="navbar-cat" className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                            <div className="collapse navbar-collapse">
                              <ul className="navbar-nav">
                                {categories && categories.map((cat, i) => (
                                    <li className="nav-item" key={i}>
                                        <a className="nav-link" href={`#${cat.name}`}>{ cat.name }</a>
                                    </li>
                                ))}
                              </ul>
                            </div>
                        </nav>

                        {/* Content */}
                        <div className="my-4" dataBsSpy="scroll" dataBsTarget="#navbar-cat" dataBsOffset="0" tabIndex="0">
                            {plats && plats.map((catPlats, i) => (
                                <Fragment key={i}>
                                    <h4 id={categories && categories[i].name}>{ categories && categories[i].name }</h4>

                                    <div className="row">
                                        {catPlats ? catPlats.map((p, i) => (
                                            <div className="col-4 my-2" key={i}>
                                                <Order
                                                    plat={p}
                                                    showNotify={showNotify}
                                                />
                                            </div>
                                        )) : null}
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                    </Fragment>
                )}
            </div>

            {/* panier */}
            <div className="col-3">
                <div className="mt-4">
                    <Panier
                        showNotify={showNotify}
                        modal={modal}
                        setData={setData}
                    />
                </div>
            </div>
        </div>

        {/* Modal Checkout */}
        <div className="modal" id="checkout-modal" ref={modalRef} tabindex="-1">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header flex-row-reverse">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <Checkout
                            data={data}
                            showNotify={showNotify}
                        />
                    </div>
                </div>
            </div>
        </div>
    </MyContext.Provider>
    );
};

export default Accueil;

register(
    Accueil,
    "accueil-form",
    []
);