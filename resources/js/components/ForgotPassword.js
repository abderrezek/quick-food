import { h } from "preact";
import { useState } from "preact/hooks"
import route from 'ziggy';
import { Ziggy } from '../ziggy';

import { Button } from "../ui/Button.js";
import { Success } from '../ui/Alert';
import Method from "../ui/Method.js";
import Csrf from "../ui/Csrf.js";
import { validate, utils } from "../utils";
import Auth from "./Auth";

const ForgotPassword = ({ csrf }) => {
    const [data, setData] = useState({
        email: ""
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [typeLink, setTypeLink] = useState("forgot-password");

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);
        if (ValidateChanmps(data)) {
            setErrors({});
            let forgotPasswordForm = {
                _token: csrf,
                _method: "POST",
                email: data.email
            };
            axios.post(route('password.email', undefined, undefined, Ziggy), forgotPasswordForm)
                .then(res => {
                    setSuccess(true);
                    if (res.status === 200) {
                        window.location = route('login', undefined, undefined, Ziggy);
                    }
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
        let { email } = data;
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
        return !errExist;
    };

    const onChange = (e) => setData(state => ({ ...state, [e.target.name]: e.target.value }));

    return (
        <div>
            {typeLink === "login" ? (
                <Auth
                    type={typeLink}
                />
            ) : typeLink === "register" ? (
                <Auth
                    type={typeLink}
                />
            ) : typeLink === "forgot-password" ? (
                <form className="needs-validation" method="post" action={route('password.email', undefined, undefined, Ziggy)} onSubmit={onSubmit}>
                    <Csrf value={csrf} />
                    <Method name="POST" />

                    {/* E-mail */}
                    <div className="mb-2">
                      <label for="emailFP" className="form-label">E-mail</label>
                      <input type="email" name="email" className={utils.classError('email', errors)} id="emailFP" onChange={onChange} />
                      {utils.showError('email', errors)}
                    </div>

                    <div className="d-grid my-3">
                        <Button title="Send" isLoading={loading} />
                    </div>

                    <p className="m-0 mt-3 text-center">
                        <a className="text-primary text-decoration-none" href="#" onClick={() => setTypeLink("register")}>Ne pas avoir de compte</a>
                    </p>
                    <p className="m-0 mb-2 text-center">
                        <a className="text-primary text-decoration-none" href="#" onClick={() => setTypeLink("login")}>S'identifier</a>
                    </p>
                </form>
            ) : null}
        </div>
    );
};

export default ForgotPassword;