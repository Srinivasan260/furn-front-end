import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import './otp.css'
import Button from 'react-bootstrap/Button';
import {Link,useNavigate,useParams } from "react-router-dom";

function Otpverification() {
 
  const [Otp, setOtp] = useState();

  const navigate = useNavigate('');

  const params =useParams();


  
  const OnSubmitOTp = async(e,id) =>{
    e.preventDefault();
    console.warn(params)
    const userId = params.id
    console.log(userId)
    try{
   let Otpdata = await fetch('http://localhost:3004/verify-otp', {
    method: "post",
    body: JSON.stringify({Otp,userId}),
    headers: {
      "Content-type": "Application/JSON"
    }
    

  }) 
  console.log('5')
   Otpdata =await Otpdata.json()
  console.log(Otpdata)
  if(Otpdata)
  {
  alert('updated successfully')
  navigate('/Login')
  
  }
}catch(err){
  console.log({message : err.message})
}
    
  }

  return (
    <div>
        <div>

            <h3 className='Otp-title'><b>OTP Verfication</b> </h3>
            <p className='Otp-para'> Otp can be send to the respective email id ...check that and enter the mail id </p>

            <Container className='otp-Container'>
            <h4 className='cont-title'><b>OTP</b></h4>
              
              
            <Form className='formdata'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-center'>Enter the Otp</Form.Label>
        <Form.Control type="number" placeholder="Otp"  value={Otp} onChange={(e) => {setOtp(e.target.value) }}/>
      </Form.Group>
      <Button variant="primary" className='Otp-button' onClick={OnSubmitOTp}>Submit</Button>
      </Form>
      </Container>


            


        </div>
    </div>
  )
}

export default Otpverification