import { h } from "preact";
import { useState } from "preact/hooks"
import register from "preact-custom-element";

import { Button } from "../ui/Button.js";
import Csrf from "../ui/Csrf.js";
import { Success } from '../ui/Alert';
import Method from "../ui/Method.js";
import { validate, utils } from "../utils";

const Contact = ({ action }) => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: ""
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
            let contactForm = {
                // _token: csrf,
                _method: "POST",
                name: data.name,
                email: data.email,
                phone: data.phoneNumber,
                subject: data.subject,
                message: data.message
            };
            axios.post(action, contactForm)
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
        let {name, email, phoneNumber, subject, message} = data;
        // name
        if (name === "") {
            setErrors(errs => ({...errs, name: "Name is required"}));
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
        if (phoneNumber === "") {
            setErrors(errs => ({...errs, phoneNumber: "Phone is required"}));
            setLoading(false);
            errExist = true;
        }
        if (phoneNumber !== "" && !validate.IsPhone(phoneNumber)) {
            setErrors(errs => ({...errs, phoneNumber: "Phone not valid"}));
            setLoading(false);
            errExist = true;
        }
        // subject
        if (subject === "") {
            setErrors(errs => ({...errs, subject: "Subject is required"}));
            setLoading(false);
            errExist = true;
        }
        // message
        if (message === "") {
            setErrors(errs => ({...errs, message: "Message is required"}));
            setLoading(false);
            errExist = true;
        }
        return !errExist;
    };

    const onChange = (e) => setData(state => ({ ...state, [e.target.name]: e.target.value }));

    return (
        <div>
            {success ? (
                <Success
                    responces={successMsg}
                />
            ) : (
                <form className="needs-validation" method="post" action={action} onSubmit={onSubmit}>
                    {/* <Csrf value={csrf} /> */}
                    <Method name="POST" />

                    <div className="my-2">
                        <input
                            type="text"
                            className={utils.classError('name', errors)}
                            placeholder="Name *"
                            name="name"
                            onChange={onChange}
                        />
                        {utils.showError('name', errors)}
                    </div>
                    <div className="my-2">
                        <input
                            type="email"
                            className={utils.classError('email', errors)}
                            placeholder="E-mail *"
                            name="email"
                            onChange={onChange}
                        />
                        {utils.showError('email', errors)}
                    </div>
                    <div className="my-2">
                        <input
                            type="text"
                            className={utils.classError('phoneNumber', errors)}
                            placeholder="Phone *"
                            name="phoneNumber"
                            onChange={onChange}
                        />
                        {utils.showError('phoneNumber', errors)}
                    </div>
                    <div className="my-2">
                        <input
                            type="text"
                            className={utils.classError('subject', errors)}
                            placeholder="Subject *"
                            name="subject"
                            onChange={onChange}
                        />
                        {utils.showError('subject', errors)}
                    </div>
                    <div className="my-2">
                        <textarea
                            className={utils.classError('message', errors)}
                            placeholder="Message *"
                            rows="3"
                            name="message"
                            onChange={onChange}
                        >
                        </textarea>
                        {utils.showError('message', errors)}
                    </div>
                    <div className="my-4">
                        <Button
                            title="Send Message"
                            isLoading={loading}
                        />
                    </div>
                </form>
            )}
        </div>
    );
};

export default Contact;

register(
    Contact,
    "contact-form",
    []
);