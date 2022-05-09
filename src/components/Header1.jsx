import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Navbar from 'react-bootstrap/Navbar';
import {Container, NavDropdown} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'
import logoImg from "./Logo.png";

function Header1 (){

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
        <Navbar.Brand className="navbar-brand" href="#home" fontSize="2.2rem">
            <img
            alt=""
            src= {logoImg}
            width="55"
            height="55"
            className="d-inline-block align-top"
            />
        note-it
        </Navbar.Brand>
        <button className="newProject"><AddIcon />Add Project</button>
        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Settings</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Logout
          </NavDropdown.Item>
        </NavDropdown> */}
        <div>
    
                <h4 className="userPic">AS</h4>
            
            <Dropdown className="dropdown">
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Settings</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
        </Container>
        </Navbar>
      );
}

export default Header1;