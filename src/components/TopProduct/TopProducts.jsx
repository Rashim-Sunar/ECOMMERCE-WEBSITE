import React from 'react'
import Img1 from '../../assets/shirts/shirt1.webp'
import Img2 from '../../assets/shirts/shirt2.png'
import Img3 from '../../assets/shirts/shirt3.png'
import { FaStar } from "react-icons/fa";

function TopProducts({handleOrderPopup}) {
    const topProductData = [
        {
            id: 1, 
            img: Img1,
            title: "Casual Wear",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, illum."
        },
        {
            id: 2, 
            img: Img2,
            title: "Printed Shirt",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, illum."
        },
        {
            id: 3, 
            img: Img3,
            title: "Women Shirt",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, illum."
        }
    ];

  return (
    <div>
        <div className='container'>
            {/* Header Section  */}
            <div className='max-w-[600px] text-left space-y-1 mb-24'>
                <p data-aos="fade-up" className=' text0-sm text-primary'>Top Rated Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
                <p  data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, dolor.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, illum.
                </p>
            </div>

            {/* Body Section  */}
            <div data-aos="fade-up" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
             gap-20 md:gap-5 place-items-center'>
                {topProductData.map((item)=>(
                    <div className='rounded-2xl bg-white shadow-xl
                    dark:bg-gray-800 dark:hover:bg-primary hover:text-white
                     hover:bg-black/80 relative duration-300 group max-w-[300px]'> 
                       {/* image section  */}
                       <div className='h-[100px]'>
                            <img src={item.img} alt='' className='max-w-[140px] block
                            mx-auto trnasform -translate-y-20 group-hover:scale-105
                            duration-300 drop-shadow-md'/>
                       </div>
                        {/* Details Section  */}
                        <div className='p-4 text-center'>
                            {/* Start Rating  */}
                            <div className='text-yellow-500 w-full items-center justify-center flex gap-1'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <h1 className='text-xl font-bold'>{item.title}</h1>
                            <p className='text-gray-500 group-hover:text-white duration-300
                            text-sm line-clamp-2'>{item.description}</p>

                            <button onClick={handleOrderPopup}
                              className='bg-primary hover:scale-105 duration-300 text-white
                              py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'>
                                Order now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TopProducts
