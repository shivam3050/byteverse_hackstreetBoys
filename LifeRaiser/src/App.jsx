import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from './assets/logo photo-bg.jpg'
import whatsappicon from './assets/whatsapp-icon.png'
import babyphoto from './assets/baby photo.avif'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import viteLogo from '/vite.svg'
import Home from "./Home"
import './App.css'
import RegistrationForm from './components/registration'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import {FaBeer} from 'react-icon/fa'
import Navbar from "./components/navbars.jsx";
import SignIn from './components/signin.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="relative min-w-max">
         <BrowserRouter>
         <Routes>
           
               <Route path="/" element={
                     <div className=""> 
                     <Navbar />
                     <Outlet />
                     </div>
                     }>
               <Route index element={<Home />} />
               <Route path='signup' element={<RegistrationForm />} />
               <Route path='signin' element={<SignIn />} />
               

       
               </Route>
          </Routes>
        </BrowserRouter>
</div>
    </>
  )
}

export default App
