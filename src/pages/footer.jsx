import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className='bg-blue-400 flex justify-between mt-6'>
    <div className='p-8 flex justify-between gap-2' >
      <div className='text-white '>
        <h1 className='font-bold text-lg'>MegaMart</h1>
        <div>
          <h2 className='text-sm'>Contact Us</h2>
          <span className='text-sm gap-2'>
          <i  class="uil uil-whatsapp"></i> Whats App
          </span>
          <p className='text-sm cursor-pointer'>+1 202-918-2132</p>
          <span className='text-sm'>
          <i  class="uil uil-incoming-call"></i> Call Us
          </span>
          <p className='text-sm cursor-pointer'>+1 202-918-2132</p>
        </div>
        <div className='my-2'>
          <h1>Download App</h1>
          <div className='mt-3 '>
          <img className=' w-72 md:w-32 cursor-pointer' src='https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png'/>
          </div>
        </div>

      </div>
      <div className="text-white hidden lg:block mr-4">  
      <h2 className='underline'>Most Popular Categories</h2>
      <li>Stapes</li>
      <li>Beverages</li>
      <li>Personal Care</li>
      <li>Home Care</li>
      <li>Baby Care</li>
      <li>Vegetables & Fruits</li>
      <li>Snacks & Foods</li>
      <li>Dairy & Bakery</li>
      </div>
      <div className="text-white hidden md:block  mr-4 mb-2">
        <h2 className='underline'>Customer Services</h2>
        <li className=''>About Us</li>
        <li className=''>Terms & Conditions</li>
        <li>FAQ</li>
        <li>Privacy Policy</li>
        <li>E-waste Policy</li>
        <li>Cancellation & Return Policy</li>
      </div>
      </div>
      <div className='pr-10 pt-6 '>
      <label className='m-1 text-white'> 
       Full Name:<br/> <input className='m-2 text-black w-64' type="text" placeholder='Enter your name' />
      </label>
      <br/>
      <label className='m-1 text-white'> 
       Your Email:<br/> <input className='m-2 text-black w-64' type="email" placeholder='Type your email' />
      </label><br/>
      <label className='m-1 text-white'> 
       Message:<br/>
              <textArea  placeholder='Send us a message' className='m-2 text-black ' rows="4" cols="33"/>
      </label><br/>
      <label className='m-1'> 
        <input  type="submit" className='justify-center bg-gray-600 p-1 w-64 m-2 rounded-md text-white cursor-pointer hover:bg-black' />
      </label>
    </div>
    </div>
    <div className='bg-blue-400 text-center hover:text-gray-300 text-white py-6'>
      © {new Date().getFullYear()} All rights reserved. Reliance Retail Ltd.
    </div>
  </div>
  )
}

export default Footer;