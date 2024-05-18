import React,{useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/products/Products'
import TopProducts from './components/TopProduct/TopProducts'
import Banner from './components/banner/Banner'
import Subscribe from './components/subscribe/Subscribe'
import Testimonial from './components/testimonials/Testimonial'
import PopUp from './components/popup/PopUp'
import Footer from './components/footer/Footer'
import AOS from 'aos'
import "aos/dist/aos.css";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,  
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    });
    AOS.refresh();
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white'>
       <Navbar handleOrderPopup={handleOrderPopup}/>
       <Hero handleOrderPopup={handleOrderPopup}/>
       <Products/>
       <TopProducts handleOrderPopup={handleOrderPopup}/>
       <Banner/>
       <Subscribe/>
       <Products/>
       <Testimonial/>
       <Footer/>
       <PopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
  )
}

export default App
