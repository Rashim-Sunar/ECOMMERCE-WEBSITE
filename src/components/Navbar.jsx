import React from "react";
import DarkMode from "./DarkMode";
import Logo from "../assets/images/logo.png";
import { IoMdSearch, IoMdArrowDropdown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = ({handleOrderPopup}) => {
  const Menu = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Top Rated", link: "/#Services" },
    { id: 3, name: "Kids Wear", link: "/#" },
    { id: 4, name: "Men Wear", link: "/#" },
    { id: 5, name: "Electronics", link: "/#" },
  ];

  const DropdownLinks = [
    { id: 1, name: "Trending Products", link: "/#" },
    { id: 2, name: "Best Selling", link: "/#" },
    { id: 3, name: "Top Rated", link: "/#" },
  ];

  return (
    <div
      className="shadow-md bg-white dark:bg-gray-900
     dark:text-white duration-200 relative z-40"
    >
      {/* Upper Navebar  */}
      <div className="bg-primary/40 py-3 sm:py-0">
        <div className=" flex container justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-2xl flex gap-2">
              <img src={Logo} alt="Logo" className="h-16 w-16" />
              <span className="my-4">Shopsy</span>
            </a>
          </div>

          {/* Search bar and order button  */}
          <div className="flex justify-between items-center gap-4">
            <div className="group my-3 relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] 
                group-hover:w-[300px] border border-gray-300 transition-all duration-300
                 rounded-full px-2 py-1 focus:outline-none focus:border-1 focus:border-primary
                 dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch
                className="text-gray-500 group-hover:text-primary
              absolute right-4 top-1/2 -translate-y-1/2"
              />
            </div>

            {/* order button  */}
            <button
              onClick={() => {
                handleOrderPopup();
              }}
              className="bg-gradient-to-r from-primary to-secondary transition-all
            duration-200 text-whitegap-3 py-1 px-4 flex items-center rounded-full group"
            >
              <span
                className="hidden group-hover:block text-white transition-all
               duration-200 mr-1"
              >
                Order
              </span>
              <FaCartShopping className="text-white text-xl cursor-pointer drop-shadow-sm" />
            </button>

            {/* DarkMode toggle */}
            <DarkMode />
          </div>
        </div>
      </div>

      {/* Lower Navbar  */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-cetner gap-4">
          {Menu.map((item) => (
            <li key={item.id}>
              <a
                className="p-4 hover:text-primary duration-200 inline-block"
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Simple Dropdowm and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-4">
              Trending
              <span>
                <IoMdArrowDropdown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div
              className="hidden z-[9999] absolute group-hover:block w-[160px]
              rounded-md bg-white p-2 text-black shadow-md"
            >
              <ul>
                {DropdownLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block w-full hover:bg-primary/20 rounded-md pd-2"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
