import { h } from "preact";
import { useState, useEffect } from "preact/hooks";;

const Payment = ({ type, setData }) => {
    const [types, setTypes] = useState({
        payment: 'card',
        order_type: '',
        when: 'as_soon_as_possible',
    });

    useEffect(() => {
        if (type) {
            setTypes(prevState => ({ ...prevState, order_type: type }));
            setData(prevState => ({
                ...prevState,
                payment: types.payment,
                when: types.when,
            }));
        }
    }, [type]);

    const clickPayment = (type) => {
        setTypes(prevState => ({ ...prevState, payment: type }));
        setData(prevState => ({ ...prevState, payment: type }));
    };

    const clickOrderType = (type) => {
        setTypes(prevState => ({ ...prevState, order_type: type }));
        setData(prevState => ({ ...prevState, type: type }));
    };

    const clickWhen = (type) => {
        setTypes(prevState => ({ ...prevState, when: type }));
        setData(prevState => ({ ...prevState, when: type }));
    };

    const clsPayment = () => `btn btn-outline-${types.payment === 'card' ? 'info' : 'info'}`;

    return (
        <div>
            <div className="row">
                <div className="col">
                    <h5 className="text-uppercase">Paiement</h5>
                    <div className="d-flex flex-column">
                        <button type="button" className={`btn btn-outline-${types.payment === 'card' ? 'primary' : 'secondary'} mb-2`}
                            onClick={() => clickPayment('card')}>Carte</button>
                        <button type="button" className={`btn btn-outline-${types.payment === 'cash' ? 'primary' : 'secondary'}`}
                            onClick={() => clickPayment('cash')}>Payer en espèces</button>
                    </div>
                </div>

                <div className="col">
                    <h5 className="text-uppercase">Type de commande</h5>
                    <div className="d-flex flex-column">
                        <button type="button" className={`btn btn-outline-${types.order_type === 'delivery' ? 'primary' : 'secondary'} mb-2`}
                            onClick={() => clickOrderType('delivery')}>Livraison</button>
                        <button type="button" className={`btn btn-outline-${types.order_type === 'pickup' ? 'primary' : 'secondary'}`}
                            onClick={() => clickOrderType('pickup')}>Récupérer</button>
                    </div>
                </div>

                <div className="col">
                    <h5 className="text-uppercase">Lorsque</h5>
                    <div className="d-flex flex-column">
                        <button type="button" className={`btn btn-outline-${types.when === 'as_soon_as_possible' ? 'primary' : 'secondary'} mb-2`}
                            onClick={() => clickWhen('as_soon_as_possible')}>Dès que possible</button>
                        <button type="button" className={`btn btn-outline-${types.when === 'specific_time' ? 'primary' : 'secondary'}`}
                            onClick={() => clickWhen('specific_time')}>Temps spécifique</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;