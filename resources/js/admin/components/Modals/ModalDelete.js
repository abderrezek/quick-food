import React from "react";
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import { Button } from "react-bootstrap";

import ModalDefault from "./ModalDefault";

const ModalDelete = ({ show, onClose, title, link, msg }) => {
  const handleClick = () => {
    Inertia.delete(link, {
      onFinish: visit => {
        onClose();
      },
    });
  };

  return (
    <ModalDefault
      show={show}
      onClose={onClose}
      title={title}
      footer={
        <Button type="button" onClick={handleClick} className="btn btn-danger">Supprimer</Button>
      }
    >
      {msg}
    </ModalDefault>
  );
}

export default ModalDelete;