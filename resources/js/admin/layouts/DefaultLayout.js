import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";

import { ModalLogout } from "../components/Modals";

export default function DefaultLayout ({ children }) {
  const [show, setShow] = useState(false);
  const { appName, user } = usePage().props;

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" sticky="top" className="flex-md-nowrap shadow p-0">
        <Navbar.Brand as={Link} className="col-md-3 col-lg-2 me-0 px-3" href={route('admin.index')}>{appName}</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav"  />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto px-3">
            <Nav.Link href={route('site.index')}>Accueil</Nav.Link>

            <NavDropdown title={user.name} id="basic-nav-dropdown" menuVariant="dark" align="end">
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => setShow(true)}>
                Se déconnecter
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Container fluid */}
      <Container fluid>
        <Row>
          {/* sidebar */}
          <Col md="3" lg="2" className="d-md-block bg-light sidebar">
            <div className="position-sticky pt-3">
              <Nav className="flex-column">
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
            </div>
          </Col>

          {/* Content */}
          <Col md="9" lg="10" className="ms-sm-auto px-md-4">
            <div className="pt-3">{children}</div>
          </Col>
        </Row>
      </Container>

      <ModalLogout show={show} onClose={() => setShow(false)} />
    </div>
  )
}
