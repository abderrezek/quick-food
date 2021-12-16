import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalDefault = ({ show, onClose, animation=false, title, children, footer }) => (
    <Modal show={show} onHide={onClose} animation={animation}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{children}</Modal.Body>

      {footer && (
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Fermer
          </Button>
          {footer}
        </Modal.Footer>
      )}
    </Modal>
);

export default ModalDefault