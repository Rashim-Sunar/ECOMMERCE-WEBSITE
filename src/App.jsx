import React,{useEffect} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/products/Products'
import TopProducts from './components/TopProduct/TopProducts'
import Banner from './components/banner/Banner'
import Subscribe from './components/subscribe/Subscribe'
import Testimonial from './components/testimonials/Testimonial'
import AOS from 'aos'
import "aos/dist/aos.css";

const App = () => {

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
    <div>
       <Navbar/>
       <Hero/>
       <Products/>
       <TopProducts/>
       <Banner/>
       <Subscribe/>
       <Products/>
       <Testimonial/>
    </div>
  )
}

export default App
