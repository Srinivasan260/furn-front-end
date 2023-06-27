import React, {useEffect, useState } from 'react'

import { Container } from 'react-bootstrap'

import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from "react-router-dom";
import './Place-Order.css'
import place from '../images/place-order-2.png'


function PlaceOrders() {


  const[Productname,setProduct] = useState('')
  const[Category,setCategory] = useState('')
  const[Productbrand,setProductbrand] = useState('')
  const[Price,setPrice] = useState('')
  const[Error,setError] = useState('')


  const navigate = useNavigate('')
 


  const auth = localStorage.getItem('user')


  const OnProd =async(e)=>{

    e.preventDefault();
    console.log(auth)
    const email = JSON.parse(localStorage.getItem('user')).email;
    console.log(email)
    let result = await fetch(`http://localhost:3004/products/${email}`, {
      method: "post",
      body: JSON.stringify({ Productname,Category,Productbrand,Price }),
      headers: {
        "Content-type": "Application/JSON"
      }

    })
    result = await result.json()
    if(result){
    console.log(result)
    alert('Your order is placed')
    navigate('/view')
    }
    
  }

  return (
   
    <div>

<Link to="/view"><Button  variant="primary" className="View-Place">View Orders </Button></Link>

<div className='row-place'>
  <div className='place-order'>
<Container className='cont-orders' variant="outline-primary">
  

    
    <div className='Place-Order-form' >
    <h3 className='Place-Order-title'> <b>Place your orders</b>   </h3>
      <Form>
      <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>Product name</Form.Label>
        <Form.Control type="text" placeholder="Chair or Bed" value={Productname}  onChange={(e)=>{setProduct(e.target.value)}} />
       </Form.Group>
       <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>category</Form.Label>
        <Form.Control type="text" placeholder="Wood" value={Category}  onChange={(e)=>{setCategory(e.target.value)}} />
       </Form.Group>
       <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>Product brand</Form.Label>
        <Form.Control type="text" placeholder=""  value={Productbrand} onChange={(e)=>{setProductbrand(e.target.value)}}/>
       </Form.Group>
       <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text/number" placeholder="55000"  value={Price} onChange={(e)=>{setPrice(e.target.value)}}/>
       </Form.Group>
       <Button variant="primary" className='Place-Order-button' onClick={OnProd}>Place Your Order</Button>

      </Form>
      </div>







      </Container>
      </div>

      <div className='image-place'>
        <img src={place} className='image-place2'></img>
      </div>


      </div>






        
    </div>
  )
}

export default PlaceOrders