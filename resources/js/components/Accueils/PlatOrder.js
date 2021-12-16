import { h } from "preact";
import { memo } from "preact/compat";

const PlatOrder = ({ order, addClick, minusClick, deleteClick }) => {
    return (
        <div className="my-2">
            <p className="m-0 d-flex justify-content-between">
                <span>
                    {order.numero} x {order.name}
                </span>
                <span>{order.price} DZD</span>
            </p>
            <p className="m-0 d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                    type="button"
                    className="btn btn-outline-warning btn-sm"
                    onClick={addClick}
                >
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </button>

                <button
                    type="button"
                    className="btn btn-outline-warning btn-sm"
                    onClick={minusClick}
                >
                    <i class="fa fa-minus" aria-hidden="true"></i>
                </button>

                {deleteClick && (
                    <button
                        type="button"
                        className="btn btn-outline-warning btn-sm"
                        onClick={deleteClick}
                    >
                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                )}
            </p>
        </div>
    );
};

export default memo(PlatOrder);
