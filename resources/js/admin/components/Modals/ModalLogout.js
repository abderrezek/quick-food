import React from "react";
import { Link } from '@inertiajs/inertia-react';

import ModalDefault from "./ModalDefault";

const ModalLogout = ({ show, onClose }) => (
  <ModalDefault
    show={show}
    onClose={onClose}
    title="Modal Se déconnecter"
    footer={
      <Link href={route('admin.logout')} method="post" as="button" type="button" className="btn btn-primary">
        Se déconnecter
      </Link>
    }
  >
    Voulez-vous quitter le programme
  </ModalDefault>
);

export default ModalLogout