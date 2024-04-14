import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from './assets/logo photo-bg.jpg'
import whatsappicon from './assets/whatsapp-icon.png'
import babyphoto from './assets/baby photo.avif'
import babyphotos from './assets/baby photo-3.avif'
import Autoplayvideo from './assets/screen_recording.mp4'
import starticon from './assets/start-icon.png'
import shareicon from './assets/share-icon.png'
import withdrawicon from './assets/withdraw-icon.png'
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
             <br />
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
             <br />
             <div className="life-raiserfee">
              <p>Life Raiser's 0% Plateform Fees ensures maximum for you</p>
              <Link className='bg-green-600 rounded-md text-white p-3 mt-2 font-bold' to= "signup" element ={<RegistrationForm />} >Lets Start the Fundraising</Link>
              <p>नि: शुल्क फंडरेजर शुरु करे </p>
             </div>
             </div>
         </div>
      
      </div>


      {/* Container-3 Card float*/}
        <div className="container-3">
             <div className="float-donate-monthly-image">
                 <div className="donate">
                  Donate Now 
                 </div>
                 <div className="monthly-donation-text">
                      <div className="monthly-donation">
                         <h3>Start Monthly Donation to Save Lives</h3>
                      </div>
                      <div className="text">
                        <p>With your support, countless children will recieve health care and a happy life.
                           Start your monthly donation today</p>
                      </div>
                 </div>
                 <div className="image">
                  <img src={babyphotos} alt="baby-image-3" />
                 </div>
             </div>

             
             <div className="trending-fundraiser">
                 <h1>Trending Fundraisers</h1>
                 <p>View the fundraisers that are most active right now</p>
             </div>
             
             {/* Cards */}
             <div className="all-card">
                 <div className="card">
                     <div className="sub-card-1">
                      <img src={babyphotos} alt="card-1" />
                     </div>
                     <div className="sub-card-1">
                      <p>School for speciaL needs</p>
                     </div>
                     <div className="sub-card-1">
                      <p>by Minhaj Interfaith and welfare found...</p>
                     </div>
                     <div className="sub-card-1">
                      <p>₹27,29,627 raised out of ₹30,00,000</p>
                     </div>
                     <div className="sub-card-1">
                      
                     </div>
                 </div>
                 <div className="card"></div>
                 <div className="card"></div>
             </div>
        </div>


      {/* Container-4 */}
      <div className="container-4">
          <div className="three-simple-steps">
             <h2>Start a Fundeaiser in three simple steps</h2>
          </div>
          <div className="three-step-mobile">
              <div className="three-step">
                  <div className="start-icon-text">
                       <div className="start-icon">
                           <img src={starticon} alt="start-icon" />
                       </div>
                       <div className="start-head-and-text ml-1.5">
                           <div className="start">
                              <h3>Start your fundraiser</h3>
                           </div>
                           <div className="start-text">
                              <p>It'll take only 2 minutes. Just tell us a few details 
                               about you and the ones you are raising funds for.
                              </p>
                           </div>
                       </div>
                      
                 </div>
                  <br />
                  <br />
                  <br />
                  <div className="start-icon-text">
                       <div className="start-icon">
                           <img src={shareicon} alt="share-icon" />
                       </div>
                       <div className="start-head-and-text ml-1.5">
                           <div className="start">
                              <h3>Share your fundraiser</h3>
                           </div>
                           <div className="start-text">
                              <p>All you need to do is share the fundraiser with your 
                                friends and family. In no time, support will start pouring in.
                              </p>
                              <br />
                              <p className='text-sm'>Share your fundraiser directly from dashboard on social media.</p>
                           </div>
                       </div>
                      
                 </div>
                  <br />
                  <br />
                  <br />
                  <div className="start-icon-text">
                       <div className="start-icon">
                           <img src={withdrawicon} alt="start-icon" />
                       </div>
                       <div className="start-head-and-text ml-1.5">
                           <div className="start">
                              <h3>Withdraw Funds</h3>
                           </div>
                           <div className="start-text">
                              <p>The funds raised can be withdrawn without any hassle directly 
                                to your bank account.
                              </p>
                              <br />
                              <p className='text-sm'>It takes only 5 minutes to withdraw funds on Life Raiser</p>
                           </div>
                       </div>
                      
                 </div>
              </div>
              <div className="mobile">
                <video autoPlay muted className='w-80  h-90'>
                  <source src={Autoplayvideo} />
                </video>
              </div>
          </div>
      </div>


      {/* Control-5 */}
      <div className="container-5"> 
        <div className="fund--talk">
          <div className="start-fund-and-talk-button">
             <div className="start-fund-button">
                 <p>START A FUNDRAISER FOR FREE</p>
             </div>
             <div className="talk-button">
                <p>TALK TO US</p>
             </div>
          </div>
          </div>
        
      </div>
    </div>
    </>
  )
}

export default Home