import React from 'react'
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/esm/Col";
import './sign.css'


function Signup() {
  return (
    <div>
      <br/>
           <Container  className='signup'>

            <h3> Sign-up form</h3>
        <Form>
      <Form.Group className="mb-3" as={Col} md="7" controlId="exampleForm.ControlInput1">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="" />
       </Form.Group>
       <Form.Group className="mb-3" as={Col} md="7" controlId="exampleForm.ControlInput1">
        <Form.Label>Second name</Form.Label>
        <Form.Control type="text" placeholder="" />
       </Form.Group>
       <Form.Group className="mb-3" as={Col} md="7" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
       </Form.Group>
       <Form.Group className="mb-3" as={Col} md="7" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="number" placeholder="name@example.com" />
       </Form.Group>
       <Form.Group className="mb-3" as={Col} md="7" controlId="exampleForm.ControlInput1">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="name@example.com" />
       </Form.Group>
      <Form.Group className="mb-3" as={Col} md="7" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="name@example.com" />
      </Form.Group>
    </Form>
    </Container>
        
        </div>
  )
}

export default Signup