import { h } from "preact";
import { useState } from "preact/hooks";

const Address = ({ setData, errors }) => {
    const [form, setForm] = useState({
        // street: '',
        // zip: '',
        commune: '',
        city: '',
        address: '',
        apt: '',
        floor_number: '',
    });

    const onChange = (e) => setData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

    const cls = (name) => `form-control ${errors && name in errors?'is-invalid':''}`;

    const showErrors = (errMsg, name) => errors && name in errors && (
        <div className="invalid-feedback">{errMsg}</div>
    );

    return (
        <div className="my-3">
            <h5 className="text-uppercase">Adresse</h5>
            {/*<div className="row">
                <div className="col mb-3">
                  <label htmlFor="streetId" className="form-label">Rue *</label>
                  <input type="text" className="form-control" id="streetId" name="street" onChange={onChange} />
                </div>
                <div className="col mb-3">
                  <label htmlFor="zipId" className="form-label">Zip / code postal</label>
                  <input type="text" className="form-control" id="zipId" name="zip" onChange={onChange} />
                </div>
            </div>*/}

            <div className="row">
                <div className="col mb-3">
                  <label htmlFor="communeId" className="form-label">Commune *</label>
                  <input type="text" className={cls('commune')} id="communeId" name="commune" onChange={onChange} />
                  {showErrors(errors.commune, 'commune')}
                </div>
                <div className="col mb-3">
                  <label htmlFor="cityId" className="form-label">Ville *</label>
                  <input type="text" className={cls('city')} id="cityId" name="city" onChange={onChange} />
                  {showErrors(errors.city, 'city')}
                </div>
            </div>

            <div className="row">
                <div className="col-12 mb-3">
                  <label htmlFor="addressId" className="form-label">Adresse *</label>
                  <input type="text" className={cls('address')} id="addressId" name="address" onChange={onChange} />
                  {showErrors(errors.address, 'address')}
                </div>
            </div>

            <div className="row">
                <div className="col mb-3">
                  <label htmlFor="aptId" className="form-label">Apte</label>
                  <input type="text" className={cls('apt')} id="aptId" name="apt" onChange={onChange} />
                  {showErrors(errors.apt, 'apt')}
                </div>
                <div className="col mb-3">
                  <label htmlFor="floorNumberId" className="form-label">Numéro d'étage</label>
                  <input type="text" className={cls('floor_number')} id="floorNumberId" name="floor_number" onChange={onChange} />
                  {showErrors(errors.floor_number, 'floor_number')}
                </div>
            </div>
        </div>
    );
};

export default Address;