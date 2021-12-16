import React from 'react'

import AlertDefault from "./AlertDefault";

const AlertDanger = ({ onClose, children }) => (
    <AlertDefault type="danger" onClose={onClose}>{children}</AlertDefault>
);

export default AlertDanger;