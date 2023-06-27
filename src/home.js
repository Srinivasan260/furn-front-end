
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Container from 'react-bootstrap/Container';

import './home.css'
import furn from './images/warranty.jpg'
import furn2 from './images/offer.jpg'
import furn3 from './images/funi.avif'

import furn5 from './images/f2.webp'
import top from './images/top10.jpg'
import map from './images/gmap.png'

function Home() {
  //slide motion
  const [slideIn, setSlideIn] = useState(false);
  const [slideIn1, setSlideIn2] = useState(false);
  const [slideIn2, setSlideIn3] = useState(false);

  //oof canvas
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);  // we are first setting false and then true
  // const handleShow = () => setShow(true);

  //for auth
  const auth = localStorage.getItem('user')

  useEffect(() => {
    setSlideIn(true);
    setSlideIn2(true);
    setSlideIn3(true);
  }, []);




  return (
    <div className='home-pro'>
      <div className={`slide-in1 ${slideIn1 ? 'active' : ''}`}>
        <img src={furn5} className='img4'></img>
      </div>

    

      {/* this is first one */}

      <div className="row">
        <div className="image">
          <img src={furn3} className='img2' />
        </div>
        <div className="para">

          <Container className="cont-para">
            &nbsp;&nbsp;&nbsp; <h4 className='h4-pa'> <b className='SR-nav'>SR </b>Furnitures  </h4>

            <p className="p-para">SR Furnitures is a reputable furniture company specializing in high-quality and stylish furniture pieces. With a focus on craftsmanship, durability, and aesthetic appeal, SR Furnitures offers a wide range of furniture products to enhance and beautify your living spaces. From sofas and chairs to tables and storage solutions, SR Furnitures combines functionality and design to create furniture that meets the diverse needs and preferences of customers. With a commitment to excellent customer service and a passion for creating beautiful interiors, SR Furnitures aims to provide customers with the perfect furniture solutions for their homes or commercial spaces.<br /><br /><br /></p>

          </Container>



        </div>

      </div>

      {/*  second one*/}

      <div className="row">
        <div className="para">
          <Container className="cont-para">

            <p className="p-para"><b className='fifty-home'>50%   </b>ntroducing the Exciting Offer from Sr Furnitures: Get 30% Off on All Products!

              We are thrilled to announce an irresistible deal for all furniture enthusiasts out there. Sr Furnitures, your trusted destination for exquisite and high-quality furniture pieces, is now offering an exclusive discount of 30% on all our products. Whether you're looking to revamp your living room, upgrade your bedroom, or add a touch of elegance to your workspace, now is the perfect time to fulfill your furniture dreams without breaking the bank. <br /><br /><br /></p>
          </Container>
        </div>
        <div className="image">



          <img src={furn2} className='img2' />





        </div>

      </div>
      <div className="row">
        <div className="image">
          <img src={furn} className='img2' />
        </div>
        <div className="para">

          <Container className="cont-para"><br />

            <p className="p-para"><b className='warran-bold'>Warranty Statement :  &nbsp;</b>For a period of one year from the date of purchase, we guarantee that our furniture will be free from defects in materials and workmanship. This warranty covers structural integrity and ensures that your furniture will function as intended under normal use.

              In addition to the one-year warranty, we also provide a 10-day replacement policy. If you encounter any issues with your furniture within the first 10 days of receiving it, we will gladly replace the item for you. This policy ensures that you are completely satisfied with your purchase and allows for a hassle-free experience.

              Please note that the warranty and replacement policy do not cover damages resulting from improper use, negligence, accidents, or modifications made to the furniture without our authorization. It is essential to follow the care instructions provided with each product to maintain its condition and maximize its longevity.<br /><br /><br /></p>

          </Container>



        </div>

      </div><br /><br />

      <div className={`slide-in ${slideIn ? 'active' : ''}`}>
        <h4 className='brand-h1'>Brands we are Dealing</h4>
        <img src={top} className='img15'></img>
      </div>


      <div className="foot">
        &nbsp;<h6>  &nbsp;Follow us &nbsp;&nbsp;&nbsp; <i class="bi bi-instagram"></i>&nbsp;&nbsp;<i class="bi bi-facebook"></i>&nbsp;&nbsp;<i class="bi bi-twitter"></i></h6>

        <br />
        <b > Our Locations</b>
        <br />
        <div className="row">
          <div className="foot-tnagar">
            <p className='num-home'>T.Nagar
              No 25, Thirumalai Pillai Road, <br />T Nagar, Chennai - 600017<br></br>
              Time: 10AM – 8PM<br /><br />
              <a href="https://goo.gl/maps/wucGHHx6vsYhpvWz6"><img src={map} className='map' /></a></p>
          </div>



          <div className="foot-vela">
            <p className='num-home'>Velachery
              No 1, 2nd Main Road Venkateshwara Nagar,<br /> Velachery, Chennai - 600042<br />
              Time: 11AM – 9PM<br /><br />
              <a href="https://goo.gl/maps/wucGHHx6vsYhpvWz6"><img src={map} className='map' /></a></p>
          </div>




          <div className="foot-anna">
            <p className='num-home'>Annanagar
              No 68/2 AD Block 2nd Street, Opposite to Hotel Sree Akshayam,<br /> Shanthi colony, Anna Nagar, Chennai - 600040.<br />
              Time: 11AM – 9PM<br />
              <br />
              <a href="https://goo.gl/maps/wucGHHx6vsYhpvWz6"><img src={map} className='map' /></a></p>

          </div>


        </div>
        <p>
          <b>Contact us: </b><br />
          Call us Now: &nbsp;&nbsp;
          <b className='num-home'>+91 9790 091 333
            +91 7667 111 333</b><br />
          EMAIL US  : &nbsp;&nbsp;
          <b className='num-home'>sales@srinifurnishing.com</b>
        </p>





      </div>



    </div>
  )
}

export default Home