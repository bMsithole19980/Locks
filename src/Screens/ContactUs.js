import React from 'react';
import './ContactUs.css';
import Camera from '../assets/Camera.jpg';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Map from '../assets/Reliablelock_Maps1.jpg'

function ContactUs() {
  return (
    <div className='contact-page'>
        <NavBar/>
        <h1>Contact<span> Us</span></h1>
        <div className='firstBlog'>
            <img src={Camera} alt='security'/>
            <h3>Smart , <span>Attentive</span> And <span>Reliable</span> Securirty <span>Services</span></h3>

        </div>
        <div className="columns">
          <div className="img-left">
            <img src={Map} alt="guard" />
          </div>
          <div className="img-rightt">
            <h2>Phone numbers</h2>
            <h3>+27 73069 3340</h3>

            <h2>Email</h2>
            <h3>info@reliable-lock.co.za</h3>
             
             <h2>Sales Enquiry</h2>
             <h3>sales@reliable-lock.co.za</h3>
            
            <h2>Address</h2>
            <h3>818 Milkwood St<br/> Ebony Park<br></br> Midrand <br/>1623</h3>
            
            <h2>Opening Time</h2>
            <h3>Office Hours: 08h00 - 17h30 </h3>
            <h3>Operating Hours: 24hrs</h3>
            
            <h2>Socials</h2>
            <div className='icons'>

            </div>
          </div>

        </div>

        <div className='form'>
          <div className='flexy'>
          <input  type='text' placeholder='First Name'/>
        <input type='text' placeholder='Last Name'/>
        
          </div>
      
        <input type='text' placeholder='Email Address'/><br/>
        <input type='text' placeholder='CellPhone Numbers'/><br/>
        <textarea type='text' placeholder='How may we assist you...'/>
        <br/>
        <button>
          <span>Submit</span>
        </button>
        </div>

        <div className='additional'>
          <h2>ADDITIONAL <span>CONTACT </span>CONTACT <span>INFO</span></h2>
          <div className='People'>
            <div className='peopleInfo'>
              <h4>CEO/COFOUNDER</h4>
              <h5>Simon Moribe</h5>
              <span>simon15@gamil.com</span>
            </div>
            <div className='peopleInfo'>
              <h4>General Manager</h4>
              <h5>Simon Moribe</h5>
              <span>simon15@gamil.com</span>
            </div>
            <div className='peopleInfo'>
              <h4>Technical Support</h4>
              <h5>Simon Moribe</h5>
              <span>simon15@gamil.com</span>
            </div>
            <div className='peopleInfo'>
              <h4>Supervisor</h4>
              <h5>Simon Moribe</h5>
              <span>simon15@gamil.com</span>
            </div>
            <div className='peopleInfo'>
              <h4>Driver</h4>
              <h5>Simon Moribe</h5>
              <span>simon15@gamil.com</span>
            </div>
            
          </div>
          <div className='buttomImage'>
            <img src={Map} alt='buttomImage'/>
          </div>
        </div>

      <Footer/>
    </div>
  );
}

export default ContactUs;
