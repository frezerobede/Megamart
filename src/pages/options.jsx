import React from 'react'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const Options = () => {
  return (
    <div className='flex flex-wrap gap-2  justify-between text-slate-600 rounded-lg   my-4 px-10 '>
    <div className='flex bg-blue-500 rounded-xl p-1 h-7  items-center text-white '>
        <span>Groceries</span>
        <ExpandMoreOutlinedIcon/>
    </div>
  
    <div className='flex bg-slate-200 rounded-xl p-1 h-7 items-center'>
        <h1>Premium Fruits</h1>
        <ExpandMoreOutlinedIcon className='text-blue-500'/>
    </div>
 
    <div className='flex bg-slate-200 rounded-xl p-1 h-7 items-center'>
        <h1>Home & Kitch</h1>
        <ExpandMoreOutlinedIcon className='text-blue-500' />
    </div>
    <div className='flex bg-slate-200 rounded-xl p-1 h-7 items-center'>
    <h1>Fashion</h1>
        <ExpandMoreOutlinedIcon className='text-blue-500'/>
    </div>
    <div className='flex bg-slate-200 rounded-xl p-1 h-7 items-center'>
    <h1>Electronics</h1>
        <ExpandMoreOutlinedIcon className='text-blue-500' />
    </div>
    <div className='flex bg-slate-200 rounded-xl p-1 h-7 items-center'>
    <h1>Beauty</h1>
        <ExpandMoreOutlinedIcon className='text-blue-500' />
    </div>
    <div className='flex bg-slate-200 rounded-xl p-1 h-7 items-center'>
    <h1>Home Improvement</h1>
        <ExpandMoreOutlinedIcon className='text-blue-500'/>
    </div>
    <div className='flex bg-slate-200 rounded-xl p-1 h-7 items-center'>
    <h1>Sports, Toys & Luggage</h1>
        <ExpandMoreOutlinedIcon className='text-blue-500'/>
    </div> 
    
      
    </div>
  )
}

export default Options;