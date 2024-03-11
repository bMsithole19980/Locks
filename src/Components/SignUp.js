import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="container">
      <h2>
        Welcome to <span>Reliable-lock</span>{" "}
      </h2>
      <span className="second">
        Secure your Home , Apartment , and business with just a call away or simple shake your phone
      </span>
      <div className="forum">
        <div className="icons">
          <div className="google-icon">
           
          </div>
          <div className="facebook-icon">
            
          </div>
          
        </div>
        <div className="forum">
            <label>Email</label>
            <br/>
            <input type="text" placeholder="Enter your email..." />
            <br/>
            <label>Password</label>
            <br/>
            <input type="Password" placeholder="Enter your password..." />
            <br/>
          </div>
      </div>
      <div className="check">
        <label>

          
            <input type="checkbox"/>
            Remember me
        </label>
        <span>Forgot Password ?</span>
      </div>
      <button>
        <span>Sign Up</span>
      </button>
      <h5>Already have an account ? <span> Sign in</span></h5>
    </div>
  );
}

export default SignUp;
