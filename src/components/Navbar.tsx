import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className=" mt-8 mb-3 pt-2 flex justify-between items-center sm:h-20 ">
      <div className=" w-[80%] flex justify-start ">
        <div className="flex flex-col items-center text-center ">
          <h1 className="font-extrabold text-4xl mb-10 ml-10 mr-10">SHOP.CO</h1>
        </div>
        <ul className="flex gap-x-8 mr-14 pt-2 text-black font-semibold">
          <li className="menuLink">
            <a href="#shop">Shop </a>
          </li>
          <li className="menuLink ">
            <a href="#sale">On sale</a>
          </li>
          <li className="menuLink">
            <a href="#signup">New Arrivels</a>
          </li>
          <li className="menuLink">
            <a href="#brand">Brands</a>
          </li>
        </ul>

        
          <div className="bg-gray-100 h-12  text-gray-500 text-xl pt-2 pr-10 mr-10  rounded-full flex items-center">
  {/* Button */}
  <button className="flex-grow text-start ">Search for products</button>

  {/* Search Icon */}
  <span className="ml-2">
    <IoSearchOutline />
  </span>
</div>


          
          <div className="flex justify-end space-x-5">
  <LuShoppingCart size={35} />
  <CgProfile size={35} />
</div>

        </div> 



        
      </div>
    // </div>
  );
};

export default Navbar;
