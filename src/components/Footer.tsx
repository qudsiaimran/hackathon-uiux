import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      
    <div className="mr-16 ml-16 pl-20 pt-10 pb-10 bg-black text-white font-extrabold text-3xl rounded-xl">
  {/* Heading */}
  STAY UPTO DATE ABOUT <br />
  OUR LATEST OFFERS

  {/* Email Input Section */}
  <div className="bg-whitefont-thin flex justify-start items-center mt-5 p-1 rounded-full max-w-md mx-auto">
    <input
      type="email"
      placeholder="enter your email address"
      className="flex-grow p-2 font-thin  text-gray-300  rounded-full outline-none text-sm"
    />
    
  </div>
  <div className="bg-white text-black font-thin flex justify-start items-center mt-5 p-1 rounded-full max-w-md mx-auto">
    <input
      type="subscribe"
      placeholder="Subscribe to Newsletter"
      className="flex-grow p-2 font-thin text-black rounded-full outline-none text-sm"
    />
    
  </div>
</div>

<div >
  {/* Grid Layout with 5 Columns */}
  <div className="grid grid-cols-5 gap-8 px-16">
    {/* SHOP.CO Column */}
    <div className="space-y-5">
      <h1 className="font-extrabold text-2xl">SHOP.CO</h1>
      <p className="text-gray-500">
        We have clothes that suit your style and <br />
        which you’re proud to wear. From <br />
        women to men.
      </p>
    </div>

    {/* Company Column */}
    <div className="space-y-5">
      <h1 className="font-bold">COMPANY</h1>
      <h2 className="font-thin text-gray-500">About</h2>
      <h2 className="font-thin text-gray-500">Feature</h2>
      <h2 className="font-thin text-gray-500">Works</h2>
      <h2 className="font-thin text-gray-500">Career</h2>
    </div>

    {/* Help Column */}
    <div className="space-y-5">
      <h1 className="font-bold">HELP</h1>
      <h2 className="font-thin text-gray-500">Customer Support</h2>
      <h2 className="font-thin text-gray-500">Delivery Details</h2>
      <h2 className="font-thin text-gray-500">Terms & Conditions</h2>
      <h2 className="font-thin text-gray-500">Privacy Policy</h2>
    </div>

    {/* FAQ Column */}
    <div className="space-y-5">
      <h1 className="font-bold">FAQ</h1>
      <h2 className="font-thin text-gray-500">Account</h2>
      <h2 className="font-thin text-gray-500">Manage Deliveries</h2>
      <h2 className="font-thin text-gray-500">Orders</h2>
      <h2 className="font-thin text-gray-500">Payments</h2>
    </div>

    {/* Resources Column */}
    <div className="space-y-5">
      <h1 className="font-bold">RESOURCES</h1>
      <h2 className="font-thin text-gray-500">Free Books</h2>
      <h2 className="font-thin text-gray-500">Development Tutorial</h2>
      <h2 className="font-thin text-gray-500">How to-Blog</h2>
      <h2 className="font-thin text-gray-500">YouTube Playlist</h2>
    </div>
  </div>
   {/* Footer Text */}
   <div className="ml-28 mt-10 text-gray-500 text-thin text-start">
    Shop.co © 2000-2023, All Rights Reserved
  </div>
</div>
</div>

);
};

export default Footer;
