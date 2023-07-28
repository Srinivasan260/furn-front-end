import React from 'react'
import { Link } from 'react-router-dom'
import './personal.css'
import personal from '../images/personal-info.png'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'


function Personal() {
    const auth = localStorage.getItem('user')
  return (
    <div>

       <div className='personal-details'>
            
        <div className="info-para"><br/><br/>
        <h2 className='personal-info-title'><i class="bi bi-info-lg"></i><b>Personal Information </b></h2><br/>
         
        <h6 className="h6-per-info">Info about you and your preferences across SR Furnitures</h6><br></br>
        <br/>   
      
     </div>
     
     <div className="row-personal">
      <div className="personalinfo">
    
      {/*  */}
        <Container id="cont-per"><br></br>
          <h3 className="personal-info-details-title"><b>Basic info :</b></h3><br></br>

          <h4 id="personal-info-details">First name : <b id="per-json">{JSON.parse(auth).firstname}</b></h4>
          <br></br>
          <h4 id="personal-info-details">Last name : <b id="per-json">{JSON.parse(auth).Secondname}</b></h4><br/>
          <h4 id="personal-info-details">Email id : <b id="per-json">{JSON.parse(auth).email}</b></h4><br></br>

          <h4 id="personal-info-details">Age : <b id="per-json">{JSON.parse(auth).Age}</b> </h4><br></br>
          <h4 id="personal-info-details">Phone Number : <b id="per-json">{JSON.parse(auth).Phn}</b></h4><br></br>
          {/* </Container> */}

         <Link to="/update-per" ><Button type="submit" variant="primary"  className='btn-home-login'> Update</Button></Link>
        </Container>


        </div>
        <div className='image-personal'>
      <img src={personal} className="img-per"  />
      </div>
      
    </div>
        
        
    </div>   
        
    </div>
  )
}

export default Personal