import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap'
import {Link,useNavigate } from "react-router-dom";
import view from '../images/view-order.png'


function ViewOrder() {

    const [products, setProducts] = useState([]);
    const params =useParams();

  

    
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


    const OnSub = async(_id)=>{
      console.log(params)
      let results = await fetch(`http://localhost:3004/delete/${_id}`,{
              method : "delete",
            })
        
            results =await results.json()
            if(results){
              alert('data is deleted successfully')
            }else return alert("data is not deleted ")
    }
   

    

   

  return (
    <div>

        <div>
        <h3 className='view-orders-title'><b>Your Orders <i class="bi bi-bucket-fill" id='your-orders-icon'></i></b></h3><br/>
        {products.map((item, index) => (           
<div className='row-view'>
  <div className="cont-view">

<Container className='view-orders'>
  
 
    <>
    <Container key={item._id}>
      <p className='view-orders-details'>
        Product No. :<b>{index +1} </b><br/>
        Email: <b>{item.email} </b><br />
        Product name:  <b> {item.Productname} </b><br />
        Category: <b>{item.Category} </b><br />
        Product brand: <b> {item.Productbrand} </b><br />
        Count: <b> {item.Price} </b><br />
        <br />
       {/* <Link to={"/update/"+item._id}><Button class="btn" variant="success" type="submit"> Update </Button> </Link> &nbsp;&nbsp; */}
       <Link to={"/update/"+item._id}> <Button class="btn" variant="success" type="submit" className="view-button"> Update </Button></Link>   &nbsp;&nbsp;
        <Button class="btn" variant="danger" type="submit"  className="view-button" onClick={()=>{OnSub(item._id)}}>Delete</Button>
        <br /><br />
      </p>
    </Container>
    </>
 
</Container>



</div>

<div className='image-view'>
  <img src={view} className='image-view2' />

</div>
</div>
))}
      {/*  <Link to={"/up/"+item._id}> Update</Link></li>  */}


            





        </div>













    </div>
  )
}

export default ViewOrder