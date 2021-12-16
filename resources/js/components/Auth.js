import { h } from "preact";
import register from "preact-custom-element";

import Login from "./login";
import Register from "./register";
import ForgotPassword from "./ForgotPassword";
// import Modal from "../ui/Modal.js";

const Auth = ({ type, intended }) => {


    return (
        <div>
            {type === "login" ? (
                <Login intended={intended} />
            ) : type === "register" ? (
                <Register intended={intended} />
            ) : type === "forgot-password" ? (
                <ForgotPassword />
            ) : null}
        </div>
    );
};

export default Auth;

register(
    Auth,
    "auth-form",
    []
);