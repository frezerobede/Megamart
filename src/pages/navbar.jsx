import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

const Navbar = () => {
  return (
    <div className=" flex  bg-slate-100  justify-between py-2 px-10">
    <p className="">Welcome to worldwide Megamart!</p>
    <div className="flex   text-gray-600 divide-x-2 ">
      <div  className="cursor-pointer hidden gap-1 px-2  sm:flex">
      <FmdGoodOutlinedIcon className="text-blue-500"/>
      <p>Deliver to <b>423651</b></p>
      </div>
      <div className="cursor-pointer hidden gap-1 px-2 md:flex">
      <LocalShippingOutlinedIcon className="text-blue-500"/>
      <p>Track your order</p>
      </div>
      <div className="flex cursor-pointer gap-1 px-2">
      <ExploreOutlinedIcon className="text-blue-500"/>
      <p>All Offers</p>
      </div>
    </div>
    </div>
  )
}

export default Navbar;