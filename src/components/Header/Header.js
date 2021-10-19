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
                                <Link to="/">
                                    <img src="https://demo.web3canvas.com/themeforest/medenin/images/logo.png" alt="" />
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll" className="text-center">
                                <Nav
                                    className="ms-auto my-2 my-lg-0 "
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll >
                                    <NavLink className="me-2 text-dark text-decoration-none link-style"
                                        to="/home"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: " #3bf178"
                                        }}
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink className="me-2 text-dark text-decoration-none link-style"
                                        to="/about"
                                        activeStyle={{
                                            fontWeight: "bolder",
                                            color: " #3bf178"
                                        }}
                                    >
                                        About
                                    </NavLink>

                                    <NavLink className="me-2 text-dark  text-decoration-none link-style"
                                        to="/services"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: " #3bf178"
                                        }}
                                    >
                                        Services
                                    </NavLink>
                                    <NavLink className="me-2 text-dark  text-decoration-none link-style"
                                        to="/team"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: " #3bf178"

                                        }}
                                    >
                                        Team
                                    </NavLink>
                                    <NavLink className="me-2 text-dark  text-decoration-none link-style"
                                        to="/blog"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: " #3bf178"
                                        }}
                                    >
                                        Blog
                                    </NavLink>
                                    <NavLink className="me-2 text-dark  text-decoration-none link-style"
                                        to="/contact"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: " #3bf178"
                                        }}
                                    >
                                        Contact
                                    </NavLink>

                                    {user.email ?
                                        <span className="text-white me-1 btn btn-dark pt-1 pb-1 bs-2 be-2 text-decoration-none link-style">{user.displayName}</span> :

                                        <NavLink className="me-2 text-dark  text-decoration-none link-style"
                                            to="/register"
                                            activeStyle={{
                                                fontWeight: "bold",
                                                color: " #3bf178"
                                            }}
                                        >
                                            Register
                                        </NavLink>}


                                    {user.email ? <NavLink onClick={handleLogout} className="me-2 btn btn-success pt-1 pb-1 bs-2 be-2 text-decoration-none link-style"
                                        to="/">
                                        Logout

                                    </NavLink>
                                        :
                                        <NavLink className="me-2 btn btn-success pt-1 pb-1 bs-2 be-2 text-decoration-none link-style"
                                            to="/login">
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