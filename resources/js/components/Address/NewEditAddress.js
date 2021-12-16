import { h } from "preact";
import { useState, useEffect, useRef } from "preact/hooks"
import register from "preact-custom-element";

import { Button } from "../../ui/Button.js";
import { Success, Errors } from '../../ui/Alert';
import Method from "../../ui/Method.js";
import { utils } from "../../utils";
import Modal from "../../ui/Modal.js";

const NewEditAddress = ({ title, action, loadData, data: dataObj, onClose, show }) => {
    const [data, setData] = useState({
        address: ""
    });
    const [slugOld, setSlugOld] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState({});

    useEffect(() => {
        if (dataObj) {
            setData(dataObj);
            setSlugOld(dataObj['slug']);
        }
    }, [dataObj]);

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);
        if (ValidateChanmps(data)) {
            setErrors({});
            let addressForm = {
                _method: "POST",
                address: data.address
            };
            let act = action;
            if (dataObj) {
                addressForm['_method'] = "PUT";
                act += `/${slugOld}`;
            }
            axios.post(act, addressForm)
                .then(res => {
                    console.log(res);
                    setSuccess({ succConnexion : res.data.message });
                    loadData();
                })
                .catch(err => {
                    console.log(err.response);
                    // 429 (Too Many Requests)
                    if (err.response && "message" in err.response.data) {
                        if (err.response.status === 409) {
                            setErrors({ errConnexion : err.response.data.message });
                        }
                    }
                })
                .finally(() => {
                    setLoading(false);
                    // hideModal();
                    // setErrors({});
                    // setSuccess({});
                });
        }
    };

    const ValidateChanmps = (data) => {
        let errExist = false;
        let { address } = data;
        // address
        if (address === "") {
            setErrors(errs => ({...errs, address: "Adresse is required"}));
            setLoading(false);
            errExist = true;
        }
        return !errExist;
    };

    const onChange = (e) => setData(state => ({ ...state, [e.target.name]: e.target.value }));

    return (
        <Modal title={title} onClose={onClose} show={show} footer={false}>
            {loading ? (
            <div class="d-flex justify-content-center">
                <div class="spinner-border m-5" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            ) : (
            <form className="needs-validation" method="post" action={action} onSubmit={onSubmit}>
                <Method name="POST" />

                {/* Address */}
                <div className="mb-2">
                  <label for="address" className="form-label">Adresse</label>
                  <textarea className={utils.classError('address', errors)} name="address" id="address" rows="3"
                  value={data && data['address']} onChange={onChange}></textarea>
                  {utils.showError('address', errors)}
                </div>

                {success && success['succConnexion'] != null ? (
                    <Success responces={success['succConnexion']} />
                ) : null}

                {errors && errors['errConnexion'] != null ? (
                    <Errors errors={errors['errConnexion']} />
                ) : null}

                <div className="d-grid mt-3">
                    <Button title={dataObj ? "Modifier" : "Ajouter"} isLoading={loading} />
                </div>
            </form>
            )}
        </Modal>
    );
};

export default NewEditAddress;