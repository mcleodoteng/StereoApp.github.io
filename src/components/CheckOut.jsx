import Footer from "./Footer";
import SideBar from "./slidemenu";
import Image1 from "../resources/assets/cart/h1.jpg";
import Image2 from "../resources/assets/cart/h2.jpg";
import Image3 from "../resources/assets/cart/h3.jpg";
import { useNavigate } from "react-router-dom";
import CartMenu from "./CartMenu";

const CheckOut = () => {
  const navigate = useNavigate();
  return (
    <div>
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
        <CartMenu />
      </div>
      <div className="bg-white h-12 w-screen -mt-20  fixed xl:left-8 lg:left-8">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="text-gray-400 float-left mt-4 tracking-wider font-light text-lg outline-none border-none ml-5"
        >
          Go Back
        </button>
      </div>
      <div></div>
      <div className="lg:flex  xl:w-11/12 xl:mx-auto lg:w-11/12 lg:mx-auto md:w-11/12 md:mx-auto">
        <div className="mt-40 text-left lg:w-[60%] border shadow-2xl p-16 rounded-xl mx-auto pl-8 pr-0">
          <h1 className="text-2xl tracking-[3px] font-medium">CHECKOUT</h1>
          <h1 className="text-[#D87D4A] mt-5 tracking-[2px]">
            BILLING DETAILS
          </h1>
          <form className="mt-5">
            <div className="md:flex">
              <div className="md:w-[47%]">
                <label>Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Alexei Ward"
                  className="active:outline-[#D87D4A] mt-3 p-4 h-14 w-[90%] border border-slate-400 rounded-xl"
                />
              </div>
              <div className="md:w-[47%] md:-mt-[26px]">
                <br />
                <label>Email Address</label>
                <br />
                <input
                  type="email"
                  placeholder="alexei@mail.com"
                  className="active:outline-[#D87D4A] mt-3 p-4 h-14 w-[90%] border border-slate-400 rounded-xl"
                />
              </div>
            </div>

            <br />
            <label>Phone Number</label>
            <br />
            <input
              type="phone"
              placeholder="+1 202-555-0136"
              className="mt-3 p-4 h-14 w-[90%] border border-slate-400 rounded-xl active:outline-[#D87D4A]
                    md:w-[42%]"
            />
          </form>

          <h1 className="text-[#D87D4A] mt-9 tracking-[2px]">SHIPPING INFO</h1>
          <form className="mt-5">
            <label>Your Address</label>
            <br />
            <input
              type="text"
              placeholder="1137 William Avenue"
              className="mt-3 p-4 h-14 w-[90%] border border-slate-400 rounded-xl active:outline-[#D87D4A]"
            />
            <br />
            <br />
            <div className="md:flex">
              <div className="md:w-[47%]">
                <label>ZIP Code</label>
                <br />
                <input
                  type="text"
                  placeholder="10001"
                  className="mt-3 p-4 h-14 w-[90%] border border-slate-400 rounded-xl active:outline-[#D87D4A]"
                />
              </div>
              <div className="md:w-[47%] md:-mt-[26px]">
                <br />
                <label>City</label>
                <br />
                <input
                  type="text"
                  placeholder="New York"
                  className="mt-3 p-4 h-14 w-[90%] border border-slate-400 rounded-xl active:outline-[#D87D4A]"
                />
              </div>
            </div>

            <br />
            <label>Country</label>
            <br />
            <input
              type="text"
              placeholder="United States"
              className="active:outline-[#D87D4A] mt-3 p-4 h-14 w-[90%] border border-slate-400 rounded-xl
                    md:w-[42%]"
            />
          </form>

          <h1 className="text-[#D87D4A] mt-9 tracking-[2px]">
            PAYMENT DETAILS
          </h1>
          <form className="mt-5">
            <div className="md:flex md:justify-between">
              <label>Payment Method</label>
              <br />
              <div className="md:w-[47%] md:mr-10">
                <div className="flex gap-5 mt-3 p-4 h-14 w-[90%] border hover:outline-[#D87D4A] border-slate-400 rounded-xl items-center">
                  <input
                    type="radio"
                    className="w-4 h-4 required:border-red-500 hover:border-yellow-700 active:text-[#D87D4A] "
                  />
                  <span className="text-xl">e-Money</span>
                </div>
                <div className="flex gap-5 mt-3 p-4 h-14 w-[90%] border border-slate-400 rounded-xl hover:outline-[#D87D4A] items-center">
                  <input
                    type="radio"
                    className="w-4 h-4 required:border-red-500 enabled:hover:border-yellow-700 text-[#D87D4A]"
                  />
                  <span className="text-xl">Cash on Delivery</span>
                </div>
              </div>
            </div>
            <br />
            <div className="md:flex md:gap-8">
              <div>
                <label>e-Money Number</label>
                <br />
                <input
                  type="number"
                  placeholder="363646828"
                  className="active:outline-[#D87D4A] mt-3 p-4 h-14 w-[90%] border border-slate-400 rounded-xl
                            md:w-[330px] lg:w-[270px] lg:-ml-2"
                />
              </div>
              <div className="md:-mt-[25px]">
                <br />
                <label>e-Money Pin</label>
                <br />
                <input
                  type="number"
                  placeholder="3636"
                  className="active:outline-[#D87D4A] mt-3 p-4 h-14 w-[90%] border border-slate-400 rounded-xl
                            md:w-[330px] lg:w-[270px]"
                />
              </div>
            </div>
          </form>
        </div>
        <br />
        <div className="border shadow-2xl mt-20 p-5 rounded-xl lg:w-[35%] lg:h-[50%] lg:mt-40">
          <div className="text-left">
            <h1 className="mt-2 text-2xl font-medium tracking-[2px]">
              SUMMARY
            </h1>
            <div className="mt-8 flex justify-between">
              <div className="flex h-20 gap-3">
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

              <h1 className="my-auto font-medium text-lg text-gray-500">X1</h1>
            </div>
            <div className="mt-8 flex justify-between">
              <div className="flex h-20 gap-3">
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

              <h1 className="my-auto font-medium text-lg text-gray-500">X2</h1>
            </div>
            <div className="mt-8 flex justify-between">
              <div className="flex h-20 gap-3">
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

              <h1 className="my-auto font-medium text-lg text-gray-500">X1</h1>
            </div>
            <div className="mt-10 flex justify-between ml-1 tracking-[1px] text-xl">
              <h1 className="font-light text-gray-500">TOTAL</h1>
              <h1 className="font-medium ">$ 5,396</h1>
            </div>
            <div className="mt-4 flex justify-between ml-1 tracking-[1px] text-xl">
              <h1 className="font-light text-gray-500">SHIPPING</h1>
              <h1 className="font-medium ">$ 50</h1>
            </div>
            <div className="mt-4 flex justify-between ml-1 tracking-[1px] text-xl">
              <h1 className="font-light text-gray-500">VAT (INCLUDED)</h1>
              <h1 className="font-medium ">$ 1,079</h1>
            </div>
            <div className="mt-6 flex justify-between ml-1 tracking-[1px] text-xl">
              <h1 className="font-light text-gray-500">GRAND TOTAL</h1>
              <h1 className="font-medium text-[#D87D4A]">$ 5,446</h1>
            </div>
          </div>

          <button
            onClick={() => {
              navigate("/reciept");
            }}
            className="text-white text-lg bg-[#D87D4A] mt-12 w-full h-16 tracking-[2px] mx-auto"
          >
            CONTINUE & PAY{" "}
          </button>
        </div>
      </div>

      <br />

      <Footer />
    </div>
  );
};

export default CheckOut;
