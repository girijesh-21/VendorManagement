import React from "react";
import './Signup.css'
import { Link } from "react-router-dom";
function Signup(){

    return (
        <div className="App">
         
          <div className="login-containe">
           
            <h2>Signup</h2>
            <form>
              
              <input type="text" placeholder="First Name" required /><br />
              <input type="text" placeholder="Last Name" required /><br />
              <input type="text" placeholder="E-Mail" required /><br />
              <input type="text" placeholder="Mobile Number" required /><br />

              <input type="password" placeholder="Enter your Password" required /><br />
              <input type="password" placeholder="Re-Enter your Password" required /><br />
              <button type="submit">
                <Link to="/Login" className="sign">Sign in</Link></button>
            </form>
          </div>
        </div>
      );
}

export default Signup;