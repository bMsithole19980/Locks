import React from "react";
import NavBar from "../Components/NavBar";
import "./HomeScreen.css";
import reliable from "../assets/reliable.jpg";
import Footer from '../Components/Footer'
import sec1 from '../assets/Sec2.jpg';


function HomeScreen() {
  return (
    <div className="contaiiner">
         <NavBar />
      <div className="img-sliders">
        <img src={reliable}  alt="scurity1"/>
        <h1>Reliable security Services</h1>
        <span>
        We deliver quality services to ensure the safety and security of your premises.
    Our team follows strict security protocols and provides quick and reliable assistance.
    With our advanced technology, you can easily request help by shaking your smartphone
    in case of emergencies. Your safety is our top priority.
        </span>
        <button>Hire Us</button>
      </div>
      

      <div className="Why">
        <h1>
          {" "}
          Why <span>choose us ?</span>{" "}
        </h1>
        <div className="flexes">
          <div className="col-1">
            <h3>
              We Provide Best Practise For security protocol standard Procedures
            </h3>
            <p>
 Our team of highly trained professionals is dedicated to providing the best
  security practices in the industry. We understand the importance of staying
  ahead of evolving security threats, and our experts regularly update our
  security protocols to ensure that you receive the highest level of protection.
            </p>
            <p>
              <span>
In addition to our commitment to security excellence, we prioritize
    transparency and open communication with our clients. You can trust us to
    keep you informed about the latest security advancements and tailor our
    services to meet your specific needs.
              </span>
            </p>
            <p>
               With Reliable Security Services, you are not just a client; you are a valued
  partner in creating a secure environment. Our unwavering dedication to
  excellence, combined with personalized service, sets us apart in the security
  industry. Choose reliability, choose security 
            </p>
            <div className="spans">
  <span>Ensuring your safety with cutting-edge technology and expert protocols.</span>
  <br />
  <span>Committed to transparency, keeping you informed about the latest security advancements.</span>
  <br />
  <span>Your security is our priority – choose reliability, choose us.</span>
  <br />
  <span>Striving for excellence in every security solution we provide.</span>
</div>
            <div className="btns">
              <button className="btn-1">Let's Chat</button>
              <button className="btn-2">Let's Chat</button>
            </div>
          </div>
          <div className="col-2">
            <img src={sec1} alt="security"/>
           
          </div>
        </div>
      </div>
      
      <div className="contacts">
        <h1><span> Contact </span> Us </h1>
        <div className=" format"> 
          <form className="us">
            <label>Email</label><br/>
            <input placeholder="Enter  email " /><br/>
            <label>Cell Number</label><br/>
            <input type="number" placeholder="+27 736 093 3340 " /><br/>
            <label>Message</label><br/>
            <textarea type="text" placeholder="Type message here..." />
            <br/>
            <button>Send Message</button>
          </form>
        </div>
      </div>
      <br/>
      <div></div>
      <Footer/>
    </div>

  );
}

export default HomeScreen;
