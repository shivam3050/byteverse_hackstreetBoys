

import React, { useState } from 'react';

function RegistrationForm() {



  

  return (
    <div className=''>
      <div className='flex justify-start mb-1'>
        <select className='border-2 rounded-lg p-2'>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>
      <div className='signupdiv w-96 rounded-lg bg-zinc-300'>
        <h2 className='font-bold border-b-2 py-2'>Start the fundraiser</h2>
        <div className="belowheading">
          <div className='flex justify-center'>
            <div className="w-10/12 rounded-xl bg-zinc-50 my-4 py-2">
              Why promoting funds is important
            </div>
          </div>
          <div className="inputs">
            <div className='flex flex-col m-8'>
              <input className='border-b-2 border-zinc-300 text-sm' type="text" name="" id="requiredName" placeholder='Name*'/>
              <label className='flex justify-start text-xs text-zinc-400' htmlFor="requiredName">Name which is mentioned in your Aadhar Card</label>
            </div>
            <div className='flex flex-col m-8'>
              <input className='border-b-2 border-zinc-300 text-sm' type="text" name="" id="requiredName" placeholder='Email Address*'/>
            </div>
            <div className='flex flex-col m-8'>
              <input className='border-b-2 border-zinc-300 text-sm' type="text" name="" id="requiredName" placeholder='Create a Password*'/>
            </div>
            <div className='flex flex-col m-8'>
              <div className='border-b-2 text-sm'>
                <select>
                  <option value="">India</option>
                  <option value="">Pakistan</option>
                  <option value="">China</option>
                </select>
                <input type="text" name="" id="" placeholder='Mobile*'/>
              </div>
            </div>
            <div className='m-6 text-sm'>
              Already have an account?<span className='text-blue-400'> Login</span>
            </div>
            <div className="bg-cyan-300 text-white font-bold py-2">
              Next step
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default RegistrationForm;
