import { h } from "preact";
import { useState, useEffect } from "preact/hooks"
import register from "preact-custom-element";

import { Button } from "../ui/Button.js";
import { Success, Errors } from '../ui/Alert';
import Method from "../ui/Method.js";
import { utils } from "../utils";

const UpdatePassword = ({ action }) => {
    const [data, setData] = useState({
        password: "",
        confirm_password: ""
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState({});

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);
        if (ValidateChanmps(data)) {
            setErrors({});
            let updatePassword = {
                _method: "PUT",
                password: data.password,
                password_confirmation: data.confirm_password
            };
            axios.put(action, updatePassword)
                .then(res => {
                    // console.log(res);
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
        let { password, confirm_password } = data;
        // password
        if (password === "") {
            setErrors(errs => ({...errs, password: "Password is required"}));
            setLoading(false);
            errExist = true;
        }
        // password
        if (password !== "" && password.length < 8) {
            setErrors(errs => ({...errs, password: "Password is less then 8"}));
            setLoading(false);
            errExist = true;
        }
        // password
        if (password !== "" && password !== confirm_password) {
            setErrors(errs => ({...errs, password: "Password Confirmation must be equel password"}));
            setLoading(false);
            errExist = true;
        }
        return !errExist;
    };

    const onChange = (e) => setData(state => ({ ...state, [e.target.name]: e.target.value }));

    return (
        <div>
            <form className="needs-validation" action={action} onSubmit={onSubmit}>
                <Method name="PUT" />

                {/* Password */}
                <div className="mb-2">
                  <label for="passwordE" className="form-label">Mot de passe</label>
                  <input type="password" name="password" className={utils.classError('password', errors)} id="passwordE" onChange={onChange} />
                  {utils.showError('password', errors)}
                </div>

                {/* Password confirmation */}
                <div className="mb-2">
                  <label for="confirmPasswordE" className="form-label">Confirmez le mot de passe</label>
                  <input type="password" name="confirm_password" className={utils.classError('confirm_password', errors)} id="confirmPasswordE" onChange={onChange} />
                  {utils.showError('confirm_password', errors)}
                </div>

                {success && success['succConnexion'] != null ? (
                    <Success responces={success['succConnexion']} />
                ) : null}

                {errors && errors['errConnexion'] != null ? (
                    <Errors errors={errors['errConnexion']} />
                ) : null}

                <div className="d-grid my-3">
                    <Button title="Éditer mots de passe" isLoading={loading} />
                </div>
            </form>
        </div>
    );
};

export default UpdatePassword;