import React from 'react'
import { Alert } from "react-bootstrap"

const AlertDefault = ({ type, onClose, children }) => (
    <Alert variant={type} onClose={onClose} dismissible>{children}</Alert>
);

export default AlertDefault;