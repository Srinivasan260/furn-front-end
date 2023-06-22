import React from 'react'
import './product.css'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
// import { Link as RouterLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Product() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className='product-cont'>
          <Nav>
          <Nav.Link href="/product">Home</Nav.Link>&nbsp;&nbsp;&nbsp;
          <Nav.Link href="/product/chair">chair</Nav.Link>&nbsp;&nbsp;&nbsp;
          <Nav.Link href="/product/bed">bed</Nav.Link>&nbsp;&nbsp;&nbsp;
          <Nav.Link href="/product/dinning">Dinning</Nav.Link>&nbsp;&nbsp;&nbsp;
          <Nav.Link href="/product/dresser">Dresser</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Product