import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="containerr">

      <div className="hori">
        <div className="hr">
          <hr/>
        </div>
        <div className="text">
          <h3>Reliable-lock</h3>
        </div>
        <div className="hr2">
          <hr/>
        </div>
      </div>
      <div className="content">
      <div className="left-side">
        <span>Reliable-lock</span>
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>About Us</span>
        <span>Legal</span>
      </div>
     
      <div className="right-side">
        <span>Reliable-lock</span>
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>About Us</span>
        <span>Legal</span>
      </div>
      </div>
    
      <div className="search">
        <input  placeholder="Search here.."/>
        <button >Submit</button>
        
      </div>
     
      {/* <div className="line">
        <div className="lines">
          <hr />
        </div>
        <div className="name">
          <h1>Reliable</h1>
        </div>
        <div className="line2">
          <hr />
        </div>
      </div>
      <div className="reliable-blog">
        <div className="left-section">
          <h1> Reliable Locks</h1>
          <h1>Legal</h1>
          <h1>Privacy policy</h1>
          <h1>Terms and conditions</h1>
          <h1>About us</h1>
        </div>
        <div className="right-section">
          <h1>Home</h1>
          <h1>Navigation</h1>
          <h1>Blog</h1>
          <h1>Calculate</h1>
          <h1>Our Team</h1>
        </div>
      </div>
      <div className="icons">
        <input className="email" placeholder="Email" />
        <button className="subscribe">
          <h2>Subscribe</h2>
        </button>
      </div> */}
    </div>
  );
}

export default Footer;
