import { h } from "preact";
import { useState, useEffect } from "preact/hooks"
import register from "preact-custom-element";

import { Button } from "../ui/Button.js";
import { Success, Errors } from '../ui/Alert';
import Method from "../ui/Method.js";
import Csrf from "../ui/Csrf.js";
import { validate, utils } from "../utils";

const UpdateInfo = ({ action, data : dataUser }) => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState({});

    useEffect(() => {
        let data = JSON.parse(dataUser);
        setData(data);
    }, [dataUser]);

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);
        if (ValidateChanmps(data)) {
            setErrors({});
            let loginForm = {
                _method: "PUT",
                name: data.name,
                email: data.email,
                phone: data.phone
            };
            axios.put(action, loginForm)
                .then(res => {
                    setSuccess({ succConnexion : res.data.message });
                })
                .catch(err => {
                    console.log(err.response);
                    // 429 (Too Many Requests)
                    if (err.response && "errors" in err.response.data) {
                        if (err.response.status === 422) {
                            setErrors({ errConnexion : err.response.data.errors.email });
                            return;
                        }
                        setErrors({ errConnexion : "Trop de demandes" });
                    }
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    const ValidateChanmps = (data) => {
        let errExist = false;
        let { email, password } = data;
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
        // password
        if (password === "") {
            setErrors(errs => ({...errs, password: "Password is required"}));
            setLoading(false);
            errExist = true;
        }
        return !errExist;
    };

    const onChange = (e) => setData(state => ({ ...state, [e.target.name]: e.target.value }));

    return (
        <div>
            {/* update info user */}
            <form className="needs-validation" action={action} onSubmit={onSubmit}>
                <Method name="PUT" />

                {/* Name */}
                <div className="mb-2">
                  <label for="nameE" className="form-label">Name</label>
                  <input type="text" name="name" className={utils.classError('name', errors)} id="nameE" value={data.name} onChange={onChange} />
                  {utils.showError('name', errors)}
                </div>

                {/* Phone */}
                <div className="mb-2">
                  <label for="phoneE" className="form-label">Télephone</label>
                  <input type="text" name="phone" className={utils.classError('phone', errors)} id="phoneE" value={data.phone} onChange={onChange} />
                  {utils.showError('phone', errors)}
                </div>

                {/* E-mail */}
                <div className="mb-2">
                  <label for="emailE" className="form-label">E-mail</label>
                  <input type="email" name="email" className={utils.classError('email', errors)} id="emailE" value={data.email} onChange={onChange} />
                  {utils.showError('email', errors)}
                </div>

                {success && success['succConnexion'] != null ? (
                    <Success responces={success['succConnexion']} />
                ) : null}

                {errors && errors['errConnexion'] != null ? (
                    <Errors errors={errors['errConnexion']} />
                ) : null}

                <div className="d-grid my-3">
                    <Button title="Éditer informations" isLoading={loading} />
                </div>
            </form>
        </div>
    );
};

export default UpdateInfo;