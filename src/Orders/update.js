import React, { useEffect, useState } from 'react'

import { Container } from 'react-bootstrap'

import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import {Link,useNavigate,useParams } from "react-router-dom";
import update from '../images/update.png'
import './update.css'

export default function Update() {

    const[Productname,setProduct] = useState('')
  const[Category,setCategory] = useState('')
  const[Productbrand,setProductbrand] = useState('')
  const[Price,setPrice] = useState('')
  const[email,setEmail] = useState('')
  const[Error,setError] = useState('')
  const params =useParams();


  const navigate = useNavigate('')
 


  const auth = localStorage.getItem('user')

    useEffect(()=>{
        getDetails()
    
      },[])
    
      
      
      const getDetails = async(_id)=>{ 
        // const email = JSON.parse(localStorage.getItem('user')).email;
        // console.warn(email)
        console.warn(params)
        
            let result = await fetch(`http://localhost:3004/get-update/${params._id}`,{
                method:"Get"
            });
         
            result =await result.json();
           
            console.warn(result)
            setProduct(result.Productname)
            setCategory(result.Category)
            setProductbrand(result.Productbrand)
            setPrice(result.Price)
            setEmail(result.email)
    
        }

        const onSub = async(_id)=>{
            // // console.log(auth)
            // // let email = JSON.parse(auth).email
            // // console.log(email)
            // const email = JSON.parse(localStorage.getItem('user')).email;
            // // const password = 1234345
            if (!Productname || !Category || !Productbrand || !Price) {
              setError(true)
              return false }
              else{
            console.log(params)
          
                  
            let results = await fetch(`http://localhost:3004/update/${params._id}`,{
              method : "Put",
              body : JSON.stringify({Productname,Category,Productbrand,Price,email}),
              headers :{
                "Content-type": "Application/Json"
              }
        
            })
        
            results =await results.json()
            console.log(results)
            if(results)
            {
            alert('updated successfully')
            navigate('/view')
            
            }
          }
        
        
        
          }
  return (
    <div>

      <br/><br/>
      <div className='row-place'>
  <div className='place-order'>
<Container className='cont-orders' variant="outline-primary">
  

    
    <div className='Place-Order-form' >
    <h3 className='Place-Order-title'> <b>Update your orders</b>   </h3>
      <Form>
      <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>Product name</Form.Label>
        <Form.Control type="text" placeholder="Chair or Bed" value={Productname}  onChange={(e)=>{setProduct(e.target.value)}} />
        {Error && !Productname && <span className="span-error"> Enter Product name!</span>}
       </Form.Group>


       <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>category</Form.Label>
        <Form.Control type="text" placeholder="Wood" value={Category}  onChange={(e)=>{setCategory(e.target.value)}} />
        {Error && !Category && <span className="span-error"> Enter Category!</span>}
       </Form.Group>



       <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>Product brand</Form.Label>
        <Form.Control type="text" placeholder=""  value={Productbrand} onChange={(e)=>{setProductbrand(e.target.value)}}/>
        {Error && !Productbrand && <span className="span-error"> Enter Productbrand!</span>}
       </Form.Group>



       <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>Count</Form.Label>
        <Form.Control type="text/number" placeholder="55000"  value={Price} onChange={(e)=>{setPrice(e.target.value)}}/>
        {Error && !Price && <span className="span-error"> Enter Price!</span>}
       </Form.Group>


       <Form.Group className="mb-3" as={Col} md="11" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text/number" placeholder="@mail.com"  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      
        {Error && !Price && <span className="span-error"> Enter Email!</span>}  </Form.Group>
       <Button variant="primary" className='Place-Order-button' onClick={onSub} >Update Your Order</Button>

      </Form>
      </div>







      </Container>
      </div>

      <div className='image-place'>
        <img src={update} className='image-place3'></img>
      </div>


      </div>







    </div>
  )
}
