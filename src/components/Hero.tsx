import React from "react";
import Navbar from "./Navbar"
import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[255px]  flex justify-start">
        <div className="h-full w-[80%] flex justify-between ">
          {/* left side */}
          <div className="ml-8 mt-16 text-black ">
            <div className="flex justify-center items-center gap-x-5 text-6xl font-extrabold ml-16">
              <p>
                FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
              </p>
            </div>
            <div className="ml-16 pt-5">
              <p>
                Browse through our diverse range of meticulsously crafted
                garments,
                <br />
                dsigned to bring out your individuality and cater to your sense
                of style
              </p>
              <button className="bg-black text-white ml-16 mt-7 h-14 w-44 rounded-full">
                Shop now
              </button>
            </div>
          </div>

          {/* right side  */}
          <div className="flex justify-end">
            <img src="hero.png" height={600} width={450} alt="first" />
          </div>
        </div>
      </div>
      <div className="text-2xl font-extrabold mr-24 ml-24 gap-x-24 flex pt-60 ">
        <li>VERSACE</li>
        <li>ZARA</li>
        <li>GUCCI</li>
        <li>PRADA</li>
        <li>Calvin Klein</li>
      </div>

      <div className="ml-[35%] pt-40 font-extrabold text-5xl text-black">
        <h1>NEW ARRIVALS</h1>
      </div>

      <div className="gap-1 flex justify-evenly mt-16 mr-16 ml-20">
        <div>
          <div className="w-[300px] h-[170px] flex justify-center items-center">
            <button ><img src="t-shirt.png" w-150 h-120></img></button>
          </div>
          {/* title */}
          <div className="flex flex-col pt-10">
            <span className="font-bold">T-shirt with Tape Detail</span>
            <span className="font-bold">$120</span>
          </div>
        </div>

        <div>
          <div className="w-[300px] h-[170px] flex justify-center items-center">
            <img src="jeans.png" w-150 h-120></img>
          </div>
          {/* title */}
          <div className="flex flex-col pt-10">
            <span className="font-bold">Skinny Fit Jeans</span>
            <span className="flex font-bold gap-4">
              <span className="text-black">$240</span>
              <span className="text-gray-300 line-through">$260</span>
            </span>
          </div>
        </div>

        <div>
          <div className="w-[300px] h-[170px] flex justify-center items-center">
            <img src="check-shirts.png" w-150 h-120></img>
          </div>
          {/* title */}
          <div className="flex flex-col pt-10">
            <span className="font-bold">Checkered Shirt</span>
            <span className="font-bold">$180</span>
          </div>
        </div>

        <div>
          <div className="w-[300px] h-[170px] flex justify-center items-center">
            <img src="simple shirts.png" w-150 h-120></img>
          </div>
          {/* title */}
          <div className="flex flex-col pt-10">
            <span className="font-bold">Sleeve Striped T-Shirt</span>
            <span className="flex font-bold gap-4">
              <span className="text-black">$130</span>
              <span className="text-gray-300 line-through">$160</span>
            </span>
          </div>
        </div>
      </div>

      <div className="pt-10 border-b-2 ">
        <div className="bg-white text-center py-5 border-b-2 border-gray-400">
          <button className="bg-white text-black border  py-2 px-6  h-14 w-44 rounded-full">
            View All
          </button>
        </div>

{/* top selling*/}


<div className="ml-[35%] pt-40 font-extrabold text-5xl text-black">
        <h1>TOP SELLING</h1>
      </div>

      <div className="gap-1 flex justify-evenly mt-16 mr-16 ml-20">
        <div>
          <div className="w-[300px] h-[170px] flex justify-center items-center">
            <img src="shirt.png" w-150 h-120></img>
          </div>
          {/* title */}
          <div className="flex flex-col pt-10">
            <span className="font-bold">Verticl Striped Shirt</span>
            <span className="flex font-bold">$212</span>
            <span className="text-gray-300 line-through">$232</span>
          </div>
        </div>

        <div>
          <div className="w-[300px] h-[170px] flex justify-center items-center">
            <img src="shirt 2.png" w-150 h-120></img>
          </div>
          {/* title */}
          <div className="flex flex-col pt-10">
            <span className="font-bold">Courage Graphics T-Shirt</span>
            <span className="font-bold gap-4">
              <span className="text-black">$145</span>
            </span>
          </div>
        </div>

        <div>
          <div className="w-[300px] h-[170px] flex justify-center items-center">
            <img src="jeans.png" w-150 h-120></img>
          </div>
          {/* title */}
          <div className="flex flex-col pt-10">
            <span className="font-bold">Faded Skinny Jeans</span>
            <span className="font-bold">$210</span>
          </div>
        </div>

        <div>
          <div className="w-[300px] h-[170px] flex justify-center items-center">
            <img src="simple shirts.png" w-150 h-120></img>
          </div>
          {/* title */}
          <div className="flex flex-col pt-10">
            <span className="font-bold">Sleeve Striped T-Shirt</span>
            <span className="flex font-bold gap-4">
              <span className="text-black">$130</span>
            </span>
            
          </div>
        </div>
      </div>
      <div className="bg-white text-center py-5 border-b-2 border-gray-400">
          <button className="bg-white text-black border  py-2 px-6  h-14 w-44 rounded-full">
            View All
          </button>
        </div>


{/* 
comment */}
        <div className="bg-gray-300 py-36">
          {/* Heading */}
          <h1 className="font-extrabold text-2xl text-center pt-2">
            BROWSE BY dress STYLE
          </h1>

          {/* Image */}
          <div className="flex items-center gap-4 ">
            <div className="flex justify-normal start mt-16 ml-28">
              <img
                src="casual.png"
                className=" w-[390px] h-[300px]"
                alt="Casual Style"
              />
            </div>
            <div className="text-start mr-40  mt-16">
              <img
                src="formal.png"
                className=" w-[700px] h-[300px]"
                alt="Formal Style"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 ">
            <div className="flex justify-normal start mt-3  ml-28">
              <img
                src="party.png"
                className=" w-[700px] h-[300px]"
                alt="party Style"
              />
            </div>
            <div className="text-start mr-40 mt-3">
              <img
                src="gym.png"
                className=" w-[390px] h-[300px]"
                alt="gym Style"
              />
            </div>
          </div>
        </div>

        <div className="ml-28 pt-7 mt-32">
          <h1 className="ml-10 text-black text-3xl font-extrabold tracking-wider ">
            OUR HAPPY CUSTOMERS
          </h1>
          <div className="flex items-center gap-5 pt-10">
            <div className=" border border-gray-300 rounded-xl mt-10">
              <h1 className="font-extrabold text-2xl pt-8 pl-3">Sarah M.</h1>
              <p className="pt-20 pr-6 pl-6 pb-6">
                "I'm blown away by the quality and style
                <br />
                clothes i received from Shop.co. From <br />
                wear to elegant dresses,
                <br /> every piece I'v has exceeded my expectations."
              </p>
            </div>
            <div className=" border border-gray-300 rounded-xl mt-10">
              <h1 className="font-extrabold text-2xl pt-6 pl-3">Alex K.</h1>
              <p className=" pt-20 pr-6 pl-6 pb-6">
                "Finding clothes that align with my personal
                <br />
                style used to be a challenge until i discovered <br />
                Shop.co.The range of options they offer is truly
                <br />
                remarkable.Catering to a variety of tastes ocassions"
              </p>
            </div>
            <div className=" border border-gray-300 rounded-xl mr-52 mt-10 pb-5">
              <h1 className="font-extrabold text-2xl pt-6 pl-3">James L.</h1>
              <p className="pt-20 pr-6 pl-6 pb-6">
                "As someone who's always on the lookout for
                <br /> unique fashion pieces.I'm thrilled to have stumbled
                <br />
                upon Shop.co.The selection of
                <br /> clothes is not only diverse but also on-point
                <br />
                with the latest trends. "
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
