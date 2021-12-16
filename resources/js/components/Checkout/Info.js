import { h } from "preact";

import Payment from "./Payment";
import Address from "./Address";
import Contact from "./Contact";

const Info = ({ type, setData, errors }) => {
    return (
        <div>
            <Payment type={type} setData={setData} />

            <Address setData={setData} errors={errors} />

            <Contact setData={setData} errors={errors} />

            <p className="m-0">* These fields are required</p>
        </div>
    );
};

export default Info;