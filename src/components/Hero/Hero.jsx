import React from "react";
import Image1 from "../../assets/hero/image1.png";
import Image2 from "../../assets/hero/image2.png";
import Image3 from "../../assets/hero/image3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { MdDescription } from 'react-icons/md'

function Hero({handleOrderPopup}) {
  const imageList = [
    {
      id: 1,
      img: Image1,
      title: "Upto 50% off on all Men Wear",
      description:
        "Lorem ipsum dolor sit amet  Possimus reiciendis illo tempora dolore necessitatibus quos quam unde, inventore, ",
    },
    {
      id: 2,
      img: Image2,
      title: "Upto 30% off on all Women Wear",
      description:
        "Lorem ipsum dolor sit amet  Possimus reiciendis illo tempora dolore necessitatibus quos quam unde, inventore, ",
    },
    {
      id: 3,
      img: Image3,
      title: "70% off on all Product Sales",
      description:
        "Lorem ipsum dolor sit amet  Possimus reiciendis illo tempora dolore necessitatibus quos quam unde, inventore, ",
    },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    slidesToScroll: 1,
  };

  return (
    <div
      className="relative overflow-hidden min-h-[550px] sm:min-h-[600px]
     bg-gray-100 dark:bg-gray-950 dark:text-white duration-200"
    >
      {/* background pattern */}
      <div
        className="bg-primary/40 w-[700px] h-[700px] absolute right-0
            -top-1/2 rotate-45 -z-9 rounded-3xl"
      ></div>

      {/* Hero section  */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {imageList.map((item) => (
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section  */}
                <div
                  className="flex flex-col justify-center gap-4 pt-12 sm:pt-0
                   text-center sm:text-left order-2 sm:order-1 relative z-10"
                >
                  <h1
                     data-aos="zoom-out" 
                     data-aos-duration="500"
                     data-aos-once="true"
                     className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {item.title}
                  </h1>
                  <p 
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm mt-2">
                    {item.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary 
                      hover:scale-105 duration-200 text-white py-2 px-2 rounded-full
                      hover:drop-shadow-lg mt-4 cursor-pointer"
                    >
                      Order now
                    </button>
                  </div>
                </div>
                {/* Image section  */}
                <div className="order-1 sm:order-2 ">
                  <div 
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10">
                    <img
                      src={item.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:w-[500px]
                      sm:h-[600px] scale-150 sm:scale-105 md:scale-125 lg:scale-150 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
