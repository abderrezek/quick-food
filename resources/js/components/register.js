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
import Auth from "./Auth";

const Register = ({ intended }) => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirm_password: "",
        agree: false
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [typeLink, setTypeLink] = useState("register");

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);
        if (ValidateChanmps(data)) {
            setErrors({});
            let loginForm = {
                _method: "POST",
                name: data.name,
                phone: data.phone,
                email: data.email,
                password: data.password,
                password_confirmation: data.confirm_password
                // agree: data.agree
            };
            axios.post(route('register', undefined, undefined, Ziggy), loginForm)
                .then(res => {
                    setSuccess(true);
                    console.log(res);
                    // setErrors({ errConnexion : "Trop de demandes" });
                    if (intended === route('checkout.index', undefined, undefined, Ziggy)) {
                        window.location.href = route('checkout.index', undefined, undefined, Ziggy);
                    } else {
                        window.location.href = route('site.index', undefined, undefined, Ziggy);
                    }
                })
                .catch(err => {
                    if (err.response && "errors" in err.response.data) {
                        if ("email" in err.response.data.errors) {
                            setErrors({ errConnexion : err.response.data.errors.email });
                        }
                    }
                    setSuccess(false);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    const ValidateChanmps = (data) => {
        let errExist = false;
        let { name, phone, email, password, confirm_password, agree } = data;
        // name
        if (name === "") {
            setErrors(errs => ({...errs, name: "Name is required"}));
            setLoading(false);
            errExist = true;
        }
        // phone
        if (phone === "") {
            setErrors(errs => ({...errs, phone: "Phone is required"}));
            setLoading(false);
            errExist = true;
        }
        if (phone !== "" && !validate.IsPhone(phone)) {
            setErrors(errs => ({...errs, phone: "Phone not valid"}));
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
        // agree
        if (!agree) {
            setErrors(errs => ({...errs, agree: "you must agree"}));
            setLoading(false);
            errExist = true;
        }
        return !errExist;
    };

    const onChange = (e) => setData(state => ({ ...state, [e.target.name]: e.target.value }));

    return (
        <div>
            {typeLink === "register" ? (
                !success ? (
                    <form className="needs-validation" method="post" action={route('register', undefined, undefined, Ziggy)} onSubmit={onSubmit}>
                        <Method name="POST" />

                        {/* Name */}
                        <div className="mb-2">
                          <label for="nameR" className="form-label">Name</label>
                          <input type="text" name="name" className={utils.classError('name', errors)} id="nameR" onChange={onChange} />
                          {utils.showError('name', errors)}
                        </div>

                        {/* Phone */}
                        <div className="mb-2">
                          <label for="phoneR" className="form-label">Phone</label>
                          <input type="text" name="phone" className={utils.classError('phone', errors)} id="phoneR" onChange={onChange} />
                          {utils.showError('phone', errors)}
                        </div>

                        {/* E-mail */}
                        <div className="mb-2">
                          <label for="emailR" className="form-label">E-mail</label>
                          <input type="email" name="email" className={utils.classError('email', errors)} id="emailR" onChange={onChange} />
                          {utils.showError('email', errors)}
                        </div>

                        {/* Password */}
                        <div className="mb-2">
                          <label for="passwordR" className="form-label">Mot de passe</label>
                          <input type="password" name="password" className={utils.classError('password', errors)} id="passwordR" onChange={onChange} />
                          {utils.showError('password', errors)}
                        </div>

                        {/* Password confirmation */}
                        <div className="mb-2">
                          <label for="confirmPasswordR" className="form-label">Confirmez le mot de passe</label>
                          <input type="password" name="confirm_password" className={utils.classError('confirm_password', errors)} id="confirmPasswordR" onChange={onChange} />
                          {utils.showError('confirm_password', errors)}
                        </div>

                        <div className="form-check mb-2">
                          <input className={utils.classErrorCheckBox('agree', errors)} name="agree" type="checkbox" value="true" id="agreeR" onChange={onChange} />
                          <label className="form-check-label" for="agreeR">
                            J'accepte de recevoir des informations commerciales à l'adresse e-mail indiquée (pas obligatoire)
                          </label>
                          {utils.showError('agree', errors)}
                        </div>

                        {errors['errConnexion'] != null ? (
                            <Errors errors={errors['errConnexion']} />
                        ) : null}

                        <div className="d-grid my-3">
                            <Button title="Terminer l'inscription" isLoading={loading} />
                        </div>

                        <p className="m-0 text-center">- OR -</p>

                        <p className="m-0 mb-2 text-center">
                            Vous avez déjà un compte?{" "}
                            <a className="text-primary text-decoration-none" href="#" onClick={() => setTypeLink("login")}>Connexion</a>
                        </p>
                    </form>
                ) : (
                    <Success
                        responces="Check your e-mail. We have send you an activation link.If you do not receive the message within a few minutes, please check your spam folder and or correct your email address."
                    />
                )
            ) : typeLink === "login" ? (
                <Auth
                    type={typeLink}
                />
            ) : null}
        </div>
    );
};

export default Register;

// register(
//     Register,
//     "register-form",
//     []
// );