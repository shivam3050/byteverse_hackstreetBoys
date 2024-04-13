import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from './assets/logo photo-bg.jpg'
import whatsappicon from './assets/whatsapp-icon.png'
import babyphoto from './assets/baby photo.avif'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './components/registration'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import {FaBeer} from 'react-icon/fa'
function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='outer-container mt-24'>
        
        {/* Container-1 Navbar */}
        
     


      {/* Container-2 Baby Image*/}
      <div className="container-2">
         <div className="baby-big-image">
             <img className="xyz"src={babyphoto} alt="Baby-photo" />
           <div className="need-funds-heading-main">
             <div className="need-funds-heading">
                <h1>Need Funds to Pay For a Medical Emergency or Social Cause?</h1>
             </div>
             <div className="plateform-donor-fundraiser">
                <div className="plateform-0">
                    <div className="percentage">
                      <p>0%</p>
                    </div>
                    <div className="plateform-fee">
                      <p>PLATEFORM FEE</p>
                    </div>
                </div>
                <div className="donor-72">
                   <div className="percentage">
                      <p>72 Lakh+</p>
                    </div>
                    <div className="plateform-fee">
                      <p>DONORS</p>
                    </div>
                </div>
                <div className="fundraisers-3-2">
                   <div className="percentage">
                      <p>3.2Lakh+</p>
                    </div>
                    <div className="plateform-fee">
                      <p>FUNDRAISERS</p>
                    </div>
                </div>
             </div>
             <div className="life-raiserfee">
              <p>Life Raiser's 0% Plateform Fees ensures maximum for you</p>
              <Link className='bg-green-600 rounded-md text-white p-2 m-2' to= "signup" element ={<RegistrationForm />} >Lets Start the Fundraising</Link>
             </div>
             </div>
         </div>
      
      </div>
      </div>
    </>
  )
}

export default Home