import React from "react";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  return (
    <div className="bg-black text-white flex justify-center gap-2 h-14 pt-3 pb-3 w-[1440] tracking-wide">
      <div className="font-normal">
        Sign up and get 20  off to your first order.
      </div>
      <button className="font-normal underline pb-4">Sign up now</button>
      < RxCross2 />

    </div>
    
  );
};

export default Header;
