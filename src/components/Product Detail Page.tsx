import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductDetailPage = () => {
  return (
    <div>
      {/* <Navbar />
        <Footer /> */}
      <div className="font-extrabold text-2xl text-black ml-20">
        <h1>Product Detail Page</h1>
      </div>
      <ul className="flex gap-x-8 text-gray-600 ml-11">
        <li>Home</li>
        <li>Shop</li>
        <li>Mens</li>
        <li className="text-black">T-hirt</li>
      </ul>
      <div className="pt-9 relative">
        <div className="ml-20 gap-0">
          <img src="olive.png" className="w-92 h-60 rounded-md" alt="Olive 1" />
          <img
            src="olive.2.png"
            className="w-92 h-60 rounded-md"
            alt="Olive 2"
          />
          <img
            src="olive3.png"
            className="w-92 h-60 rounded-md"
            alt="Olive 3"
          />
        </div>

        {/* Text in front of the images */}
        <div className="absolute top-10 left-0 w-full text-center text-4xl text-black font-extrabold">
          <h1>One Life Graphic T-shirt</h1>

          {/* Price Section */}
          <span className="flex justify-center gap-4 pl-0 pt-5">
            <h1 className="font-thin text-xl pt-10">$260</h1>
            <h1 className="font-thin text-xl text-gray-300 line-through pt-10">
              $300
            </h1>
          </span>

          {/* Description Section */}
          <div className="text-center pt-6 px-4 font-thin text-lg text-gray-400">
            <div className="inline-block pb-4 border-b-2 border-gray-400">
              <p>
                This graphic t-shirt is perfect for any occasion. Crafted from a
                soft and
                <br /> breathable fabric, it offers superior comfort and style.
              </p>
            </div>
            <div className="text-2xl mr-80 text-gray-500 pt-10  ">
              <h1>Select Colors</h1>
            </div>

            <div className="text-2xl mr-80 pt-10">
              <h1 className="text-gray-400 mb-6 pt-4 ">Choose Size</h1>

              <div className="ml-96 pb-8 border-b-2 border-gray-400">
                <div className="flex gap-7 ">
                  <button className="bg-gray-300 rounded-full text-gray-500 py-2 px-5">
                    Small
                  </button>
                  <button className="bg-gray-300 rounded-full text-gray-500 py-2 px-5">
                    Medium
                  </button>
                  <button className="bg-black text-white rounded-full py-2 px-5">
                    Large
                  </button>
                  <button className="bg-gray-300 rounded-full text-gray-500 py-2 px-5 pt-4 border-b-2 border-gray-400">
                    X-large
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-5">
              <div className=" items justify-center ">
                <button className="bg-gray-300 rounded-full h-14 w-44 mt-7 text-black py-2 px-6 pt-4 border-b-2 border-gray-400">
                  - 1 +
                </button>
              </div>
              <div className="flex justify-center ">
                <button className="bg-black rounded-full h-14 w-44 mt-7 text-white py-2 px-6 pt-4 pr-6 pl-6 border-b-2 border-gray-400">
                  Add to Card
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-96 px-16 mx-auto border-b-2 border-gray-500">
          <h1 className="text-gray-400">Products Details</h1>
          <h1 className="border-b-2 border-black">Rating & Reviews</h1>
          <h1 className="text-gray-400">FAQ'S</h1>
        </div>

        <div className="font-extrabold text-2xl ml-16 mt-10">
          <h1> All Reviews </h1>

          <div className="grid grid-cols-2 gap-8">
            <div className="font-bold text-black border border-gray-300 rounded-xl p-4">
              <h1>Samantha D.</h1>
              <p className="font-thin">
                "I absolutely love this t-shirt! The design is unique and the
                fabric feels so
                <br /> comfortable. As a fellow designer, I appreciate the
                attention to detail.
                <br /> It's become my favorite go-to shirt."
              </p>
            </div>
            <div className="font-bold text-black border border-gray-300 rounded-xl p-4">
              <h1>Alex M.</h1>
              <p className="font-thin">
                "The t-shirt exceeded my expectations! The colors are vibrant
                and the print
                <br /> quality is top-notch. Being a UI/UX designer myself, I'm
                quite picky about
                <br /> aesthetics, and this t-shirt definitely gets a thumbs up
                from me."
              </p>
            </div>
            <div className="font-bold text-black border border-gray-300 rounded-xl p-4">
              <h1>Ethan R.</h1>
              <p className="font-thin">
                "This t-shirt is a must-have for anyone who appreciates good
                design. The <br />
                minimalistic yet stylish pattern caught my eye, and the fit is
                perfect. I can
                <br /> see the designer's touch in every aspect of this shirt."
              </p>
            </div>
            <div className="font-bold text-black border border-gray-300 rounded-xl p-4">
              <h1>Olivia P.</h1>
              <p className="font-thin">
                "As a UI/UX enthusiast, I value simplicity and functionality.
                This t-shirt not
                <br /> only represents those principles but also feels great to
                wear. It's evident
                <br /> that the designer poured their creativity into making
                this t-shirt stand out."
              </p>
            </div>
            <div className="font-bold text-black border border-gray-300 rounded-xl p-4">
              <h1>Liam K.</h1>
              <p className="font-thin">
                "This t-shirt is a fusion of comfort and creativity. The fabric
                is soft, and the design
                <br /> speaks volumes about the designer's skill. It's like
                wearing a piece
                <br /> of art that reflects my passion for both design and
                fashion."
              </p>
            </div>
            <div className="font-bold text-black border border-gray-300 rounded-xl p-4">
              <h1>Ava H.</h1>
              <p className="font-thin">
                "I'm not just wearing a t-shirt; I'm wearing a piece of design
                philosophy.
                <br /> The intricate details and thoughtful layout of the design
                make this shirt a<br /> conversation starter."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

