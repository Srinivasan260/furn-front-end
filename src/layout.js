import React, { useEffect } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './home.css'

import logo from './images/logo.jpg';


import Button from 'react-bootstrap/Button';


function Layout() {
      
    const auth = localStorage.getItem('user')
    const navigate = useNavigate()

    useEffect (()=>{

        console.log(auth)

    },[])


    const logout = () => {
        localStorage.clear()
        navigate('/')
      }
    
    return (
        <div className='layout'>
            <nav>

            
            <Navbar bg="primary" variant="dark">
                <Container className="cont-layout">
                
     
                    <Navbar.Brand ><h4 id="furniture"> <img src={logo} className="img1" /> &nbsp; &nbsp;<b className='SR-nav'>SR </b>Furnitures</h4></Navbar.Brand>
                    <Nav className="nav-layout">
                    <Nav.Link href="/">Home</Nav.Link>&nbsp;&nbsp;&nbsp;
                        <Nav.Link href="/about">About</Nav.Link>&nbsp;&nbsp;&nbsp;
                        <Nav.Link href="product"> Products</Nav.Link>&nbsp;&nbsp;&nbsp;
                        <Nav.Link href="/help">Help</Nav.Link>&nbsp;&nbsp;
                        <Nav.Link href="/Orders">Orders</Nav.Link>
                    </Nav> <Nav className="nav-layout-2">
                     {  auth ?<> <Link to="/login"><Button type="submit" variant="light" className='btn-home-login' onClick={logout}> Logout</Button></Link> &nbsp;<i class="bi bi-person-circle" id="acc"></i> <h6 className='auth-name'>{JSON.parse(auth).firstname}</h6> </> : <> <Link to="/login"><Button type="submit" variant="light" className='btn-home-login'> Login</Button></Link> &nbsp;&nbsp;
                        <Link to="/signup"><Button type="submit" variant="light"  className='btn-home-login'> Signup</Button></Link></>}
                      
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