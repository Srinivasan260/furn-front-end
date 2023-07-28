import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import './update-per.css'
import Updateimg from '../images/update.png'

export default function Updateper() {

    const [firstname, setName] = useState();
    const [Secondname, setNames] = useState();
    const [Age, setAge] = useState();
    const [Phn, setPhn] = useState();
    const [password, setPsw] = useState();
    const [email, setEmail] = useState();
    const [Error, setError] = useState(false);
  return (
    <div>

        <div>

            <div className='Update-row'>

                <div className='Update-form'>
                    <br></br>

                    <Container className='Update-main'><br></br>
                        <Container className='Update-contents'>


                        <h3 className='sign-up-title'> <b>Update info</b></h3>
              <Form>
                <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
                  <Form.Label>First name</Form.Label>
                  <Form.Control type="text" placeholder="" value={firstname} onChange={(e) => { setName(e.target.value) }} />
                  {Error && !firstname && <span className="span-error"> enter your name</span>}
                </Form.Group>
                <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
                  <Form.Label>Second name</Form.Label>
                  <Form.Control type="text" placeholder="" value={Secondname} onChange={(e) => { setNames(e.target.value) }} />
                  {Error && !Secondname && <span className="span-error"> enter your name</span>}
                </Form.Group>
                <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                  {Error && !email && <span className="span-error"> enter your email</span>}
                </Form.Group>
                <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control type="number" placeholder="name@example.com" value={Phn} onChange={(e) => { setPhn(e.target.value) }} />
                  {Error && !Phn && <span className="span-error"> enter your phn</span>}
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

                <Button class="btn" className='btn-login ' variant="primary" type="submit"  >Submit </Button>
              </Form>




                            
                        </Container>
                    </Container>





                </div>

                <div className='image-up2'>
        <img src={Updateimg} className='image-update'></img>
      </div>



            </div>







        </div>





    </div>
  )
}
