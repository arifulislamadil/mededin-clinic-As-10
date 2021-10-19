import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Header = () => {
    const { handleLogout, user } = useFirebase();
    return (
        <div>
            <div className="sticky-top bg-light">
                <div className="container ">
                    <Navbar bg="" expand="lg" >
                        <Container fluid>
                            <Navbar.Brand to="/home" className="header-logo  text-danger text-uppercase">
                                <Link to="/logo">
                                    <img src="https://demo.web3canvas.com/themeforest/medenin/images/logo.png" alt="" />
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll" className="text-center">
                                <Nav
                                    className="ms-auto my-2 my-lg-0 "
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll >
                                    <NavLink className="me-2 text-decoration-none link-style"
                                        to="/home"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "red"
                                        }}
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink className="me-2 text-decoration-none link-style"
                                        to="/about"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "#acdfbd"
                                        }}
                                    >
                                        About
                                    </NavLink>

                                    <NavLink className="me-2 text-decoration-none link-style"
                                        to="/services"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "red"
                                        }}
                                    >
                                        Services
                                    </NavLink>
                                    <NavLink className="me-2 text-decoration-none link-style"
                                        to="/team"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "red"
                                        }}
                                    >
                                        Team
                                    </NavLink>
                                    <NavLink className="me-2 text-decoration-none link-style"
                                        to="/blog"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "red"
                                        }}
                                    >
                                        Blog
                                    </NavLink>
                                    <NavLink className="me-2 text-decoration-none link-style"
                                        to="/contact"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "red"
                                        }}
                                    >
                                        Contact
                                    </NavLink>

                                    <NavLink className="me-2 text-decoration-none link-style"
                                        to="/register"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "red"
                                        }}
                                    >
                                        Register

                                    </NavLink>

                                    {user.email ? <NavLink onClick={handleLogout} className="me-2 text-decoration-none link-style"
                                        to="/"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "red"
                                        }}
                                    >
                                        Logout

                                    </NavLink>
                                        :
                                        <NavLink className="me-2 text-decoration-none link-style"
                                            to="/login"
                                            activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                            }}
                                        >
                                            Signin

                                        </NavLink>}


                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </div>
    )

};

export default Header;