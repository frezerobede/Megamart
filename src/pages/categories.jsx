import React from 'react'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
const Categories = () => {
  return (
    <div>
     <div className='flex justify-between px-10 mb-6'>
      <h1 className='underline underline-offset-4 decoration-blue-400'>Shop from  <b className='text-blue-400 font-bold'>Top Categories</b></h1>
      <span className='cursor-pointer'>View All <KeyboardArrowRightOutlinedIcon className='text-blue-400'/> </span>
    </div>
      <div className='my-6 px-10  items-center grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 justify-between'>
        <div className='justify-center'>
        <div className="cursor-pointer hover:bg-slate-200 my-2 md:ml-6 sm:ml-8 pt-6 border-2 border-blue-300 rounded-full object-cover h-28 w-28 bg-white "> 
          <img className='w-28 h-24 pb-8' src="https://promotionemaroc.com/wp-content/uploads/2022/03/Samsung-Galaxy-M53-prix-maroc-Meilleur-prix.png" alt="" />
        </div>
        <h2 className='text-center mb-2'>Mobile</h2>
        </div>
    <div className='items-center'>
        <div className="cursor-pointer hover:bg-blue-200 my-2  pt-6 md:ml-6 sm:ml-8 rounded-full object-cover h-28 w-28 bg-gray-100"> 
          <img className='w-28 h-24 pb-8' src="https://freepngimg.com/save/166133-product-cosmetics-free-download-png-hq/1600x1150" alt="" />
        </div>
        <h2 className='text-center mb-2'>Cosmetics</h2>
        </div>
        <div className='items-center'>
        <div className="cursor-pointer hover:bg-blue-200 my-2 pt-6 md:ml-6 sm:ml-8 rounded-full object-cover h-28 w-28 bg-gray-100 "> 
          <img className='w-28 h-24 pb-8' src="https://www.freeiconspng.com/thumbs/chair-png/chair-png-30.png" alt="" />
        </div>
        <h2 className='text-center mb-2'>Electronics</h2>
        </div>
        <div className='items-center '>
        <div className="cursor-pointer hover:bg-slate-200 my-2 pt-6 md:ml-6 sm:ml-8 border-2 border-blue-600 rounded-full object-cover h-28 w-28 bg-white "> 
          <img className='w-28 h-24 pb-8' src="https://static.vecteezy.com/system/resources/previews/008/525/855/non_2x/remote-control-tv-isolated-png.png" alt="" />
        </div>
        <h2 className='text-center mb-2'>Furniture</h2>
        </div>
        <div className=' '>
        <div className="cursor-pointer hover:bg-blue-200 my-2 pt-6 md:ml-6 sm:ml-8 rounded-full object-cover h-28 w-28 bg-gray-100"> 
          <img className='w-28 h-24 pb-8' src="https://iosxpert.biz/wp-content/uploads/2020/09/51_applewatchsquare.png" alt="" />
        </div>
        <h2 className='text-center mb-2'>Watches</h2>
        </div>
        <div className=''>
        <div className="cursor-pointer hover:bg-blue-200 my-2 pt-6 md:ml-6 sm:ml-8 rounded-full object-cover h-28 w-28 bg-gray-100 "> 
          <img className='w-28 h-24 pb-8' src="https://www.pngarts.com/files/12/Black-Balaclava-Transparent-Image.png" alt="" />
        </div>
        <h2 className='text-center mb-2'>Decor</h2>
        </div>
        <div className=''>
        <div className="cursor-pointer hover:bg-blue-200 my-2 pt-6 md:ml-6 sm:ml-8 rounded-full object-cover h-28 w-28 bg-gray-100 "> 
          <img className='w-28 h-24 pb-8' src="https://pngimg.com/uploads/christmas/christmas_PNG17249.png" alt="" />
        </div>
        <h2 className='text-center mb-2'>Accessories</h2>
        </div> 
      </div>
      
    </div>
  )
}

export default Categories;