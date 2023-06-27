import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './home.css'

import logo from './images/logo.jpg';
import Offcanvas from 'react-bootstrap/Offcanvas';


import Button from 'react-bootstrap/Button';


function Layout() {
      
    const auth = localStorage.getItem('user')
    const navigate = useNavigate()

    // off canvas
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);  // we are first setting false and then true
  const handleShow = () => setShow(true);


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
                    <Link to="/" className='link-layout'>Home</Link>&nbsp;&nbsp;&nbsp;
                        <Link to="/about" className='link-layout'>About</Link>&nbsp;&nbsp;&nbsp;
                        <Link to="/product" className='link-layout'> Products</Link>&nbsp;&nbsp;&nbsp;
                        <Link to="/help" className='link-layout'>Help</Link>&nbsp;&nbsp;
                        <Link to="/Orders" className='link-layout'>Orders</Link>
                    </Nav> <Nav className="nav-layout-2">
                     {  auth ?<> <Link to="/login"><Button type="submit" variant="light" className='btn-home-login' onClick={logout}> Logout</Button></Link> &nbsp;&nbsp;<i class="bi bi-person-circle" id="acc" onClick={handleShow} ></i>&nbsp; <h6 className='auth-name'> &nbsp;{JSON.parse(auth).firstname}</h6> </>
                      : <> <Link to="/login"><Button type="submit" variant="light" className='btn-home-login'> Login</Button></Link> &nbsp;&nbsp;
                        <Link to="/signup"><Button type="submit" variant="light"  className='btn-home-login'> Signup</Button></Link></>}
                      
                    <br/><br/>
                    </Nav>
                </Container>
            </Navbar>


            </nav>
            
      <Outlet />


      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='acc-details'>

            <i class="bi bi-person-circle" id="acc-icon" ></i>  <h4 className='auth-account'> &nbsp;{JSON.parse(auth).firstname}</h4>
            <hr></hr>
            <h5 className='personal-info'>&nbsp; <i class="bi bi-info-circle"></i><Link to="/personal-info" className='link-lay'>&nbsp;Personal Information</Link></h5>

            <h5 className='setting-info'> &nbsp; <i class="bi bi-gear-fill"></i>&nbsp;<Link to="/settings" className='link-lay'> Settings</Link></h5>





            {/* <footer class="row-fixed bottom"> */}
            <footer className="off-canvas-footer">
        {/* Your footer content */}
     
              <div className="off-canvas-container">
                <p className='footer-h6'>Privacy policy &nbsp; &nbsp; &nbsp;Refund Policy  &nbsp;&nbsp; &nbsp; Terms & Conditions </p>
               <hr></hr>
               <p className='footer-h5'>Follow us   &nbsp;&nbsp;<i class="bi bi-instagram"></i>&nbsp; <i class="bi bi-facebook"></i> &nbsp;<i class="bi bi-twitter"></i></p>
              </div>
            {/* </footer> */}

            </footer>
        
  

          </div>
        </Offcanvas.Body>
      
      </Offcanvas>
        </div>
    )
}

export default Layout