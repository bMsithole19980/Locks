import React from 'react';
import './Testimony.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Sec1 from '../assets/Sec2.jpg';



function Testimony() {
  return (
    <div className='Testimony'>
        <NavBar/>
        <h1>Weatness <span>Our </span>Greatness <span>Services</span></h1>
        <h3>Over 5 years of quality services provided in gauteng province. We have recieved a 80 of the 5 star rating from our services through our mail and reviews board. Our services  has hasa lead to quality and safety of human kind and community . We values our costomer suggestion and learn from yous as our major priority</h3>
        <div className='images'>
            <h4>Our Gallery for our services , customers and  partners</h4>
            <div className='pictures'>
                <img src={Sec1} alt='bike'/>
                <img src={Sec1} alt='bike'/>
                <img src={Sec1} alt='bike'/>
                <img src={Sec1} alt='bike'/>
            </div>

            <div className='Partners'>
                <h2>Security Guards On Duty</h2>
                <div className='Partners-img'>
                <img src={Sec1} alt='bike'/>
                <img src={Sec1} alt='bike'/>
                <img src={Sec1} alt='bike'/>
                <img src={Sec1} alt='bike'/>
                </div>
            </div>
        </div>
        
        <Footer/>
      
    </div>
  );
}

export default Testimony;
