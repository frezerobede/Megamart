import React from 'react'
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Menubar = () => {
  return (
   
    
    <div className="grid grid-flow-col  items-center justify-stretch my-4 px-10 gap-2">
    
        <div className=" ">
            <a className='cursor-pointer gap-2 text-blue-500 flex '>
            <SortOutlinedIcon/>
              <h1 className='font-bold'>
                MegaMart
              </h1>
            </a>
        </div>
    <div className='flex gap-2'>
        <div className='flex flex-1 gap-2'>
          <SearchOutlinedIcon className='text-blue-500 cursor-pointer' />
          <input type="text" className='w-full px-2 outline-blue-500'  placeholder='Search essentials, groceries and more...'/>
          <ListOutlinedIcon className='text-blue-500 cursor-pointer' />
        </div>
        <div className='hidden sm:flex  justify-stretch gap-2 divide-x-4'>
          <a className='sm:flex gap-2 cursor-pointer'>
            <PersonOutlineOutlinedIcon className='text-blue-500' />
            <h2 className=' text-gray-600'>Sign Up/Sign In</h2>
          </a>
          <a className='hidden md:flex pl-2 '> 
            <ShoppingCartOutlinedIcon  className='text-blue-500'/>
            <h2 className=' text-gray-600'>Cart</h2>
          </a>
        </div>
    </div>

    </div>
 
  )
}

export default Menubar;