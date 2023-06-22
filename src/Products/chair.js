import React from 'react'
import sofa1 from '../images/fur.jpg'
import './sofa.css'
import chair2 from '../images/chair5.jpg'
import chair3 from '../images/chair64.webp'
import chair4 from '../images/chairs.webp'
import chair5 from '../images/off10.jpg'
import chair6 from '../images/off11.webp'
import chair7 from '../images/offchair.jpg'
import chair8 from '../images/offchair2.jpg'

function Chair() {
  return (
    <div>

      <br></br>
      <h3 className='h3-sofa'> Chairs </h3>

      <div class="row">
        <div className="sofa1">
          <img src={chair2} className='sofa-img1' ></img>
          <div className='sofa1-text'>
          <h4>-45% ₹7,313</h4>
    

          <p ><b className="free-sofa1">FREE delivery 22 - 26 June</b></p>
          <p> Wakefit Office Chair | 3 Years Warranty | Ergonomic Chair, Chair for Office Work at Home, Study Chair (Safari-Black&Grey)</p>
            </div>

        </div>

        <div className="sofa1">
          <img src={chair3} className='sofa-img1' ></img>
          <div className='sofa1-text'>
          <h4>-50% ₹17,999</h4>
    
          <p ><b className="free-sofa1">FREE delivery 22 - 26 June</b></p>
          <p >The Sleep Company SmartGRID Stylux Ergo High-Back Chair for Office & Home , SpinePro Adjustable Cushioned Ergonomic Lumbar Support</p>
            </div>

        </div>
        <div className="sofa1">
          <img src={chair4} className='sofa-img1' ></img>
          <div className='sofa1-text'>
          <h4>-60% ₹3,999</h4>
    

          <p ><b className="free-sofa1">FREE delivery 22 - 26 June</b></p>
          <p>beAAtho Verona Mesh Mid-Back Ergonomic Desk Office Chair with Tilting Mechanism, Comfortable Seat</p>
            </div>

        </div>
        <div className="sofa1">
          <img src={chair5} className='sofa-img1' ></img>
          <div className='sofa1-text'>
          <h4>₹8,590</h4>
    

          <p ><b className="free-sofa1">FREE delivery 22 - 26 June</b></p>
          <p> Green Soul® Jupiter Go Office Chair, High Back Mesh Ergonomic Home Office Desk Chair</p>
            </div>

        </div>
        <div className="sofa1">
          <img src={chair6} className='sofa-img1' ></img>
          <div className='sofa1-text'>
          <h4>-69% ₹3,099</h4>
    

          <p ><b className="free-sofa1">FREE delivery 22 - 26 June</b></p>
          <p> Savya Home® Delta Executive Ergonomic Office Chair| Height Adjustable Seat</p>
            </div>

        </div>
        <div className="sofa1">
          <img src={chair7} className='sofa-img1' ></img>
          <div className='sofa1-text'>
          <h4>-40% ₹5,999</h4>
    

          <p ><b className="free-sofa1">FREE delivery 22 - 26 June</b></p>
          <p> CELLBELL Tauras Lite C100 Mesh High Back Office Chair/Computer Chair</p>
            </div>

        </div>
        <div className="sofa1">
          <img src={chair8} className='sofa-img1' ></img>
          <div className='sofa1-text'>
          <h4>-66% ₹6,199</h4>
    

          <p ><b className="free-sofa1">FREE delivery 22 - 26 June</b></p>
          <p> SAVYA HOME Beatle High Back Ergonomic Office Chair with 3D Adjustable Arms, Synchronous 3 Position Tilt Lock</p>
            </div>

        </div>
    </div>

    </div>
  )
}

export default Chair