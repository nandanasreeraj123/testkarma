import React from "react";
import "./header.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Headers() {
    
    
  return (
      <div className="headcol">
    <div className="he"><div className="foods">
    <p>Foodhut</p></div>
        <div><Navbar expand="lg" >
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav>
      <Nav.Link href="/" className="linking">Home</Nav.Link>
      <Nav.Link href="/dishes" className="linking">Restaurant List</Nav.Link>
      <Nav.Link href="/details" className="linking">Restaurant</Nav.Link>
      <Nav.Link href="/cart"className="linking">Cart</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
      </div></div>
   
    </div>);}

