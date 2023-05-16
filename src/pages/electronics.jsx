import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
const Electronics = () => {
  return (
    <div className='my-6'>
     <div className='flex my-6 justify-between px-10 '>
      <h1 className='underline underline-offset-4 decoration-blue-400'>Top <b className='text-blue-400 font-bold'>Electronics Brands</b></h1>
      <span className='cursor-pointer'>View All <KeyboardArrowRightOutlinedIcon className='text-blue-400'/> </span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-between px-10">
    <div className='flex hover:bg-blue-300 w-74 gap-1 p-4 rounded-lg bg-black justify-between'>
      <div className="">
      <p className='w-24 text-center mb-6 rounded-lg  bg-slate-300 '>
        IPHONE
      </p>
      <p className='w-10 h-10 mb-6 p-1 text-center rounded-lg  bg-slate-200 '>
        <AppleIcon/>
      </p>
      <h1 className='text-white'>Up to 80% OFF</h1>
      </div>
      <div className="">
        <img className='w-64 h-40' src="https://pngimg.com/d/iphone_14_PNG21.png" alt="" />
      </div>
    </div>
    <div className='flex w-74 hover:bg-slate-100 gap-1 p-4 rounded-lg bg-yellow-100 justify-between'>
      <div className="">
      <p className='w-24 text-center mb-6 rounded-lg  bg-yellow-200 '>
        REALME
      </p>
      <p className=' mb-6 w-14 text-center bg-yellow-300 '>
        realme
      </p>
      <h1 className=''>Up to 80% OFF</h1>
      </div>
      <div className="">
        <img className='w-64 h-40' src="https://www.pngall.com/wp-content/uploads/4/Realme-Transparent.png" alt="" />
      </div>
    </div>
    <div className='flex w-74 hover:bg-gray-200 gap-1 p-4 rounded-lg bg-red-100 justify-between'>
      <div className="">
      <p className='w-24 text-center mb-6 rounded-lg  bg-red-200 '>
        XIAOMI
      </p>
      <p className='w-20 h-10 mb-6 p-1 text-center rounded-lg  '>
        <img src="https://logos-world.net/wp-content/uploads/2020/07/Xiaomi-Logo.png" alt="" />
      </p>
      <h1 className=''>Up to 80% OFF</h1>
      </div>
      <div className="">
        <img className='w-64 h-40' src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1647849448.31929017.png" alt="" />
      </div>
    </div>
    </div> 
   <div className='hidden my-4 justify-center lg:flex gap-2' >
    <p className='bg-blue-700   cursor-pointer w-4 h-2 rounded-lg items-center'></p>
    <p className='bg-slate-400  cursor-pointer w-2 rounded-full h-2'></p>
    <p className='bg-slate-400  cursor-pointer w-2 rounded-full h-2'></p>
    <p className='bg-slate-400  cursor-pointer w-2 rounded-full h-2'></p>
    <p className='bg-slate-400  cursor-pointer  w-2 rounded-full h-2'></p>
    <p className='bg-slate-400  cursor-pointer w-2 rounded-full h-2'></p>
    <p className='bg-slate-400  cursor-pointer  w-2 rounded-full h-2'></p>
   </div> 
   
    </div>
  )
}

export default Electronics;