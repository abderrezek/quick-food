import { h } from "preact";
import { useState } from "preact/hooks"
import register from "preact-custom-element";

import { Button } from "../ui/Button.js";
import { Success } from '../ui/Alert';
import Method from "../ui/Method.js";
import { validate, utils } from "../utils";

const Abonnez = ({ action }) => {
    const [data, setData] = useState({
        prenom: "",
        email: "",
        phone: "",
        accepteRecevoirEmail: false,
        accepteRecevoirPhone: false
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);
        if (ValidateChanmps(data)) {
            setErrors({});
            let abonnezForm = {
                // _token: csrf,
                _method: "POST",
                prenom: data.prenom,
                email: data.email,
                phone: data.phone,
                accepte_recevoir_email: data.accepteRecevoirEmail,
                accepte_recevoir_phone: data.accepteRecevoirPhone
            };
            axios.post(action, abonnezForm)
                .then(res => {
                    console.log(res);
                    setSuccess(true);
                    setSuccessMsg(res.data.message);
                })
                .catch(err => {
                    console.log(err.response);
                    setSuccess(false);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    const ValidateChanmps = (data) => {
        let errExist = false;
        let { prenom, email, phone } = data;
        // prenom
        if (prenom === "") {
            setErrors(errs => ({...errs, prenom: "Name is required"}));
            setLoading(false);
            errExist = true;
        }
        // email
        if (email === "") {
            setErrors(errs => ({...errs, email: "Email is required"}));
            setLoading(false);
            errExist = true;
        }
        if (email !== "" && !validate.IsEmail(email)) {
            setErrors(errs => ({...errs, email: "Email not valid"}));
            setLoading(false);
            errExist = true;
        }
        // phone number
        if (phone !== "" && !validate.IsPhone(phone)) {
            setErrors(errs => ({...errs, phone: "Phone not valid"}));
            setLoading(false);
            errExist = true;
        }
        return !errExist;
    };

    const onChange = (e) => setData(state => ({ ...state, [e.target.name]: e.target.value }));

    return (
        <div className="">
            {success ? (
                <Success
                    responces={successMsg}
                />
            ) : (
                <form className="needs-validation" method="post" action={action} onSubmit={onSubmit}>
                    {/* <Csrf value={csrf} /> */}
                    <Method name="POST" />

                    {/* Prenom */}
                    <div className="mb-3">
                      <label for="prenom" className="form-label">Prénom</label>
                      <input type="text" name="prenom" className={utils.classError('prenom', errors)} id="prenom" onChange={onChange} />
                      {utils.showError('prenom', errors)}
                    </div>

                    {/* E-mail */}
                    <div className="mb-3">
                      <label for="email" className="form-label">E-mail</label>
                      <input type="email" name="email" className={utils.classError('email', errors)} id="email" onChange={onChange} />
                      {utils.showError('email', errors)}
                    </div>

                    {/* phone */}
                    <div className="mb-3">
                      <label for="phone" className="form-label">Téléphone (facultatif)</label>
                      <input type="text" name="phone" className={utils.classError('phone', errors)} id="phone" onChange={onChange} />
                      {utils.showError('phone', errors)}
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" name="accepteRecevoirEmail" value="" id="recevoirEmail" />
                      <label class="form-check-label" for="recevoirEmail">
                        J'accepte de recevoir des informations commerciales à l'adresse e-mail indiquée (non obligatoire)
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" name="accepteRecevoirPhone" value="" id="recevoirPhone" />
                      <label class="form-check-label" for="recevoirPhone">
                        J'accepte de recevoir des informations commerciales au numéro de téléphone indiqué (non obligatoire)
                      </label>
                    </div>
                    <div className="my-4">
                        <Button
                            title="Abonnez-moi"
                            isLoading={loading}
                        />
                    </div>
                </form>
            )}
        </div>
    );
};

export default Abonnez;

register(
    Abonnez,
    "abonnez-moi",
    []
);