import SideBar from "./slidemenu";
import Image1 from "../resources/assets/cart/h1.jpg";
import Image2 from "../resources/assets/checkout/h1.svg";
import { useNavigate } from "react-router-dom";
import CartMenu from "./CartMenu";

const Reciept = () => {
  const navigate = useNavigate();
  return (
    <div>
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
        <CartMenu />
      </div>
      <div className="border shadow-sm mt-24 p-5 rounded-xl md:p-10">
        <div className="text-left">
          <div className="md:flex md:ml-2">
            <div>
              <div className="">
                <img
                  src={Image2}
                  alt="my-selfimage"
                  className="left-0 rounded-lg h-20"
                />
              </div>
              <h1 className="text-3xl mt-5 font-medium tracking-[1px]">
                THANK YOU <br /> FOR YOUR ORDER
              </h1>
              <p className="mt-3 text-lg text-gray-400">
                You will receive an email confirmation shortly.
              </p>
              <div className="bg-gray-100 rounded-t-xl">
                <div className="mt-10 flex justify-between bg-gray-100 px-2 py-3 rounded-xl md:w-[400px]">
                  <div className="flex h-20 gap-2">
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

                  <h1 className="my-auto font-medium text-lg text-gray-500 px-3">
                    X1
                  </h1>
                </div>
                <hr />
                <p className="mt-4 text-gray-500 text-lg text-center">
                  and 2 other item(s)
                </p>
                <br />
              </div>
            </div>

            <div className="ml-1 tracking-[1px] bg-black rounded-b-xl p-6 md:h-[170px] md:mt-[255px] md:rounded-r-xl md:w-64">
              <h1 className="font-light text-xl text-gray-400">GRAND TOTAL</h1>
              <h1 className="font-medium text-2xl mt-2 text-white">$ 5,446</h1>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            navigate("/");
          }}
          className="text-white text-lg bg-[#D87D4A] mt-8 w-full h-16 tracking-[2px] mx-auto rounded-sm"
        >
          {" "}
          BACK TO HOME{" "}
        </button>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Reciept;
