import React from 'react'
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import './sign.css'


function Signup() {
  return (
    <div>
      <br/>
      <div className='signup-main'>
           <Container  className='signup'>
            <div className='signup-form'>

            <h3 className='sign-up-title'> <b>Sign-up</b></h3>
        <Form>
      <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="" />
       </Form.Group>
       <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>Second name</Form.Label>
        <Form.Control type="text" placeholder="" />
       </Form.Group>
       <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
       </Form.Group>
       <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="number" placeholder="name@example.com" />
       </Form.Group>
       <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="name@example.com" />
       </Form.Group>
      <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="name@example.com" />
      </Form.Group>

      <Button class="btn" className='btn-login' variant="primary"  type="submit">Submit </Button>
    </Form>
    </div>
    </Container>
        
        </div>
        </div>
  )
}

export default Signup