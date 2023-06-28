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

      //for image
      const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; //here we accesing the first line in an array ...if the user selects more than one file it can select the first file
    const reader = new FileReader();   //using  filr reader function to read the file+

    reader.onload = () => {     //it is a event handler  that is exectued after the file is readed
      setUploadedImage(reader.result);  //then result is placed in uploadimage
    };

    if (file) {
      reader.readAsDataURL(file);  
    }
  }
  
  const handleDeleteImage = () => {
    setUploadedImage(null);
  };
    
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

            {/* <i class="bi bi-person-circle" id="acc-icon" ></i>  <h4 className='auth-account'> &nbsp;</h4> */}
            <label htmlFor="image-upload">
        {uploadedImage ? (
          <div className="circle">
            <img className="uploaded-image" src={uploadedImage} alt="Uploaded" />
            <h6 className='uploaded-text'>{JSON.parse(auth).firstname}</h6><Button type="submit" variant="light"   onClick={handleDeleteImage} className='del-home'> Delete</Button> 
          </div>
        ) : (
          <i className="fas fa-upload" id="upload-icon">&nbsp;Profile</i>
        )}
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
            <hr></hr>
            <h5 className='personal-info'>&nbsp; <i class="bi bi-info-circle"></i><Link to="/personal-info" className='link-lay'>&nbsp;&nbsp;Personal Information</Link></h5>

            <h5 className='setting-info'> &nbsp; <i class="bi bi-gear-fill"></i>&nbsp;<Link to="/settings" className='link-lay'> &nbsp;Settings</Link></h5>





            {/* <footer class="row-fixed bottom"> */}
            <footer className="off-canvas-footer">
        {/* Your footer content */}
     
              <div className="off-canvas-container">
                <p className='footer-h6'><Link to="/privacy" className='link-lay'>Privacy policy</Link> &nbsp; &nbsp; &nbsp;<Link to="/refund" className='link-lay'>Refund Policy  </Link>&nbsp;&nbsp; &nbsp; <Link to="/terms" className='link-lay'>Terms & Conditions</Link> </p>
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