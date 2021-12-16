import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Inertia } from '@inertiajs/inertia'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Offcanvas } from "react-bootstrap";

import { ModalLogout } from "../components/Modals";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default function Layout ({ children }) {
    const { appName, user } = usePage().props;
    const [showLogout, setShowLogout] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [width, height] = useWindowSize();

    // Show/Hide Sidebar responsive
    useEffect(() => {
        if (width >= 992) {
            setShowSidebar(true);
        } else {
            setShowSidebar(false);
        }
    }, [width]);
    const marginLeftMain = { marginLeft: showSidebar ? 270 : 0 };

    // Show/Hide Modal Logout
    const closeLogoutModal = () => setShowLogout(false);
    const showLogoutModal = () => setShowLogout(true);

    // Show/Hide Sidebar
    const closeSidebar = () => setShowSidebar(false);
    const togglerSidebar = () => setShowSidebar((s) =>  !s);

    return (
        <div className="h-100">
            {/* Navbar */}
            <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
                <div className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand as={Link} className="col-md-3 col-lg-2 me-0 ps-3 pe-5" href={route('admin.index')}>{appName}</Navbar.Brand>

                    <Button variant="dark" className="ms-1" onClick={togglerSidebar}>
                        <i className="fas fa-bars"></i>
                    </Button>
                </div>

                <Navbar.Toggle className="me-2" aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto px-3">
                        {/* search */}
                        <Form className="d-flex me-md-2 my-2 my-lg-0">
                            <FormControl
                                type="search"
                                placeholder="Rechercher ici..."
                                className="mr-2 rounded-0"
                                aria-label="Rechercher ici"
                            />
                            <Button variant="primary" className="rounded-0">
                                <i className="fas fa-search"></i>
                            </Button>
                        </Form>

                        <Nav.Link href={route('site.index')}>Accueil</Nav.Link>

                        <NavDropdown title={user.name} id="basic-nav-dropdown" menuVariant="dark" align="end">
                            <NavDropdown.Item href="#">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={showLogoutModal}>Se déconnecter</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* Sidebar */}
            <Offcanvas className="sidebar-nav bg-dark text-white" show={showSidebar} onHide={closeSidebar} backdrop={false} scroll={true}>
                <Offcanvas.Header>
                    <Button variant="dark" bg="dark" className="ms-auto" onClick={closeSidebar}>
                        <i className="fas fa-times"></i>
                    </Button>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Nav defaultActiveKey={route('admin.index')} className="flex-column">
                        <Nav.Item>
                            <Nav.Link as={Link} href={route('admin.index')}>
                                <i data-feather="home"></i>
                                Tableau de bord
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} href={route('admin.plats.index')}>
                                <i data-feather="home"></i>
                                Plats
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
            {/* Content */}
            <main className="h-100 content px-2" style={marginLeftMain}>{children}</main>

            <ModalLogout show={showLogout} onClose={closeLogoutModal} />
        </div>
    );
}