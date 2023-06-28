import React from 'react'
import terms from '../images/terms.png'

function Termscond() {
  return (
    <div>
        <div className='terms-main'>
          <div className='terms-row'> 
          <div className='terms-para'>
          <h3 className='terms-title'>Terms & Conditions</h3><br/>
 
        <p className='terms-details'>Welcome to SR Furniture Shop. These terms and conditions outline the rules and regulations for the use of our website and the purchase of furniture from our shop. By accessing our website and making a purchase, you accept and agree to abide by these terms and conditions. When placing an order, you agree to provide accurate information and make full payment at the time of purchase. While SR Furniture aims for timely delivery, actual delivery times may vary.</p>
        </div>
        <div className='term-img'>
          <img src={terms} className='img-term' />

        </div>
        </div>
<div className='term-info'>
<h4 >Product Information:  </h4>

<p className='term-info-term'>We strive to provide accurate and up-to-date information about our furniture products, including descriptions, prices, and availability.
However, we do not guarantee the accuracy, completeness, or reliability of any information on our website. Product images may also vary slightly from the actual products.</p>

<h4>Ordering and Payment:</h4>

<p  className='term-info-term'>By placing an order, you agree to provide accurate and complete information about yourself, including billing and shipping details.
All orders are subject to availability, and we reserve the right to refuse or cancel an order at any time.
Payment must be made in full at the time of purchase. We accept various payment methods, which will be specified on our website.</p>

<h4>Delivery and Shipping:</h4>

<p  className='term-info-term'>We strive to process and deliver orders in a timely manner. However, delivery times may vary depending on the availability of the product and other factors.
Shipping fees and any applicable taxes or customs duties will be added to the total order amount and will be specified during the checkout process.</p>

<h4>Returns and Refunds:</h4>

<p  className='term-info-term'>We offer a return and refund policy for eligible products. Please refer to our separate Returns and Refunds Policy for detailed information.</p>

<h4>Warranty:</h4>

<p  className='term-info-term'>We provide a warranty for our furniture products as specified by the manufacturer or as required by applicable laws. Warranty details will be provided with the product or upon request.</p>

<h4>Intellectual Property:</h4>

<p  className='term-info-term'>All content on our website, including images, text, logos, and trademarks, is the property of SR Furniture Shop and is protected by copyright and other intellectual property laws.
You are not allowed to use, reproduce, modify, or distribute any content from our website without our prior written consent.</p>

<h4>Limitation of Liability:</h4>

<p  className='term-info-term'>SR Furniture Shop shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use or inability to use our website or purchase our products.
Our liability for any direct damages shall be limited to the amount paid for the specific product or service.</p>

<h4>Governing Law and Jurisdiction:</h4>

<p  className='term-info-term'> These terms and conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these terms and conditions shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].</p>

</div>

        </div>
        
        
        </div>
  )
}

export default Termscond