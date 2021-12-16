import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import cls from "classnames";

import { ModalLogout } from "../components/Modals";

export default function Dashboard ({ children }) {
    const { appName, user } = usePage().props;
    const [showLogout, setShowLogout] = useState(false);

    // Show/Hide Modal Logout
    const closeLogoutModal = () => setShowLogout(false);
    const showLogoutModal = () => setShowLogout(true);

    const active = (r) => ({ 'active': route().current(r) });

    return (
        <div className="h-100">
            {/* Navbar */}
            <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
                <Navbar.Brand as={Link} className="me-0 px-3" href={route('admin.index')}>{appName}</Navbar.Brand>

                <Navbar.Toggle className="me-2" aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mz-auto px-3">
                        <Nav.Link as={Link} href={route('admin.index')}
                            className={cls(active('admin.index'))}>Tableau du board</Nav.Link>

                        <Nav.Link as={Link} href={route('admin.plats.index')}
                            className={cls(active('admin.plats.index'))}>Plats</Nav.Link>

                        <Nav.Link as={Link} href={route('admin.ingredients.index')}
                            className={cls(active('admin.ingredients.index'))}>Ingredients</Nav.Link>
                    </Nav>

                    <Nav className="ms-auto px-3">
                        <Nav.Link href={route('site.index')}>Accueil</Nav.Link>

                        <NavDropdown title={user.name} id="basic-nav-dropdown" menuVariant="dark" align="end">
                            <NavDropdown.Item href="#">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={showLogoutModal}>Se déconnecter</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* Content */}
            <Container className="content">{children}</Container>

            <ModalLogout show={showLogout} onClose={closeLogoutModal} />
        </div>
    );
}