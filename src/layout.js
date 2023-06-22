import React from 'react';
import { Outlet, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './home.css'

import logo from './images/logo.jpg';


import Button from 'react-bootstrap/Button';


function Layout() {
   
    return (
        <div className='layout'>
            <nav>

            
            <Navbar bg="primary" variant="dark">
                <Container className="cont-layout">
                
     
                    <Navbar.Brand ><h4 id="furniture"> <img src={logo} className="img1" /> &nbsp; &nbsp;<b className='SR-nav'>SR </b>Furnitures</h4></Navbar.Brand>
                    <Nav className="nav-layout">
                    <Nav.Link href="/">Home</Nav.Link>&nbsp;&nbsp;&nbsp;
                        <Nav.Link href="/a">About</Nav.Link>&nbsp;&nbsp;&nbsp;
                        <Nav.Link href="product"> Products</Nav.Link>&nbsp;&nbsp;&nbsp;
                        <Nav.Link href="/sk">Help</Nav.Link>&nbsp;&nbsp;
                        <Nav.Link href="/Orders">Pricing</Nav.Link>
                    </Nav> <Nav className="nav-layout-2">
                        <Link to="/login"><Button type="submit" variant="light" className='btn-home-login'> Login</Button></Link> &nbsp;&nbsp;
                        <Link to="/signup"><Button type="submit" variant="light"  className='btn-home-login'> Signup</Button></Link>
                      
                    <br/><br/>
                    </Nav>
                </Container>
            </Navbar>


            </nav>
            
      <Outlet />
        </div>
    )
}

export default Layout