import React from 'react'
import Img1 from '../../assets/women/women1.webp'
import Img2 from '../../assets/women/women2.jpg'
import Img3 from '../../assets/women/women3.webp'
import Img4 from '../../assets/women/women4.jpeg'
import Img5 from '../../assets/women/women5.jpg'
import { FaStar } from "react-icons/fa";

function Products() {
    const productData = [
        {
            id: 1,
            img: Img1,
            title: "Women Ethnic",
            rating: 5.0,
            author: "white",
            aosDelay: "0",
        },
        {
            id: 2,
            img: Img2,
            title: "Women Western",
            rating: 4.5,
            author: "Red",
            aosDelay: "200", 
        },
        {
            id: 3,
            img: Img3,
            title: "Googles",
            rating: 4.7,
            author: "brown",
            aosDelay: "400",
        },
        {
            id: 4,
            img: Img4,
            title: "Printed T-shirt",
            rating: 4.4,
            author: "Yellow",
            aosDelay: "600",
        },
        {
            id: 5,
            img: Img5,
            title: "Fashin T-shirt",
            rating: 4.5,
            author: "Pink",
            aosDelay: "800",
        }
    ];

  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* Header Section  */}
            <div className='max-w-[600px] text-center space-y-1 mx-auto mb-10'>
                <p data-aos="fade-up" className=' text0-sm text-primary'>Top Selling Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, dolor.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, illum.
                </p>
            </div>

            {/* Body Section  */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5
                  place-items-center'>
                    {/* Card Section  */}
                    {productData.map((item)=>
                        <div 
                            data-aos="fade-up" data-aos-delay={item.aosDelay}
                            key={item.id} className='pace-y-3'>
                            <img src={item.img} className='w-[250px] h-[250px]
                            object-cover rounded-md'/>
                            <div>
                                <h3 className='font-semibold'>{item.title}</h3>
                                <p className='text-sm text-gray-600'>{item.author}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-400'/>
                                    <span>{item.rating}</span>
                                </div>
                            </div>


                        </div>
                    )}
                </div>
                {/* view all button  */}
                <div className='flex justify-center'>
                    <button className='text-center mt-10 cursor-pointer bg-primary
                    text-white py-1 px-4 rounded-md'>View All Button</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products
