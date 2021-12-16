import { h } from "preact";
import { useState, useEffect, useCallback } from "preact/hooks"

const Modal = ({ title, show, onClose, footer, children, fullWidth }) => {
    useEffect(() => {
        const closeOnEscapeKeyDown = (e) => {
            if ((e.charCode || e.keyCode) === 27) {
                onClose();
            }
        };

        document.body.addEventListener('keydown', closeOnEscapeKeyDown);
        return () => {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
        };
    });

    if (!show) {
        return null;
    }

    return (
        <div className="modall" onClick={onClose}>
        {/*<div className={`modall ${show ? 'show' : ''}`} onClick={onClose}>*/}
          <div className={`modal__content ${fullWidth ? 'modal__full__width' : ''}`} onClick={e => e.stopPropagation()}>
            {/* Header */}
            <div className={`modal__header ${title ? '' : 'flex-row-reverse'}`}>
                {title ? (
                    <h4 className="modal__title">{title}</h4>
                ) : null}
                <button type="button" className="btn-close" onClick={onClose}></button>
            </div>

            {/* Body */}
            <div className="modal__body">
                {children}
            </div>

            {/* Footer */}
            {footer ? (
                <div className="modal__footer">
                    <button type="button" className="btn btn-primary" onClick={onClose}>Close</button>
                </div>
            ) : null}
          </div>
        </div>
    );
};

export default Modal;