import React from 'react'
import { Button, Container } from 'react-bootstrap'


function ViewOrder() {
  return (
    <div>

        <div>

            <h3>
                <Container className='view-orders'>
                    <h3 className='view-orders-title'> <b>Your Orders</b></h3>
                    <br/>
                    <Container>
                    <p className='view-orders-details'>
                        Your Name :     <br/>
                    Product name: <br/>
                    Category: <br/>
                    Product brand : <br/>
                    Price :   <br/>
                    <br/>
                    <Button class="btn" variant="secondary" type="submit">Update </Button> &nbsp;&nbsp;
                    <Button class="btn" variant="secondary" type="submit">Delete </Button>

                    <img src=""></img>
                    </p>

                    </Container>
                

                </Container>
            </h3>





        </div>













    </div>
  )
}

export default ViewOrder