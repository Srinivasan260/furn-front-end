import React from 'react'
import sofa1 from '../images/fur.jpg'
import sofa2 from '../images/sofa44.jpg'
import sofa3 from '../images/sofa3.0.jpg'
import sofa4 from '../images/sofa3.jpg'
import sofa5 from '../images/sofa55.jpg'
import sofa6 from '../images/sofa66.jpg'
import sofa7 from '../images/fu4.jpg'
import sofa8 from '../images/sofa10.jpg'

import './sofa.css'

function Sofas() {
  return (
    <div>
    <br></br>
      <h3 className='h3-sofa'>  Sofas </h3>

      <div class="row">

        {/* sofa 1 */}
        <div className="sofa1">
          <img src={sofa1} className='sofa-img1' ></img>
          <div className='sofa1-text'>
          <h4>₹31,999.00</h4>
    

          <p ><b className="free-sofa1">FREE delivery 22 - 26 June</b></p>
          <p> Adorn India Rio Decent L Shape 6 Seater Corner Sofa Set Left Side Handle (Brown)</p>
            </div>

        </div>


{/* sofa2 */}
        <div className="sofa1">
          <img src={sofa2} className='sofa-img1' ></img>
          <div className='sofa1-text'>
          <h4>₹26,999</h4>
    

          <p ><b className="free-sofa1">FREE delivery 22 - 26 June</b></p>
          <p>Amazon Brand - Solimo Alen 5 Seater Fabric LHS L Shape Sofa Set (Grey)</p>
            </div>

        </div>

        <div className="sofa1">
          <img src={sofa3} className='sofa-img1' ></img>
          <div className='sofa1-text'>
          <h4>-24% ₹11,399</h4>
    

          <p ><b className="free-sofa1">FREE delivery 22 - 26 June</b></p>
          <p> uberlyfe 3 Seater Sofa Cum Bed - Perfect for Guests - Molfino Fabric Washable Cover - Maroon with 2 Cushions(Jharokha Pattern) | 5' X 6' Feet.</p>
            </div>

        </div>


        <div className="sofa1">
          <img src={sofa4} className='sofa-img1' ></img>
          <div className='sofa1-text'>
          <h4>-45% ₹17,099</h4>
    

          <p ><b className="free-sofa1">FREE delivery 22 - 26 June</b></p>
          <p>SofaArchitect Chilly 3 Seater Fabric Sofa (Blue)</p>
            </div>

        </div>
        <div className="sofa1">
          <img src={sofa5} className='sofa-img1' ></img>
          <div className='sofa1-text'>
          <h4>-48% ₹19,989</h4>
    

          <p ><b className="free-sofa1">FREE delivery 22 - 26 June</b></p>
          <p> Amazon Brand - Solimo Tarnavo 3 Seater Sofa cum Bed (Grey & Black, Fabric)</p>
            </div>

        </div>
        <div className="sofa1">
          <img src={sofa6} className='sofa-img1' ></img>
          <div className='sofa1-text'>
          <h4>-46% ₹16,299</h4>
    

          <p ><b className="free-sofa1">FREE delivery 22 - 26 June</b></p>
          <p>AMATA Eagle Sofa Cum Bed with Two Cushions Perfect for Home Living Room and Guests (Camel)</p>
            </div>

        </div>
          <div className="sofa1">
          <img src={sofa7} className='sofa-img1' ></img>
          <div className='sofa1-text'>
          <h4>-44% ₹19,999</h4>
    

          <p ><b className="free-sofa1">FREE delivery 22 - 26 June</b></p>
          <p>Vinod Handicraft Sheesham Wood 3 Seater Sofa for Living Room Bedroom Hall Home Office Wooden 3 Seater Sofa Furniture (Walnut Finish)</p>
            </div>

        </div>
        <div className="sofa1">
          <img src={sofa8} className='sofa-img1' ></img>
          <div className='sofa1-text'>
          <h4>-67% ₹14,999</h4>
    

          <p ><b className="free-sofa1">FREE delivery 22 - 26 June</b></p>
          <p> home sofa 2 Seater Chesterfield Stone & Beam Bradbury Chesterfield Modern Tufted Leather Loveseat Sofa Couch,(Brown)</p>
            </div>

        </div>





      </div>




    </div>
  )
}

export default Sofas