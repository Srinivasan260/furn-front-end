
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bg from './bg.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './home.css'
import furn from './images/furniture.webp'
import furn2 from './images/bed.webp'
import furn3 from './images/funi.avif'
import furn4 from './images/bed2.jpg'
import logo from './images/logo.jpg';
import furn5 from './images/f2.webp'
import top from './images/top10.jpg'
import map from './images/gmap.png'

function Home() {
    const [slideIn, setSlideIn] = useState(false);
    const [slideIn1, setSlideIn2] = useState(false);
    const [slideIn2, setSlideIn3] = useState(false);

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

                        <p className="p-para">SR Furnitures is a reputable furniture company specializing in high-quality and stylish furniture pieces. With a focus on craftsmanship, durability, and aesthetic appeal, SR Furnitures offers a wide range of furniture products to enhance and beautify your living spaces. From sofas and chairs to tables and storage solutions, SR Furnitures combines functionality and design to create furniture that meets the diverse needs and preferences of customers. With a commitment to excellent customer service and a passion for creating beautiful interiors, SR Furnitures aims to provide customers with the perfect furniture solutions for their homes or commercial spaces.</p>

                    </Container>



                </div>

            </div>

           {/*  second one*/}

            <div className="row">
            <div className="para">
            <Container className="cont-para"><br />
                
                <p className="p-para">SR Furnitures is a reputable furniture company specializing in high-quality and stylish furniture pieces. With a focus on craftsmanship, durability, and aesthetic appeal, SR Furnitures offers a wide range of furniture products to enhance and beautify your living spaces. From sofas and chairs to tables and storage solutions, SR Furnitures combines functionality and design to create furniture that meets the diverse needs and preferences of customers. With a commitment to excellent customer service and a passion for creating beautiful interiors, SR Furnitures aims to provide customers with the perfect furniture solutions for their homes or commercial spaces.</p>
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

                        <p className="p-para">SR Furnitures is a reputable furniture company specializing in high-quality and stylish furniture pieces. With a focus on craftsmanship, durability, and aesthetic appeal, SR Furnitures offers a wide range of furniture products to enhance and beautify your living spaces. From sofas and chairs to tables and storage solutions, SR Furnitures combines functionality and design to create furniture that meets the diverse needs and preferences of customers. With a commitment to excellent customer service and a passion for creating beautiful interiors, SR Furnitures aims to provide customers with the perfect furniture solutions for their homes or commercial spaces.</p>

                    </Container>



                </div>

            </div><br/><br/>
       
            <div className={`slide-in ${slideIn ? 'active' : ''}`}>
           <h4 className='brand-h1'>Brands we are Dealing</h4>
        <img src={top} className='img15'></img>
    </div>


<div className="foot">
&nbsp;<h6>  &nbsp;Follow us &nbsp;&nbsp;&nbsp; <i class="bi bi-instagram"></i>&nbsp;&nbsp;<i class="bi bi-facebook"></i>&nbsp;&nbsp;<i class="bi bi-twitter"></i></h6>

<br/>
<b > Our Locations</b>
<br/>
<div className="row">
    <div className="foot-tnagar">
    <p className='num-home'>T.Nagar
No 25, Thirumalai Pillai Road, <br/>T Nagar, Chennai - 600017<br></br>
Time: 10AM – 8PM<br/><br/>
<a href="https://goo.gl/maps/wucGHHx6vsYhpvWz6"><img src={map}  className='map' /></a></p>
    </div>



    <div className="foot-vela">
    <p className='num-home'>Velachery
No 1, 2nd Main Road Venkateshwara Nagar,<br/> Velachery, Chennai - 600042<br/>
Time: 11AM – 9PM<br/><br/>
<a href="https://goo.gl/maps/wucGHHx6vsYhpvWz6"><img src={map} className='map' /></a></p>
    </div>




<div className="foot-anna">
<p className='num-home'>Annanagar
No 68/2 AD Block 2nd Street, Opposite to Hotel Sree Akshayam,<br/> Shanthi colony, Anna Nagar, Chennai - 600040.<br/>
Time: 11AM – 9PM<br/>
<br/>
<a href="https://goo.gl/maps/wucGHHx6vsYhpvWz6"><img src={map} className='map'/></a></p>

</div>


</div>
<p>
<b>Contact us: </b><br/>
Call us Now: &nbsp;&nbsp;
<b className='num-home'>+91 9790 091 333
+91 7667 111 333</b><br/>
EMAIL US  : &nbsp;&nbsp;
<b className='num-home'>sales@srinifurnishing.com</b>
</p>





    </div>



    </div>
  )
}

export default Home