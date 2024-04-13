import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from './assets/logo photo-bg.jpg'
import whatsappicon from './assets/whatsapp-icon.png'
import babyphoto from './assets/baby photo.avif'
import viteLogo from '/vite.svg'
import './App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import {FaBeer} from 'react-icon/fa'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='outer-container'>
        
        {/* Container-1 Navbar */}
        <div className="container-1">
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
                <div className="sub-2-sign">
                   <p>Sign In</p>
                </div>
              </div>
          </div>
        </div>
      </div>


      {/* Container-2 Baby Image*/}
      <div className="container-2">
         <div className="baby-big-image">
          <img src={babyphoto} alt="Baby-photo" />
          <div className="need-funds-heading">
            <h1>Need Funds to Pay For a Medical Emergency or Social Cause?</h1>
          </div>
         </div>
      </div>
    </>
  )
}

export default App
