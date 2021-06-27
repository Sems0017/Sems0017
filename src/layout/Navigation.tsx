import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export interface NavigationProps { }

const Navigation: React.FC<NavigationProps> = () => {
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/">Clinic Case</Navbar.Brand>
                <Navbar.Toggle aria-controls="top-navigation" />
                <Navbar.Collapse id="top-navigation">
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="/patients">Patients</Nav.Link>
                        </Nav.Item>
                       


                        <Nav.Item>
                            <Nav.Link as={NavLink} to="/doctors">Doctors</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="/appoiontments">Appointments</Nav.Link>
                        </Nav.Item>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;
