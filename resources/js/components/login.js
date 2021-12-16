import { h } from "preact";
import { useState } from "preact/hooks"
import register from "preact-custom-element";
import route from 'ziggy';
import { Ziggy } from '../ziggy';

import { Button } from "../ui/Button.js";
import { Success, Errors } from '../ui/Alert';
import Method from "../ui/Method.js";
import { validate, utils } from "../utils";
import Auth from "./Auth";

const Login = ({ intended }) => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [typeLink, setTypeLink] = useState("login");

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);
        if (ValidateChanmps(data)) {
            setErrors({});
            let loginForm = {
                _method: "POST",
                email: data.email,
                password: data.password
            };
            axios.post(route('login', undefined, undefined, Ziggy), loginForm)
                .then(res => {
                    setSuccess(true);
                    if (res.status === 200) {
                        if (intended === route('checkout.index', undefined, undefined, Ziggy)) {
                            window.location.href = route('checkout.index', undefined, undefined, Ziggy);
                        } else {
                            window.location.href = route('site.index', undefined, undefined, Ziggy);
                        }
                    }
                })
                .catch(err => {
                    // 429 (Too Many Requests)
                    if (err.response && "errors" in err.response.data) {
                        setSuccess(false);
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
            {typeLink === "login" ? (
                <form className="needs-validation" method="post" action={route('login', undefined, undefined, Ziggy)} onSubmit={onSubmit}>
                    <Method name="POST" />

                    {/* E-mail */}
                    <div className="mb-2">
                      <label for="emailL" className="form-label">E-mail</label>
                      <input type="email" name="email" className={utils.classError('email', errors)} id="emailL" onChange={onChange} />
                      {utils.showError('email', errors)}
                    </div>

                    {/* Password */}
                    <div className="mb-2">
                      <label for="passwordL" className="form-label">Mot de passe</label>
                      <input type="password" name="password" className={utils.classError('password', errors)} id="passwordL" onChange={onChange} />
                      {utils.showError('password', errors)}
                    </div>

                    {errors['errConnexion'] != null ? (
                        <Errors errors={errors['errConnexion']} />
                    ) : null}

                    <div className="d-grid my-3">
                        <Button title="Connexion" isLoading={loading} />
                    </div>

                    <p className="m-0 text-center">- OR -</p>

                    <p className="m-0 mt-3 text-center">
                        <a className="text-primary text-decoration-none" href="#" onClick={() => setTypeLink("forgot-password")}>Mot de passe oublié</a>
                    </p>
                    <p className="m-0 mb-2 text-center">
                        <a className="text-primary text-decoration-none" href="#" onClick={() => setTypeLink("register")}>Créez votre compte</a>
                    </p>
                </form>
            ) : typeLink === "register" ? (
                <Auth
                    type={typeLink}
                />
            ) : typeLink === "forgot-password" ? (
                <Auth
                    type={typeLink}
                />
            ) : null}
        </div>
    );
};

export default Login;

// register(
//     Login,
//     "login-form",
//     []
// );