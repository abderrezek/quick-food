import React, { useState, useRef } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import cls from "classnames";

const Picture = ({ img, setImg }) => {
    const [file, setFile] = useState('');
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setLoading(true);
        let reader = new FileReader();
        let img = e.target.files[0];
        reader.onloadend = () => {
          setFile(img);
          setImagePreviewUrl(reader.result);
        }
        reader.readAsDataURL(img);
        setImg(img);
        setLoading(false);
    };

    return (
        <div className="uploader">
            <input id="file-upload" type="file" src={imagePreviewUrl} accept="image/*" onChange={handleClick} />

            <label htmlFor="file-upload" id="file-drag">
                <img id="file-image" // {imagePreviewUrl !== '' ? '' : 'hidden'}
                    src={img !== '' ? URL.createObjectURL(img) : '#'}
                    alt="Preview" className={cls({ 'hidden' : imagePreviewUrl === '' })} />

                <div id="start" className={cls({ 'hidden' : imagePreviewUrl !== '' })}>
                    <i className="fa fa-download" aria-hidden="true"></i>
                    <div>Sélectionnez une image ou faites glisser ici</div>
                    <div id="notimage" className={cls({ 'hidden' : imagePreviewUrl === '' })}>
                        Veuillez sélectionner une image
                    </div>
                    <span id="file-upload-btn" className="btn btn-primary">Sélectionner un fichier</span>
                </div>

                <div id="response" className={cls({ 'hidden' : imagePreviewUrl === '' })}>
                    <div id="messages">{img !== '' ? img.name : ''}</div>
                </div>
            </label>
            {/*<Form.Group controlId="imgUpload" className="mb-3">
                <Form.Label>Sélectionner un image</Form.Label>
                <Form.Control type="file" src={imagePreviewUrl} onChange={handleChange} />
            </Form.Group>
            <div className="img-preview mx-auto d-block" style={{ backgroundColor: imagePreviewUrl ? '#fff' : '#ccc' }}>
                {imagePreviewUrl ? (
                    <img src={imagePreviewUrl} className="rounded" alt={`mage of ${imagePreviewUrl}`} />
                ) : (
                    <p>Veuillez sélectionner une image pour l'aperçu</p>
                )}
                {loading ? (
                    <div className="text-center my-5">
                        <Spinner animation="border" role="status" size="lg">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : null}
            </div>*/}
        </div>
    );
};

export default Picture;