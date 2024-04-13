

import React, { useState } from 'react';

function RegistrationForm() {



  

  return (
    <div className="flex justify-center mt-24">
    <div className=''>
      <div className='flex justify-start mb-1'>
        <select className='border-2 rounded-lg p-2'>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>
      <div className='signupContainer my-2 border-x border-y w-96 rounded-lg bg-white'>
        <h2 className='font-bold border-b py-2 text-center'>Start the fundraiser</h2>
        <div className="belowheading">
          <div className='flex justify-center'>
            <div className="flex justify-center w-10/12 rounded-xl bg-zinc-200 my-4 py-2">
              Why promoting funds is important
            </div>
          </div>
          <div className="inputs">
            <div className='flex flex-col m-8'>
              <input required className='border-b border-zinc-300 text-sm py-2' type="text" name="" id="requiredName" placeholder='Name*'/>
              <label className='flex justify-start text-xs text-zinc-400' htmlFor="requiredName">Name which is mentioned in your Aadhar Card</label>
            </div>
            <div className='flex flex-col m-8'>
              <input className='border-b border-zinc-300 text-sm py-2' type="text" name="" id="requiredName" placeholder='Email Address*'/>
            </div>
            <div className='flex flex-col m-8'>
              <input className='border-b border-zinc-300 text-sm py-2' type="text" name="" id="requiredName" placeholder='Create a Password*'/>
            </div>
            <div className='flex flex-col m-8'>
              <div className='border-b text-sm flex justify-evenly'>
                <select className='py-2 w-1/6'>
                  <option value="">India</option>
                  <option value="">Pakistan</option>
                  <option value="">China</option>
                </select>
                <input className='py-2 w-5/6' type="text" name="" id="" placeholder='Mobile*'/>
              </div>
            </div>
            <div className='m-6 text-sm text-center'>
              Already have an account?<span className='text-blue-400'> Login</span>
            </div>
            <div className="rounded-b-lg bg-cyan-300 text-white font-bold py-2 text-center">
              Next step
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>
  );
}

export default RegistrationForm;
