import React, { useContext } from "react";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import routes from '../constants/routes';
import protectedRoutes from '../constants/protectedRoutes';
import { AuthContext } from "../App";


function HeaderComponent () {
    const {isLoggedIn} = useContext(AuthContext);
    return(
        <>
                <nav>
                    <Navbar  bg="dark" variant="dark" expand="lg" >
                    <Navbar.Brand><Button variant="secondary">
                                        <NavLink
                                            to="/home"
                                            style={{
                                                fontWeight: "bold",
                                                color: "white"
                                                }       
                                        }>
                                            AutoSay
                                        </NavLink></Button></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="justify-content-end">
                            {isLoggedIn && protectedRoutes.header.map((route, i) => 
                                (
                                    <Nav className="justify-content-end">
                                        <NavLink
                                            to={route.path}
                                            style={{
                                                fontWeight: "bold",
                                                color: "grey"
                                                }       
                                        }>
                                            {route.name}
                                        </NavLink>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </Nav>
                                )
                            )}                            
                        </Nav>
                        {!isLoggedIn &&
                            routes.header.map((route, i) => (
                                <Nav className="justify-content-end">
                                    <NavLink to={route.path}   
                                        style={{
                                        fontWeight: "bold",
                                        color: "grey"
                                        }       
                                    }>
                                        {route.name}
                                    </NavLink  >
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Nav>
                            ))
                        }
                    </Navbar.Collapse>
                    </Navbar>
                </nav>
        </>
    );
}

export default HeaderComponent;