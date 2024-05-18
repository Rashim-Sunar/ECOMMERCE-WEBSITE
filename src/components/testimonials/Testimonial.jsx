import React from "react";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img1 from "../../assets/customers/dipsan.jpg";
import Img2 from "../../assets/customers/srijana.jpg";
import Img3 from "../../assets/customers/aakash.jpg";
import Img4 from "../../assets/customers/vattu.jpg";
import Img5 from "../../assets/customers/bibas.jpg";

var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = [
  {
    id: 1,
    name: "Dipsan Gurung",
    text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, perspiciatis.",
    img: Img1,
  },
  {
    id: 2,
    name: "Srijana Poudel",
    text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, perspiciatis.",
    img: Img2,
  },
  {
    id: 3,
    name: "Aakash Chaurasiya",
    text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, perspiciatis.",
    img: Img3,
  },
  {
    id: 4,
    name: "Silsila Bhatta",
    text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, perspiciatis.",
    img: Img4,
  },
  {
    id: 5,
    name: "Bibas Kandel",
    text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, perspiciatis.",
    img: Img5,
  },
];

function Testimonial() {
  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header Section  */}
        <div className="max-w-[600px] text-center space-y-1 mx-auto mb-10">
          <p data-aos="fade-up" className=" text0-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonial
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 dark:text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
            dolor. Lorem ipsum dolor sit amet
          </p>
        </div>

        {/* Testimonial Cards  */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {Testimonials.map((item) => (
              <div className="my-6">
                <div
                  key={item.id}
                  className="flex flex-col gap-4 shadow-lg
                        py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={item.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500 dark:text-white">{item.text}</p>
                      <h1
                        className="text-xl font-bold text-black/80
                                dark:text-white"
                      >
                        {item.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 dark:text-gray-300">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
