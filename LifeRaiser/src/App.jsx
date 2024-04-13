import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from './assets/logo photo-bg.jpg'
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
        <div className="container-1">
          <div className="container-sub-1">
             <div className="container-sub-1-of-sub-1">
              <img src={logo} alt="My-logho"className="my-logo" />
             </div>
             <div className="container-sub-2-of-sub-1">
              <p>Browse Fundraisers</p>
             </div>
             <div className="container-sub-3-of-sub-1">
              <p>Fundraise For</p>
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

          </div>
        </div>
      </div>
    </>
  )
}

export default App
