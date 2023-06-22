import React from 'react'
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import './login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <Container  className="cont-login">

      <div className="cont-login2">
        <Form><br/>
        
        <h3 className="h3-cont"> <b>Login</b> </h3><br/>
        
      <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
       </Form.Group>
      <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="#####" />
      </Form.Group><br/>
      <Button class="btn" className='btn-login' variant="primary"  type="submit">Submit </Button>
    </Form>
     <br/>
    <h4 className="h4-cont"> if Don't have an account ,create it</h4>

    <Link to path="/signup" className='sign'>Signup</Link>
    </div>
    </Container>

    </div>
  )
}

export default Login
