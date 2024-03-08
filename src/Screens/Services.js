import React from "react";
import "./Services.css";
import NavBar from "../Components/NavBar";
import reliable from "../assets/reliable.jpg";
import Footer from "../Components/Footer";
import sec3 from '../assets/Sec4.jpg';

function Services() {
  return (
    <div className="services">
      <NavBar />
      <h1>
        Elevate Your Security with <span>Reliable Solutions</span>
      </h1>
      <h3>
        At Reliable Security Services, we understand that security is not just a
        service; it's a commitment to your peace of mind. Our comprehensive
        range of professional security solutions is designed to safeguard what
        matters most to you – ensuring a secure and protected environment.
      </h3>

      <div className="boxes">
        <div className="box1">
          <img src={reliable} alt="pictureasa" />
          <h4>Private Investigation services</h4>
          <span>
            Our private investigation services are conducted by highly skilled
            professionals dedicated to uncovering the truth. We employ advanced
            techniques and adhere to strict ethical standards to provide you
            with accurate and reliable results. Whether you need surveillance,
            background checks, or intelligence gathering, our team is committed
            to delivering trustworthy and confidential investigations.
          </span>
          <button>Know More</button>
        </div>
        <div className="box1">
          <img src={reliable} alt="row"/>
          <h4>Armed Security Guards</h4>
          <span>
            Our armed security guards are highly trained professionals equipped
            to handle various security challenges. With a focus on ensuring the
            safety of your premises, our guards undergo rigorous training in
            conflict resolution, emergency response, and situational awareness.
            Trust us to provide a visible and effective security presence,
            deterring potential threats and ensuring a secure environment.
          </span>
          <button>Know More</button>
        </div>{" "}
        <div className="box1">
          <img src={reliable} alt="sdd"/>
          <h4>Private Investigation services</h4>
          <span>
            cjhdffs s adb uadbv udabvjhs uhabsj cuaj causbj hujs usbvu vdauv u
            uc cu hcujs cduaj ahdcj hd usbhc uas s asfvuosadvphb C IASNASB Abhvs
            cadjhsbvih aLBv uja iciasvubvuibv sioisbchjdsbidskhcniahj
          </span>
          <button>Know More</button>
        </div>
        <div className="box1">
          <img src={reliable}alt="szv" />
          <h4>Private Investigation services</h4>
          <span>
            Explore our comprehensive range of services designed to meet your
            unique security needs. Our commitment to excellence ensures that you
            receive top-notch solutions tailored to your requirements. From risk
            assessments to advanced security technologies, we've got you
            covered.
          </span>
          <button>Know More</button>
        </div>
      </div>
      <div className="Experts">
        <h1>
          Our <span>Expects</span>
        </h1>
        <div className="exper1">
          <div className="one">
            <img src={reliable} alt="Bongani" />
            <h4>
              Simon <span>Mahuma</span>
            </h4>
            <h3>
              With over a decade of experience in security management, Bongani
              Maxwell is a seasoned professional dedicated to ensuring the
              safety and well-being of our clients. His expertise in risk
              assessment and strategic planning has proven invaluable in
              creating secure environments for businesses and individuals alike.
            </h3>
          </div>
          <div className="one">
            <img src={reliable} alt="Bongani" />
            <h4>
              John <span>Van Wyk</span>
            </h4>
            <h3>
              As a highly skilled security expert, [Another Expert's Name]
              brings a wealth of knowledge in the latest security technologies
              and protocols. With a commitment to staying ahead of emerging
              threats, [Another Expert's Name] plays a crucial role in ensuring
              our clients receive cutting-edge security solutions tailored to
              their specific needs.
            </h3>
          </div>
          <div className="one">
            <img src={reliable} alt="Bongani" />
            <h4>
              Bongani <span>Maxwell</span>
            </h4>
            <h3>
              {" "}
              Meet [Yet Another Expert's Name], a dedicated security
              professional known for their meticulous approach to security
              planning and implementation. With a focus on continuous
              improvement, [Yet Another Expert's Name] ensures that our clients
              benefit from the highest standards of safety and protection.
            </h3>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <h1>Our Customer Testimonial</h1>
        <div className="mixes">
          <div className="outer">
            <img src={reliable} alt="relai" />
            

            <div className="middle">
              <h4>Great work</h4>
              <h5>
                {" "}
                I had the pleasure of working with Reliable Security Services,
                and they exceeded my expectations. Their team is highly
                professional and committed to ensuring the safety of their
                clients. From their thorough risk assessments to their prompt
                response in emergencies, I highly recommend their services.
                Thank you for your outstanding work!
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="Concern">
        <h1>
          Let Us Know <span>Your Concern</span>
        </h1>
        <div className="columns">
          <div className="img-left">
            <img src={sec3} alt="guard" />
          </div>
          <div className="img-right">
            <h3>What do yo expect from now on ?</h3>
            <label>
              <input type="checkbox" />
              full-time consultaaa
            </label>
            <br />
            <label>
              <input type="checkbox" />
              full-time consultaaa
            </label>
            <br />
            <label>
              <input type="checkbox" />
              full-time consultaaa
            </label>
            <br />
            <label>
              <input type="checkbox" />
              full-time consultaaa
            </label>
            <br />
            <label>
              <input type="checkbox" />
              full-time consultaaa
            </label>
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
