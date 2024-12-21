import SideBar from "./slidemenu";

import Image1 from "../resources/assets/product-xx99-mark-one-headphones/mobile/h1.jpg";
import Image2 from "../resources/assets/product-xx99-mark-one-headphones/mobile/h2.jpg";
import Image3 from "../resources/assets/product-xx99-mark-one-headphones/mobile/h3.jpg";
import Image4 from "../resources/assets/product-xx99-mark-one-headphones/mobile/h4.jpg";
import Image5 from "../resources/assets/shared/mobile/h8.jpg";
import Image6 from "../resources/assets/shared/mobile/h5.jpg";
import Image7 from "../resources/assets/shared/mobile/h2.jpg";
import Image8 from "../resources/assets/product-xx99-mark-one-headphones/tablet/h2.jpg";
import Image9 from "../resources/assets/shared/tablet/h5.jpg";
import Image10 from "../resources/assets/shared/tablet/h2.jpg";
import Image11 from "../resources/assets/shared/tablet/h3.jpg";
import Image12 from "../resources/assets/product-xx99-mark-one-headphones/desktop/h1.jpg";
import Footer from "./Footer";
import Body3 from "./Body3";
import AllProduct from "./AllProduct";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CartMenu from "./CartMenu";

const Mark1 = () => {
  const navigate = useNavigate();
  const [counter, setCount] = useState(1);
  const increaseCounter = () => setCount(counter + 1);
  let decreaseCounter = () => setCount(counter - 1);
  if (counter <= 0) {
    decreaseCounter = () => setCount(1);
  }

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

  const handleAddToCart = () => {
    // Product details to be added to the cart
    const product = {
      id: Date.now(), // Unique id for each product
      name: "XX99 MARK I",
      price: 1750,
      quantity: counter, // The quantity based on the counter
      image: Image12, // Image URL
    };

    // Add the new product to the cart
    setCartItems((prevItems) => [...prevItems, product]);
    alert("Product added to cart");
  };

  return (
    <>
      <div className="overflow-hidden">
        <div className="bg-black flex justify-between w-screen p-1 px-5 h-20 items-center fixed top-0 left-0">
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
        <div className="bg-white h-12 w-screen mt-20 -ml-8 fixed xl:left-8 lg:left-8 md:left-8">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="text-gray-400 float-left mt-4 tracking-wider font-light text-lg outline-none border-none ml-5"
          >
            Go Back
          </button>
        </div>
      </div>
      <div className="px-10">
        <div className="mt-40 xl:w-9/12 xl:mx-auto lg:w-9/12 lg:mx-auto">
          <div className="md:flex md:gap-7">
            <picture>
              <source media="(max-width: 768px)" srcSet={Image1} />
              <source media="(max-width: 960px)" srcSet={Image8} />
              <source media="(max-width: 1024px)" srcSet={Image12} />
              <source media="(max-width: 1280px)" srcSet={Image12} />
              <img
                src={Image12}
                alt="my-selfimage"
                className="left-0 rounded-lg"
              />
            </picture>
            <div className="text-left md:w-[680px] md:my-auto">
              <h1 className="text-3xl mt-8 tracking-[3px] font-medium">
                XX99 MARK I HEADPHONES
              </h1>
              <p className="mt-6 text-justify-center text-lg text-slate-500">
                As the gold standard for headphones, the classic XX99 Mark I
                offers detailed and accurate audio reproduction for audiophiles,
                mixing engineers, and music aficionados alike in studios and on
                the go.
              </p>
              <br />
              <h1 className="text-lg tracking-[1px] font-medium">$ 1,750</h1>
              <div className="flex justify-between">
                <div className="flex h-14 w-32 mt-8 text-center">
                  <button
                    onClick={decreaseCounter}
                    className="bg-[#eceaea] h-16 w-9"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    placeholder={counter}
                    className="bg-[#eceaea] h-16 w-14 p-1 text-center"
                  />
                  <button
                    onClick={increaseCounter}
                    className="bg-[#eceaea] h-16 w-9"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="text-white text-lg bg-[#D87D4A] mt-8 w-48 h-16 tracking-[2px]"
                >
                  ADD TO CART
                </button>
              </div>
              <br />
            </div>
          </div>

          <div className=" text-left lg:flex lg:gap-10 lg:mt-20">
            <div className="lg:w-[760px]">
              <h1 className="text-2xl mt-12 md:text-3xl md:font-medium">
                FEATURES
              </h1>
              <p className="tracking-[0.2px] text-base mt-5 text-slate-500">
                FAs the headphones all others are measured against, the XX99
                Mark I demonstrates over five decades of audio expertise,
                redefining the critical listening experience. This pair of
                closed-back headphones are made of industrial, aerospace-grade
                materials to emphasize durability at a relatively light weight
                of 11 oz.
                <br />
                <br />
                From the handcrafted microfiber ear cushions to the robust metal
                headband with inner damping element, the components work
                together to deliver comfort and uncompromising sound. Its
                closed-back design delivers up to 27 dB of passive noise
                cancellation, reducing resonance by reflecting sound to a
                dedicated absorber. For connectivity, a specially tuned cable is
                included with a balanced gold connector.
              </p>
            </div>

            <br />
            <div className="md:flex md:gap-48 lg:flex-col lg:gap-10 lg:w-[300px]">
              <h1 className="text-2xl mt-12 md:text-3xl md:font-medium">
                IN THE BOX
              </h1>
              <div>
                <div className="flex mt-6 md:mt-12">
                  <span className="text-[#D87D4A] text-lg font-semibold">
                    1x
                  </span>
                  <h1 className="ml-5 text-lg tracking-[0.5px] font-light text-slate-500">
                    Headphone Unit
                  </h1>
                </div>
                <div className="flex mt-2">
                  <span className="text-[#D87D4A] text-lg font-semibold">
                    2x
                  </span>
                  <h1 className="ml-5 text-lg tracking-[0.5px] font-light text-slate-500">
                    Replacement Earcups
                  </h1>
                </div>
                <div className="flex mt-2">
                  <span className="text-[#D87D4A] text-lg font-semibold">
                    1x
                  </span>
                  <h1 className="ml-5 text-lg tracking-[0.5px] font-light text-slate-500">
                    User Manual
                  </h1>
                </div>
                <div className="flex mt-2">
                  <span className="text-[#D87D4A] text-lg font-semibold">
                    1x
                  </span>
                  <h1 className="ml-5 text-lg tracking-[0.5px] font-light text-slate-500">
                    3.5mm 5m Audio Cable
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:gap-4 xl:w-9/12 xl:mx-auto lg:w-9/12 lg:mx-auto">
          <div className="md:w-[50%]">
            <img
              src={Image2}
              alt="my-selfimage"
              className="left-0 rounded-lg mt-20"
            />
            <img
              src={Image3}
              alt="my-selfimage"
              className="left-0 rounded-lg mt-4"
            />
          </div>
          <div className="md:w-[50%] md:mt-16">
            <img
              src={Image4}
              alt="my-selfimage"
              className="left-0 rounded-lg mt-4"
            />
          </div>
        </div>
        <br />

        <h1
          className="text-2xl mt-14 font-medium
        md:text-3xl md:font-medium"
        >
          YOU MAY ALSO LIKE
        </h1>
        <div className="md:flex md:gap-4 xl:w-9/12 xl:mx-auto lg:w-9/12 lg:mx-auto">
          <div className="md:mt-6">
            <picture>
              <source media="(max-width: 640px)" srcSet={Image5} />
              <source media="(max-width: 768px)" srcSet={Image9} />
              <source media="(max-width: 1024px)" srcSet={Image9} />
              <source media="(max-width: 1280px)" srcSet={Image9} />
              <img
                src={Image5}
                alt="my-selfimage"
                className="left-0 rounded-lg mt-10"
              />
            </picture>
            {/* <a href="/"><img src={Image5} alt='my-selfimage' className='left-0 rounded-lg '/></a> */}
            <h1 className="text-2xl mt-4 tracking-[2px] font-medium">
              XX99 MARK II
            </h1>
            <button
              onClick={() => {
                navigate("/mark2");
              }}
              className="text-white text-lg bg-[#D87D4A] mt-8 w-48 h-16 tracking-[2px]"
            >
              SEE PRODUCT
            </button>
          </div>
          <div>
            <picture>
              <source media="(max-width: 640px)" srcSet={Image6} />
              <source media="(max-width: 768px)" srcSet={Image10} />
              <source media="(max-width: 1024px)" srcSet={Image10} />
              <source media="(max-width: 1280px)" srcSet={Image10} />
              <img
                src={Image6}
                alt="my-selfimage"
                className="left-0 rounded-lg mt-16"
              />
              {/* <a href="/"><img src={Image6} alt='my-selfimage' className='left-0 rounded-lg '/></a> */}
            </picture>

            <h1 className="text-2xl mt-4 tracking-[2px] font-medium">XX59</h1>
            <button
              onClick={() => {
                navigate("/xx59");
              }}
              className="text-white text-lg bg-[#D87D4A] mt-8 w-48 h-16 tracking-[2px]"
            >
              SEE PRODUCT
            </button>
          </div>
          <div>
            <picture>
              <source media="(max-width: 640px)" srcSet={Image7} />
              <source media="(max-width: 768px)" srcSet={Image11} />
              <source media="(max-width: 1024px)" srcSet={Image11} />
              <source media="(max-width: 1280px)" srcSet={Image11} />
              <img
                src={Image7}
                alt="my-selfimage"
                className="left-0 rounded-lg mt-16"
              />
            </picture>
            {/* <a href="/"><img src={Image7} alt='my-selfimage' className='left-0 rounded-lg '/></a> */}
            <h1 className="text-2xl mt-4 tracking-[2px] font-medium">
              ZX9 SPEAKER
            </h1>
            <button
              onClick={() => {
                navigate("/9speaker");
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
      <Footer />
    </>
  );
};

export default Mark1;
