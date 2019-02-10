import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';



const Navigation = () => {
    return (
        
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <NavLink to="/">Hjem</NavLink>
            <NavLink to="/About">Om Adventure Time</NavLink>
            <NavLink to="/Activities">Aktiviteter</NavLink>
            <NavLink to="/Contact">Kontakt</NavLink>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
                
    );
}

export default Navigation;