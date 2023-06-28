import React from 'react'
import refund from  '../images/refund.png'

function Refund() {
  return (
    <div>

        <div className='refund'>
         <div className='row-refund'>
          <div className='refund-para'>
          <h3 className="refund-title"> Refund Policy</h3><br/>

       <p className='refund-title-text'> Thank you for shopping at SR Furniture Shop. This refund policy outlines the terms and conditions for requesting refunds for furniture purchases made through our website or in-store. By making a purchase, you agree to comply with this refund policy. Please take a moment to familiarize yourself with our refund policy to ensure a smooth and satisfactory shopping experience</p> </div>
       <div className='refund-img'>

        <img src={refund} className='img-ref'/>


       </div>
</div>
<div className='ref'>
<h3 className='refund-subtitle'>Eligibility for Refunds: </h3>

<p className='refund-details'>Refunds are only available for eligible products as determined by SR Furniture Shop.
To be eligible for a refund, you must provide proof of purchase, such as an order confirmation or receipt.</p>

<h3 className='refund-subtitle'>Refund Requests:</h3>

<p className='refund-details'>Refund requests must be made within [number of days] from the date of delivery or purchase.
To request a refund, please contact our customer support team by [email/phone] and provide the necessary details, including your order number, contact information, and reason for the refund request.</p>

<h3 className='refund-subtitle'>Non-Refundable Items:</h3>

<p className='refund-details'>The following items are non-refundable:
Custom-made or personalized furniture.
Clearance or discounted items.
Furniture that has been assembled, used, or damaged after delivery or purchase.</p>

<h3 className='refund-subtitle'>Refund Process:</h3>
<p className='refund-details'>

Once your refund request is received and approved, we will initiate the refund process.
Refunds will be issued in the original form of payment used for the purchase, unless otherwise agreed upon.
Please note that it may take [number of days] for the refund to be processed and for the funds to be reflected in your account.</p>
Return Shipping:

<p className='refund-details'>If the product is eligible for a refund, you may be responsible for the return shipping costs, unless the item arrived damaged or defective.
We recommend using a reputable shipping service with tracking and insurance for your return shipment.</p>

<h3 className='refund-subtitle'>Damaged or Defective Items:</h3>

<p className='refund-details'>If you receive a damaged or defective item, please notify us immediately, preferably within [number of days].
We may require photographic evidence or a detailed description of the damage or defect to process your refund or replacement.</p>

<h3 className='refund-subtitle'>Store Credit:</h3>

<p className='refund-details'>In some cases, instead of a refund, we may offer store credit or an exchange for an eligible product of equal value.</p>

<h3 className='refund-subtitle'>Changes to the Refund Policy:</h3>

<p className='refund-details'>SR Furniture Shop reserves the right to modify or update this refund policy at any time. Any changes will be effective immediately upon posting the updated policy on our website.</p>
        </div>
    </div>
    </div> 
  )
}

export default Refund