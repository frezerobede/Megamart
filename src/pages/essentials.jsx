import React from 'react'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const Essentials = () => {

  return (
    <div>
    <div className='flex justify-between px-10 mb-6'>
      <h1 className='underline underline-offset-4 decoration-blue-400'>Daily <b className='text-blue-400 font-bold'>Essentials</b></h1>
      <span className='cursor-pointer'>View All <KeyboardArrowRightOutlinedIcon className='text-blue-400'/> </span>
    </div>
    <div className='grid grid-cols-3 sm:gid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 justify-between px-10 sm:gr'>
      <div className='cursor-pointer ml-2 w-36  text-center'>
      <div className="w-32 h-32 hover:bg-yellow-100 bg-gray-50 border-2 ml-2 mt-2 pt- pt-2 pl-6 rounded-lg border-blue-500">
        <img src="https://www.pngarts.com/files/11/Mix-Fruit-Transparent-Image.png" alt="" className="w-20 h-20 " />
      </div>
      <p className="text-xs">Daily Essentials <br/>
      <b className='text-sm'>Up to 50% OFF</b>
      </p>
    </div>
    <div className='cursor-pointer ml-2 w-36  text-center'>
      <div className="w-32 h-32 hover:bg-yellow-100 bg-gray-50 border-2 ml-2 mt-2 pt- pt-2 pl-6 rounded-lg ">
        <img src="https://www.freepnglogos.com/uploads/vegetables-png/fruit-and-vegetables-basket-png-20.png" alt="" className="w-20 h-20 " />
      </div>
      <p className="text-xs">Vegetables <br/>
      <b className='text-sm'>Up to 50% OFF</b>
      </p>
    </div>
    <div className='cursor-pointer ml-2 w-36  text-center'>
      <div className="w-32 h-32 hover:bg-yellow-100 bg-gray-50 border-2 ml-2 mt-2 pt- pt-2 pl-6 rounded-lg ">
        <img src="https://static.vecteezy.com/system/resources/previews/008/848/372/original/fresh-red-strawberry-fruit-free-png.png" alt="" className="w-20 h-20 " />
      </div>
      <p className="text-xs">Strawberry <br/>
      <b className='text-sm'>Up to 50% OFF</b>
      </p>
    </div>
    <div className='cursor-pointer  ml-2 w-36  text-center'>
      <div className="w-32 h-32 hover:bg-yellow-100 bg-gray-50 border-2 ml-2 mt-2 pt- pt-2 pl-6 rounded-lg ">
        <img src="https://freepngimg.com/thumb/mango/9-2-mango-transparent.png" alt="" className="w-20 h-20 " />
      </div>
      <p className="text-xs">Mango <br/>
      <b className='text-sm'>Up to 50% OFF</b>
      </p>
    </div>
    <div className='cursor-pointer ml-2 w-36  text-center'>
      <div className="w-32 h-32 hover:bg-yellow-100 bg-gray-50 border-2 ml-2 mt-2 pt- pt-2 pl-6 rounded-lg ">
        <img src="https://www.freepnglogos.com/uploads/cherry-png/cherry-harvest-schedule-brecknock-orchard-mohnton-34.png" alt="" className="w-20 h-20 " />
      </div>
      <p className="text-xs">Cherry <br/>
      <b className='text-sm'>Up to 50% OFF</b>
      </p>
    </div>
     <div className='cursor-pointer ml-2 w-36  text-center'>
      <div className="w-32 h-32 hover:bg-yellow-100 bg-gray-50 border-2 ml-2 mt-2 pt- pt-2 pl-6 rounded-lg ">
        <img src="https://www.freepnglogos.com/uploads/fruits-png/ways-for-kids-eat-their-fruits-and-vegetables-13.png" alt="" className="w-20 h-20 " />
      </div>
      <p className="text-xs">Fruits <br/>
      <b className='text-sm'>Up to 50% OFF</b>
      </p>
    </div>
    </div>
    </div>
  )
}

export default Essentials;