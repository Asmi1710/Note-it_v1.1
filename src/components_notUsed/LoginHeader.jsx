import React, {useState} from "react";
import Navbar from 'react-bootstrap/Navbar';
import {Container} from 'react-bootstrap';
import logoImg from "./Logo.png";

function LoginHeader (props){

    const [time,updateTime]= useState(new Date().toLocaleTimeString());

    function updating(){
        let newTime = new Date().toLocaleTimeString();
        let date = new Date().toLocaleDateString();
        updateTime(newTime);   
    }
    setInterval (updating,1000);

    return (
        <Navbar className="navbar" bg="light" variant="light">
        <Container className="navbarContainer">
        <Navbar.Brand className="title-note-it" href="#home" fontSize="2.2rem">
            <img
            alt=""
            src= {logoImg}
            width="55"
            height="55"
            className="navbar-brand-login"
            // className="d-inline align-top"
            />
        note-it
        </Navbar.Brand>
        </Container>
        </Navbar>
      );
}

export default LoginHeader;