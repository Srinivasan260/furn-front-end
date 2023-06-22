import React from 'react'
import { Container } from 'react-bootstrap'

import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './Place-Order.css'

function PlaceOrders() {
  return (
   
    <div>

<Link to="/view">View your Orders</Link>

  
<Container className='cont-orders' variant="outline-primary">
  <br/>
      <h3 className='Place-Order-title'> <b>Place your orders</b>   </h3>

    
    <div className='Place-Order-form' >
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
  )
}

export default PlaceOrders