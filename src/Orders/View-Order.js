import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap'
import {Link,useNavigate } from "react-router-dom";


function ViewOrder() {

    const [products, setProducts] = useState([]);

  

    
  useEffect(()=>{
    getDetails()
  

  },[])

  const getDetails = async(e)=>{ 
    const email = JSON.parse(localStorage.getItem('user')).email;
    console.warn(email)
    
        let result = await fetch(`http://localhost:3004/get-products/${email}`,{
            method:"Get"
        });
     
        result =await result.json();
        console.warn(result)
        setProducts(result)
        console.warn(setProducts(result))   //we have to give [] ..if we finding a single value
       
       
        console.log('Products:', products)
        
    }
   

    

   

  return (
    <div>

        <div>

            <h3>

<Container className='view-orders'>
  <h3 className='view-orders-title'><b>Your Orders</b></h3>
  {products.map((item, index) => (
    <>
    <Container key={item._id}>
      <p className='view-orders-details'>
        NO.{index +1}<br/>
        Your Name: {item.email}<br />
        Product name: {item.Productname}<br />
        Category: {item.Category}<br />
        Product brand: {item.Productbrand}<br />
        Price: {item.Price}<br />
        <br />
       <Link to={"/update/"+item._id}><Button class="btn" variant="secondary" type="submit">Update</Button> </Link> &nbsp;&nbsp;
        <Button class="btn" variant="secondary" type="submit">Delete</Button>
        <br /><br />
      </p>
    </Container>
    </>
  ))}
</Container>
      {/*  <Link to={"/up/"+item._id}> Update</Link></li>  */}


            </h3>





        </div>













    </div>
  )
}

export default ViewOrder