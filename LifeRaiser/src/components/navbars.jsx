import React from "react";
import logo from '../assets/logo photo-bg.jpg'
import whatsappicon from '../assets/whatsapp-icon.png'
import { Link } from 'react-router-dom'
import SignIn from "./signin";

function Navbar() {
    return(
        <>
        <div className="container-1 fixed top-0">
          <div className="container-sub-1">
             <div className="container-sub-1-of-sub-1">
              <img src={logo} alt="My-logho"className="my-logo" />
             </div>
             <div className="container-sub-2-of-sub-1">
              <p>Browse Fundraisers</p>
             </div>
             <div className="container-sub-3-of-sub-1">
              <select name="choose" id="choose">
                <option value="#">Fundraise For</option>
                <option value="a">Medical Treatment</option>
                <option value="b">NGO/Charity</option>
                <option value="c">Other Cause</option>
            </select>
             </div>
             <div className="container-sub-4-of-sub-1">
              <p>How It Works</p>
             </div>
             <div className="container-sub-4-of-sub-1">
              <p>|</p>
             </div>
             <div className="search-icon">
              <p>Search</p>
             </div>
          </div>
          <div className="container-sub-2">
            <div className="whatsapp-fundraiser-sign">
                <div className="sub-2-whatsapp-icon">
                    <img src={whatsappicon } alt="contact" />
                </div>
                <div className="sub-2-fundraiser">
                    <p>Start a Fundraiser</p>
                </div>
                {/* <div className="sub-2-sign"> */}
                
                <Link className='sub-2-sign ' to= "signin" element ={<SignIn />} >Lets Start Signing in</Link>

                {/* </div> */}
              </div>
          </div>
        </div>
        </>
    )
};

export default Navbar;