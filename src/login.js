import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import './login.css'
import { Link } from 'react-router-dom';
import  loginimg from './images/Computer login-rafiki.png'

function Login() {
 
    const [email, setEmail] = useState('');
    const [password, setPsw] = useState('');
    const [error, setError] = useState(false);


    const navigate = useNavigate('');
    
    useEffect(() => {
      const auth = localStorage.getItem('user')
      if (auth) {
        navigate('/')
      }
    }, [])
  
    const onSub = async (e) => {
      e.preventDefault();
      // if (!email || !password) {
      //   setError(true)
      //   return false
      // }else{
        
  
      console.log("hi")
      console.log(email, password)
      let result = await fetch('http://localhost:3004/login', {
        method: 'Post',
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-type": "Application/Json"
        }
      })
      console.log('8')
      result = await result.json()
      console.log(result)
      alert(result)
      if (result) {
        localStorage.setItem('user', JSON.stringify(result));
        navigate('/')
  
      
    }else return alert('invalid user')
  }
  
    
  return (
    <div>
      <div className='row-log'>
        <div className='login-cont'>
      <Container  className="cont-login">

      <div className="cont-login2">
        <Form><br/>
        
        <h3 className="h3-cont"> <b>Login</b> </h3><br/>
        
      <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
       </Form.Group>
      <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="#####" value={password} onChange={(e) => { setPsw(e.target.value) }} />
        <h5 className='Forget-password'> Forget Password?</h5>
      </Form.Group><br/>
      <Button class="btn" className='btn-login' variant="primary"  type="submit" onClick={onSub}>Login </Button>
    </Form>
     <br/>
    <h4 className="h4-cont"> if Don't have an account ,create it</h4>

    <Link to="/signup" className='sign' >Signup</Link>
    <br/>
    </div>
    </Container>
    </div>
    <div className='img-login'>
      <img src={loginimg}  className='img-log'/>

    </div>
    </div>
    </div>
  )
}

export default Login
