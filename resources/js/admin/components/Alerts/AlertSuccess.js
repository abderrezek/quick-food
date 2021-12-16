import React from 'react'

import AlertDefault from "./AlertDefault";

const AlertSuccess = ({ onClose, children }) => (
    <AlertDefault type="success" onClose={onClose}>{children}</AlertDefault>
);

export default AlertSuccess;