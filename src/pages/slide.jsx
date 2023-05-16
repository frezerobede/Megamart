import React from 'react'
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
const Slide = () => {
  return (
   <div className='bg-hero-pattern bg-cover  border-4 h-48  m-10 py-6  rounded-lg border-blue-600 '>
      <div className='flex justify-between items-center '> 
      <NavigateBeforeOutlinedIcon className='bg-white text-blue-600 font-bold rounded-full'/>
      <div className='flex w-full mx-6 py-3 justify-between sm:flex sm:py-6'>
      <div className="text-blue-600 pl-6">
              <p className='text-white'>
              Best Deal Online on smart watches <br />
              <b className='font-bold'>SMART WEARABLE.</b> <br />
              
              up to 80% OFF </p>
          </div>
          <div className="pr-6">
          <img className=' h-16 w-16' src="https://www.pngmart.com/files/13/Smartwatch-PNG-Image.png" alt="watches" />  
          </div>
      </div>
      <NavigateNextOutlinedIcon className='bg-white text-blue-600 rounded-full'/>
      </div>
      <div className='flex pl-20 justify-start gap-1' >
          <p className='bg-white w-4 cursor-pointer h-2 rounded-lg items-center'></p>
          <p className='bg-white w-2 cursor-pointer rounded-full h-2'></p>
          <p className='bg-white w-2 cursor-pointer rounded-full h-2'></p>
          <p className='bg-white w-2 cursor-pointer rounded-full h-2'></p>
          <p className='bg-white w-2 cursor-pointer rounded-full h-2'></p>
          <p className='bg-white w-2 cursor-pointer rounded-full h-2'></p>
          <p className='bg-white w-2 cursor-pointer rounded-full h-2'></p>
      </div>   
      </div>
  )
}

export default Slide;