import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./slidemenu";
import CartMenu from "./CartMenu"; // Import CartMenu component
import Image1 from "../resources/assets/product-zx9-speaker/mobile/h1.jpg";
import Image12 from "../resources/assets/product-zx9-speaker/desktop/h1.jpg";
import Footer from "./Footer";
import Body3 from "./Body3";
import AllProduct from "./AllProduct";

const Zx9Speaker = () => {
  const navigate = useNavigate();

  const [counter, setCount] = useState(1); // To track the quantity of the product
  const [cartItems, setCartItems] = useState([]); // State to store cart items

  // Load cart from localStorage when component mounts
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

  const increaseCounter = () => setCount(counter + 1);
  const decreaseCounter = () => setCount(counter <= 1 ? 1 : counter - 1);

  const handleAddToCart = () => {
    const product = {
      id: Date.now(), // Unique id for each product
      name: "ZX9 Speaker",
      price: 4500,
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
          {/* Pass cartItems to CartMenu */}
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

        <div className="overflow-hidden md:px-10">
          <div className="mt-40 xl:w-9/12 xl:mx-auto lg:w-9/12 lg:mx-auto">
            <div className="md:flex md:gap-7">
              <picture>
                <source media="(max-width: 640px)" srcSet={Image1} />
                <source media="(max-width: 768px)" srcSet={Image1} />
                <source media="(max-width: 1024px)" srcSet={Image12} />
                <img
                  src={Image12}
                  alt="ZX9 Speaker"
                  className="left-0 rounded-lg"
                />
              </picture>
              <div className="text-left md:w-[650px] md:my-auto">
                <h1 className="text-[#D87D4A] mt-10 text-xl tracking-[8px] font-light">
                  NEW PRODUCT
                </h1>
                <h1 className="text-3xl mt-8 tracking-[3px] font-medium">
                  ZX9 <br />
                  SPEAKER
                </h1>
                <p className="mt-6 text-justify-center text-lg text-slate-500">
                  Upgrade your sound system with the all new ZX9 active
                  speaker...
                </p>
                <br />
                <h1 className="text-lg tracking-[1px] font-medium">$ 4,500</h1>
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
                      value={counter}
                      className="bg-[#eceaea] h-16 w-14 p-1 text-center"
                      readOnly
                    />
                    <button
                      onClick={increaseCounter}
                      className="bg-[#eceaea] h-16 w-9"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={handleAddToCart} // Add product to cart when clicked
                    className="text-white text-lg bg-[#D87D4A] mt-8 w-48 h-16 tracking-[2px]"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AllProduct />
        <Body3 />
      </div>
      <Footer />
    </>
  );
};

export default Zx9Speaker;
