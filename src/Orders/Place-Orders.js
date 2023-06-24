import React from 'react'
import { Container } from 'react-bootstrap'

import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './Place-Order.css'
import place from '../images/place-order.png'

function PlaceOrders() {
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
        <Form.Control type="text" placeholder="Chair or Bed" />
       </Form.Group>
       <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>category</Form.Label>
        <Form.Control type="text" placeholder="Wood" />
       </Form.Group>
       <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>Product brand</Form.Label>
        <Form.Control type="text" placeholder="" />
       </Form.Group>
       <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text/number" placeholder="55000" />
       </Form.Group>
       <Button variant="primary" className='Place-Order-button'>Place Your Order</Button>

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