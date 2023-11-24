// import SideBar from "./slidemenu"
// import {FaCartPlus} from 'react-icons/fa'
import Image1 from "../resources/assets/cart/h1.jpg";
import Image2 from "../resources/assets/cart/h2.jpg";
import Image3 from "../resources/assets/cart/h3.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const [counter, setCount] = useState(1);
  const increaseCounter = () => setCount(counter + 1);
  let decreaseCounter = () => setCount(counter - 1);
  if (counter <= 0) {
    decreaseCounter = () => setCount(1);
  }

  return (
    <div>
      <div className="border shadow-xl p-6 rounded-xl">
        <div className="text-left">
          <div className="flex justify-between">
            <h1 className="mt-2 text-2xl font-medium tracking-[2px]">
              CART <span>(3)</span>
            </h1>
            <a href="/">
              <h1 className="text-gray-400 text-lg underline tracking-[1px] mt-3">
                Remove all
              </h1>
            </a>
          </div>

          <div className="mt-10 flex justify-between">
            <div className="flex h-16 gap-2">
              <img
                src={Image1}
                alt="my-selfimage"
                className="left-0 rounded-lg "
              />
              <div className="my-auto font-medium text-lg tracking-[1px]">
                <h1>XX99 MK II</h1>
                <h1 className="text-gray-500">$ 2,999</h1>
              </div>
            </div>

            <div className="flex h-10 w-24 ml-8 text-center my-auto">
              <button
                onClick={decreaseCounter}
                className="bg-[#eceaea] h-6 w-5 text-gray-400"
              >
                -
              </button>
              <input
                type="text"
                placeholder={counter}
                className="bg-[#eceaea] h-6 w-10 text-center"
              />
              <button
                onClick={increaseCounter}
                className="bg-[#eceaea] h-6 w-5 text-gray-400"
              >
                +
              </button>
            </div>
          </div>
          <div className="mt-8 flex justify-between">
            <div className="flex h-16 gap-2">
              <img
                src={Image2}
                alt="my-selfimage"
                className="left-0 rounded-lg "
              />
              <div className="my-auto font-medium text-lg tracking-[1px]">
                <h1>XX59</h1>
                <h1 className="text-gray-500">$ 899</h1>
              </div>
            </div>

            <div className="flex h-10 w-24 ml-8 text-center my-auto">
              <button
                onClick={decreaseCounter}
                className="bg-[#eceaea] h-6 w-5 text-gray-400"
              >
                -
              </button>
              <input
                type="text"
                placeholder={counter}
                className="bg-[#eceaea] h-6 w-10 text-center"
              />
              <button
                onClick={increaseCounter}
                className="bg-[#eceaea] h-6 w-5 text-gray-400"
              >
                +
              </button>
            </div>
          </div>
          <div className="mt-8 flex justify-between">
            <div className="flex h-16 gap-2">
              <img
                src={Image3}
                alt="my-selfimage"
                className="left-0 rounded-lg "
              />
              <div className="my-auto font-medium text-lg tracking-[1px]">
                <h1>YX1</h1>
                <h1 className="text-gray-500">$ 599</h1>
              </div>
            </div>

            <div className="flex h-10 w-24 ml-8 text-center my-auto">
              <button
                onClick={decreaseCounter}
                className="bg-[#eceaea] h-6 w-5 text-gray-400"
              >
                -
              </button>
              <input
                type="text"
                placeholder={counter}
                className="bg-[#eceaea] h-6 w-10 text-center"
              />
              <button
                onClick={increaseCounter}
                className="bg-[#eceaea] h-6 w-5 text-gray-400"
              >
                +
              </button>
            </div>
          </div>
          <div className="mt-10 flex justify-between ml-1 tracking-[1px] ">
            <h1 className="font-light text-xl text-gray-500">TOTAL</h1>
            <h1 className="font-medium text-2xl">$ 5,396</h1>
          </div>
        </div>

        <button
          onClick={() => {
            navigate("/checkout");
          }}
          className="text-white text-lg bg-[#D87D4A] mt-8 w-full h-16 tracking-[2px] mx-auto rounded-sm"
        >
          {" "}
          CHECKOUT{" "}
        </button>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Cart;
