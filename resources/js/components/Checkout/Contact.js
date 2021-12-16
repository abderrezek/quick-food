import { h } from "preact";
import { useState } from "preact/hooks";

const Contact = ({ setData, errors }) => {
    const [form, setForm] = useState({
        prenom: '',
        nom: '',
        telephone: '',
        email: '',
        comment: '',
    });
    const [open, setOpen] = useState(false);

    const labelClick = () => setOpen(prevState => !prevState);

    // const onChange = (e) => setOpen(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    const onChange = (e) => setData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

    const cls = (name) => `form-control ${errors && name in errors?'is-invalid':''}`;

    const showErrors = (errMsg, name) => errors && name in errors && (
        <div className="invalid-feedback">{errMsg}</div>
    );

    return (
        <div className="my-3">
            <h5 className="text-uppercase">CONTACT</h5>
            <div className="row">
                <div className="col mb-3">
                  <label htmlFor="prenomId" className="form-label">Prénom *</label>
                  <input type="text" className={cls('prenom')} id="prenomId" name="prenom" onChange={onChange} />
                  {showErrors(errors.prenom, 'prenom')}
                </div>
                <div className="col mb-3">
                  <label htmlFor="nomId" className="form-label">Nom *</label>
                  <input type="text" className={cls('nom')} id="nomId" name="nom" onChange={onChange} />
                  {showErrors(errors.nom, 'nom')}
                </div>
            </div>

            <div className="row">
                <div className="col mb-3">
                  <label htmlFor="phoneId" className="form-label">Téléphone *</label>
                  <input type="text" className={cls('telephone')} id="phoneId" name="telephone" onChange={onChange} />
                  {showErrors(errors.telephone, 'telephone')}
                </div>
                <div className="col mb-3">
                  <label htmlFor="emailId" className="form-label">E-mail *</label>
                  <input type="email" className={cls('email')} id="emailId" name="email" onChange={onChange} />
                  {showErrors(errors.email, 'email')}
                </div>
            </div>

            <div className="mb-3">
                <label onClick={labelClick} htmlFor="addCommentOrderId" className="form-label" style={{ cursor: 'pointer' }}>
                    {open ? (
                        <span>-{/*<i className="fas fa-minus-square"></i>*/}</span>
                    ) : (
                        <span>+{/*<i className="fas fa-plus-square"></i>*/}</span>
                    )}{' '}Ajouter un commentaire à la commande
                </label>
                {open ? (
                    <textarea className={cls('comment')} id="addCommentOrderId" rows="3" name="comment" onChange={onChange}></textarea>
                ) : null}
            </div>
        </div>
    );
};

export default Contact;