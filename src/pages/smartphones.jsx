import React from 'react'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
const Smartphones = () => {
  return (
    <div className='mb-6'>
    <div className='flex justify-between  px-10 mb-6'>
      <h1 className='underline underline-offset-4 decoration-blue-400'>Grab the best deal on <b className='text-blue-400 font-bold'>Smartphones</b></h1>
      <span className='cursor-pointer'>View All <KeyboardArrowRightOutlinedIcon className='text-blue-400'/> </span>
    </div>
    <div className=' grid grid-cols-2 gap-4 justify-between  px-10 sm:grid sm:grid-cols-3 md:grid md:grid-cols-4 lg:grid-cols-5'>
      <div className='bg-slate-200 hover:bg-blue-300 pt-6 cursor-pointer w-48 sm:w-40 rounded-lg border-2 relative overflow-hidden items-center border-slate-400'>
        <img className='w-40 h-32' src="https://www.telekom.de/resources/images/823098/samsung-galaxy-s22-5g-phantom-white-vorne-und-hinten.png" alt="" />
        <div className=' pl-4 bg-slate-100 divide-y-2 mt-2'>
            <h2 className='my-2'>Galaxy S22 Ultra
            <span className='flex gap-1'> <b>$32999</b> <p className='line-through'>$74999</p></span>
            </h2>
           
            <h2 className='text-green-600 font-bold'>Save - $32999</h2>
        </div>
        <div className='bg-blue-700 absolute top-0 right-0 justify-center rounded-bl-lg w-14 text-white'>
          <h3 className='text-center'>56% <br/> OFF</h3>
        </div>

      </div>
      
       <div className='bg-slate-200 hover:bg-blue-300 cursor-pointer w-48 sm:w-40 pt-6 rounded-lg border-2 relative overflow-hidden items-center border-blue-400'>
        <img className='w-64 h-32' src="https://images.samsung.com/is/image/samsung/p6pim/levant/sm-m135fzggmea/gallery/levant-galaxy-m13-sm-m135-428576-sm-m135fzggmea-thumb-533228168?$480_480_PNG$" alt="" />
        <div className='pl-4 bg-slate-100 divide-y-2 mt-2'>
            <h2 className='my-2'>Galaxy M13 (4GB|64GB)  <span className='flex gap-1'><b>$10499</b> <p className='line-through'>$14999</p></span>  </h2>
            <h2 className='text-green-600 font-bold'>Save - $4500</h2>
        </div>
        
        <div className='bg-blue-700 absolute top-0 right-0 justify-center rounded-bl-lg w-14 text-white'>
          <h3 className='text-center'>56% <br/> OFF</h3>
        </div>

      </div>
      <div className='bg-slate-200 hover:bg-blue-300 cursor-pointer w-48 sm:w-40 pt-6 rounded-lg border-2 relative overflow-hidden items-center border-slate-400'>
        <img className='w-64 h-32' src="https://images.samsung.com/is/image/samsung/p6pim/n_africa/sm-m336bzngmwd/gallery/n-africa-galaxy-m33-5g-sm-m336-sm-m336bzngmwd-531575401?$650_519_PNG$" alt="" />
        <div className='pl-4 bg-slate-100 divide-y-2 mt-2'>
            <h2 className='my-2'>Galaxy M33 <span className='flex gap-1'> <b>$16999</b> <p className='line-through'>$24999</p> </span> </h2>
            <h2 className='text-green-600 font-bold'>Save - $8000</h2>
        </div>
        
        <div className='bg-blue-700 absolute top-0 right-0 justify-center rounded-bl-lg w-14 text-white'>
          <h3 className='text-center'>56% <br/> OFF</h3>
        </div>

      </div>
      <div className='bg-slate-200 hover:bg-blue-300 cursor-pointer w-48 sm:w-40 pt-6 rounded-lg border-2 relative overflow-hidden items-center border-slate-400'>
        <img className='w-64 h-32' src="https://promotionemaroc.com/wp-content/uploads/2022/03/Samsung-Galaxy-M53-prix-maroc-Meilleur-prix.png" alt="" />
        <div className='pl-4 bg-slate-100 divide-y-2 mt-2'>
            <h2 className='my-2'>Galaxy M53 (128GB) <span className='flex gap-1'><b>$31999</b> <p className='line-through'>$40999</p></span>   </h2>
            <h2 className='text-green-600 font-bold'>Save - $9000</h2>
        </div>
        
        <div className='bg-blue-700 absolute top-0 right-0 justify-center rounded-bl-lg w-14 text-white'>
          <h3 className='text-center'>56% <br/> OFF</h3>
        </div>

      </div>
      <div className='bg-slate-200 w-48 hover:bg-blue-300 cursor-pointer sm:w-40 pt-6 rounded-lg border-2 relative overflow-hidden items-center border-slate-400'>
        <img className='w-64 h-32 sm:h-39' src="https://promotionemaroc.com/wp-content/uploads/2022/03/Samsung-Galaxy-A13-prix-maroc-Meilleur-prix.png" alt="" />
        <div className='pl-4 bg-slate-100 divide-y-2 mt-2'>
            <h2 className='my-2'>Galaxy M32 Ultra <span className="flex gap-1"><b>$67999</b>  <p className="line-through">$895999</p> </span>  </h2>
            <h2 className='text-green-600 font-bold'>Save - $18000</h2>
        </div>
        
        <div className='bg-blue-700 absolute top-0 right-0 justify-center rounded-bl-lg w-14 text-white'>
          <h3 className='text-center'>56% <br/> OFF</h3>
        </div>

      </div>
    </div> 
    </div>
  )
}

export default Smartphones;