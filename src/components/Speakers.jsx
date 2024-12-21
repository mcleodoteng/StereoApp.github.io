import AllProduct from "./AllProduct";
import Body3 from "./Body3";
import Footer from "./Footer";
import SideBar from "./slidemenu";
import Image1 from "../resources/assets/product-zx9-speaker/mobile/h1.jpg";
import Image3 from "../resources/assets/product-zx9-speaker/tablet/h1.jpg";
import Image2 from "../resources/assets/product-zx7-speaker/mobile/h3.jpg";
import Image4 from "../resources/assets/product-zx7-speaker/tablet/h1.jpg";
import Image5 from "../resources/assets/product-zx9-speaker/desktop/h1.jpg";
import Image6 from "../resources/assets/product-zx7-speaker/desktop/h1.jpg";
import { useNavigate } from "react-router-dom";
import CartMenu from "./CartMenu";
import { useEffect, useState } from "react";

const HeadPhones = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return (
    <>
      <div className="overflow-hidden">
        <div className="bg-black flex justify-between w-screen p-1 px-5 h-24 items-center fixed top-0 left-0">
          <SideBar />
          <a
            onClick={() => {
              navigate("/");
            }}
            className="text-white text-4xl"
          >
            audiophile
          </a>
          <CartMenu cartItems={cartItems} setCartItems={setCartItems} />
        </div>
        <hr />
        <div className="bg-black h-32 w-screen -ml-8 mt-[64px] fixed xl:left-8 lg:left-8 md:left-8">
          <h1 className="text-white text-4xl m-auto mt-10 tracking-[4px]">
            SPEAKERS
          </h1>
        </div>
        <div className="bg-white h-12 w-screen mt-40 -ml-8 fixed xl:left-8 lg:left-8 md:left-8">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="text-gray-400 float-left mt-4 tracking-wider font-light text-lg outline-none border-none ml-5"
          >
            Go Back
          </button>
        </div>
        <br />
        <div className="md:px-10">
          <div className="mt-60 lg:flex xl:w-11/12 xl:mx-auto">
            <picture>
              <source media="(max-width: 640px)" srcSet={Image1} />
              <source media="(max-width: 768px)" srcSet={Image3} />
              <source media="(max-width: 968px)" srcSet={Image3} />
              <source media="(max-width: 1024px)" srcSet={Image5} />
              <source media="(max-width: 1280px)" srcSet={Image5} />
              <source media="(max-width: 1868px)" srcSet={Image5} />
              <img
                src={Image1}
                alt="my-selfimage"
                className="left-0 rounded-lg"
              />
            </picture>
            <div className="lg:text-left lg:my-auto">
              <h1 className="text-[#D87D4A] mt-10 text-xl tracking-[8px] font-light lg:ml-20 lg:text-lg">
                NEW PRODUCT
              </h1>
              <h1
                className="text-3xl mt-7 tracking-[3px]
              md:w-72 md:mx-auto md:text-4xl md:font-medium lg:ml-20 lg:mt-2"
              >
                ZX9 <br /> SPEAKER
              </h1>
              <p
                className="mt-6 text-justify-center text-lg text-gray-400
              md:text-xl md:w-[710px] md:mx-auto
              lg:ml-20 lg:text-lg lg:w-[520px]"
              >
                Upgrade your sound system with the all new ZX9 active speaker.
                It’s a bookshelf speaker system that offers truly wireless
                connectivity -- creating new possibilities for more pleasing and
                practical audio setups.
              </p>
              <button
                onClick={() => {
                  navigate("/9speaker");
                }}
                className="text-white text-lg bg-[#D87D4A] mt-8 w-48 h-16 tracking-[2px] lg:ml-20 lg:h-12"
              >
                SEE PRODUCT
              </button>
            </div>
          </div>
          <div className="mt-28 lg:flex lg:flex-row-reverse lg:gap-5 xl:gap-9 lg:mt-20 xl:w-11/12 xl:mx-auto">
            <picture>
              <source media="(max-width: 640px)" srcSet={Image2} />
              <source media="(max-width: 768px)" srcSet={Image4} />
              <source media="(max-width: 968px)" srcSet={Image4} />
              <source media="(max-width: 1024px)" srcSet={Image6} />
              <source media="(max-width: 1280px)" srcSet={Image6} />
              <source media="(max-width: 1868px)" srcSet={Image6} />
              <img
                src={Image2}
                alt="my-selfimage"
                className="left-0 rounded-lg"
              />
            </picture>
            <div className="lg:text-left lg:my-auto">
              <h1
                className="text-3xl mt-8 tracking-[3px]
              md:w-72 md:mx-auto md:text-4xl md:font-medium lg:ml-2"
              >
                ZX7 <br /> SPEAKER
              </h1>
              <p
                className="mt-6 text-justify-center text-lg text-gray-400
              md:text-xl md:w-[710px] md:mx-auto
              lg:ml-2 lg:text-lg lg:w-[520px]"
              >
                Stream high quality sound wirelessly with minimal loss. The ZX7
                bookshelf speaker uses high-end audiophile components that
                represents the top of the line powered speakers for home or
                studio use.
              </p>
              <button
                onClick={() => {
                  navigate("/7speaker");
                }}
                className="text-white text-lg bg-[#D87D4A] mt-8 w-48 h-16 tracking-[2px]"
              >
                SEE PRODUCT
              </button>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <AllProduct />
          <Body3 />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HeadPhones;
