import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/esm/Button';
import './about.css'


function Help() {
  return (
    <div>
     <div >
        


  <h1 className="help-h3"> HELP ?</h1>

  <Container>


  

  <div className="help-form">

  <Form >

    <Form.Group as={Col} md="5" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Report a Problem :</Form.Label>
      <Form.Control as="textarea" rows={3}  />
    </Form.Group>

    <Button type="submit" className="help-btn" > Submit</Button>
  </Form><br></br>
  </div>
  </Container>
  
  <h6 class="help-h6" > </h6>
  <br></br>


  <h4 className="help-h4"> If You Encountered any problem .Please report it.Our team can fix it as soon as possible.</h4>


  



</div>



</div>
        




  )
}

export default Help