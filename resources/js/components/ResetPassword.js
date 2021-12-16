import { h } from "preact";
import { useState } from "preact/hooks"
import register from "preact-custom-element";
import route from 'ziggy';
import { Ziggy } from '../ziggy';

import { Button } from "../ui/Button.js";
import { Success, Errors } from '../ui/Alert';
import Method from "../ui/Method.js";
import Csrf from "../ui/Csrf.js";
import { validate, utils } from "../utils";

const ResetPassword = ({ csrf, email, action, csrflogin, actionlogin }) => {
    const [data, setData] = useState({
        email,
        password: "",
        confirm_password: "",
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
            let forgotPasswordForm = {
                token: csrf,
                _method: "POST",
                email: data.email,
                password: data.password,
                password_confirmation: data.confirm_password,
            };
            axios.post(action, forgotPasswordForm)
                .then(res => {
                    if (res.status === 200) {
                    //     setSuccess({ succConnexion : res.data.message });
                    //     window.location = window.location.origin;
                        let loginForm = {
                            _token: csrflogin,
                            _method: "POST",
                            email: data.email,
                            password: data.password
                        };
                        axios.post(actionlogin, loginForm)
                            .then((resL) => {
                                if (resL.status === 200) {
                                    window.location = window.location.origin;
                                }
                            })
                            .catch((errL) => {
                                // 429 (Too Many Requests)
                                if (errL.response && "errors" in errL.response.data) {
                                    setSuccess(false);
                                    if (errL.response.status === 422) {
                                        setErrors({ errConnexion : errL.response.data.errors.email });
                                        return;
                                    }
                                    setErrors({ errConnexion : "Trop de demandes" });
                                }
                            });
                    }
                })
                .catch(err => {
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
        let { email, password, confirm_password } = data;

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
        <form className="needs-validation" method="post" action={action} onSubmit={onSubmit}>
            <Csrf csrf={csrf} />
            <Method name="POST" />

            {/* E-mail */}
            <div className="mb-2">
              <label for="email" className="form-label">E-mail</label>
              <input type="email" name="email" value={email} disabled={true} className={utils.classError('email', errors)} id="email" onChange={onChange} />
              {utils.showError('email', errors)}
            </div>

            {/* Password */}
            <div className="mb-2">
              <label for="password" className="form-label">Mot de passe</label>
              <input type="password" name="password" className={utils.classError('password', errors)} id="password" onChange={onChange} />
              {utils.showError('password', errors)}
            </div>

            {/* Password confirmation */}
            <div className="mb-2">
              <label for="confirmPassword" className="form-label">Confirmez le mot de passe</label>
              <input type="password" name="confirm_password" className={utils.classError('confirm_password', errors)} id="confirmPassword" onChange={onChange} />
              {utils.showError('confirm_password', errors)}
            </div>

            {success['succConnexion'] != null ? (
                <Success errors={success['succConnexion']} />
            ) : null}

            {errors['errConnexion'] != null ? (
                <Errors errors={errors['errConnexion']} />
            ) : null}

            <div className="d-grid my-3">
                <Button title="Réinitialiser" isLoading={loading} />
            </div>

        </form>
    );
};

export default ResetPassword;

register(
    ResetPassword,
    "reset-password-form",
    []
);