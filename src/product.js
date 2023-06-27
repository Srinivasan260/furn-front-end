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
          <Link to="/product" className='product-link'>Sofas</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/product/chair" className='product-link'>chair</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/product/bed" className='product-link'>bed</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/product/dinning" className='product-link'>Dinning</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/product/dresser" className='product-link'>Dresser</Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Product