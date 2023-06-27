import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import './sign.css'
import signup from './images/logi.png'



function Signup() {

  const [firstname, setName] = useState();
  const [Secondname, setNames] = useState();
  const [Age, setAge] = useState();
  const [Phn, setPhn] = useState();
  const [password, setPsw] = useState();
  const [email, setEmail] = useState();
  const [Error, setError] = useState(false);
  const navigate = useNavigate('')

  const OnSubmit = async (e) => {
    e.preventDefault();
    if (!firstname || !Secondname || !Age || !Phn || !password || !email) {
      setError(true)
      return false
    }
    else {
      console.log(firstname, Secondname, Age, Phn, password, email)
      let result = await fetch('http://localhost:3004/signup', {
        method: "post",
        body: JSON.stringify({ firstname, Secondname, Age, Phn, password, email }),
        headers: {
          "Content-type": "Application/JSON"
        }

      })
      result = await result.json()
      console.log(result)
      alert("signup successfully")
      navigate('/login')

    }
  }




  return (
    <div>
      <br />
      <div className="row-sign">
        <div className='signup-main'>
          <Container className='signup'>
            <Container className='signup-form'>

              <h3 className='sign-up-title'> <b>Sign-up</b></h3>
              <Form>
                <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
                  <Form.Label>First name</Form.Label>
                  <Form.Control type="text" placeholder="" value={firstname} onChange={(e) => { setName(e.target.value) }} />
                  {Error && !firstname && <span class="tre"> enter your name</span>}
                </Form.Group>
                <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
                  <Form.Label>Second name</Form.Label>
                  <Form.Control type="text" placeholder="" value={Secondname} onChange={(e) => { setNames(e.target.value) }} />
                  {Error && !Secondname && <span class="tre"> enter your name</span>}
                </Form.Group>
                <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                  {Error && !email && <span class="tre"> enter your email</span>}
                </Form.Group>
                <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control type="number" placeholder="name@example.com" value={Phn} onChange={(e) => { setPhn(e.target.value) }} />
                  {Error && !Phn && <span class="tre"> enter your phn</span>}
                </Form.Group>

                <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number" placeholder="name@example.com" value={Age} onChange={(e) => { setAge(e.target.value) }} />
                  {Error && !Age && <span class="tre"> enter your age</span>}
                </Form.Group>

                <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="name@example.com" value={password} onChange={(e) => { setPsw(e.target.value) }} />
                  {Error && !password && <span class="tre"> enter your password</span>}
                </Form.Group>

                <Button class="btn" className='btn-login' variant="primary" type="submit" onClick={OnSubmit} >Submit </Button>
              </Form>
            </Container>
          </Container>
          <br></br>
        </div>
        <div className='img-sign'>
          <img src={signup} className='signup-img' />
        </div>
      </div>
    </div>

  )
}

export default Signup