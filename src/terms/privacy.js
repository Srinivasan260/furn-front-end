import React from 'react'
import privacy from '../images/privacy.png'
import './privacy.css'

function Privacy(){
  return (
    <div>
      <div className='privacy'>
        <div className="rows-image">
          <div className="text-para">

          <h3 className='Privacy-text'>Privacy Policy</h3>
          <p className='Privacy-details'>This privacy policy explains how we collect, use, and protect the personal information you provide to us. We are committed to respecting your privacy and ensuring the security of your personal information.By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy</p>
       </div>
       
       <div className='priimg'>

        <img src={privacy} className='img-privacy'/>
       </div>
       </div>

       <div className='privacy-para'>
<h4 className='privacy-h4'><b>Information We Collect:</b></h4><br/>

<p  className='privacy-info'>We may collect personal information such as your name, email address, and any other information you voluntarily provide when you interact with our website.</p>
<div className='privacy-info2'>
<h5>Use of Information:</h5>
<p>
<li>We use the collected information to provide you with the services and information you request from us.</li>
<li>We may also use your information to improve our website, products, and services based on your feedback.</li>
<li>We do not sell, trade, or transfer your personal information to third parties without your consent, except as required by law.</li></p>

<h5>Cookies and Tracking Technologies:</h5>

<p>
  <li>Our website may use cookies and other tracking technologies to enhance your browsing experience and gather statistical information.</li>
<li>You have the option to disable cookies in your browser settings, but this may affect the functionality of our website.</li></p>

<h5>Data Security:</h5>

<p>
  <li>We implement reasonable security measures to protect your personal information from unauthorized access or disclosure.</li>
<li>However, please note that no data transmission over the internet or storage system can be guaranteed 100% secure.</li></p>

<h5>External Links:</h5>


<p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of those websites.
<br/>
<div className='child-privacy'>
<b>Children's Privacy:</b>
<br/>
Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children.
<br/>
<b> Changes to the Privacy Policy:</b>
<br></br>
We reserve the right to modify this privacy policy at any time. Any changes will be effective immediately upon posting the updated policy on our website.
<br/>
<b>Contact Information:</b><br/>

If you have any questions or concerns regarding our privacy policy, please contact us at [email address].</div></p>





</div>
</div>


        </div><br/>
        <p className='copy'><b>© Copyright 2023 SR Furniture. All rights reserved</b></p>
        </div>
    
  )
}

export default Privacy