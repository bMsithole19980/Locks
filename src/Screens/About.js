import React from "react";
import './About.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

function About() {
  return (
    <div className="about">
        <NavBar/>
        <h1>More About <span>Reliable-lock</span></h1>
        <div className="more">
          <div className="">
            <h2>Hi there </h2>
          </div>
        </div>

     <Footer/>
    </div>
  );
}

export default About;
