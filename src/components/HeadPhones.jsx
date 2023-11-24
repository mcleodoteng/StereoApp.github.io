import AllProduct from "./AllProduct";
import Body3 from "./Body3";
import Footer from "./Footer";
import SideBar from "./slidemenu";
import Image1 from "../resources/assets/product-xx99-mark-two-headphones/mobile/h2.jpg";
import Image4 from "../resources/assets/product-xx99-mark-two-headphones/tablet/h2.jpg";
import Image2 from "../resources/assets/product-xx99-mark-one-headphones/mobile/h1.jpg";
import Image5 from "../resources/assets/product-xx99-mark-one-headphones/tablet/h1.jpg";
import Image3 from "../resources/assets/product-xx59-headphones/mobile/h1.jpg";
import Image6 from "../resources/assets/product-xx59-headphones/tablet/h1.jpg";
import Image7 from "../resources/assets/product-xx99-mark-two-headphones/desktop/h2.jpg";
import { useNavigate } from "react-router-dom";
import CartMenu from "./CartMenu";

const HeadPhones = () => {
  const navigate = useNavigate();
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
          <CartMenu />
        </div>
        <hr />
        <div className="bg-black h-32 w-screen -ml-8 mt-[64px] fixed xl:left-8 lg:left-8 md:left-8">
          <h1 className="text-white text-4xl m-auto mt-10 tracking-[4px]">
            HEADPHONES
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
      </div>
      <div className="overflow-hidden px-10">
        <br />
        <div className="mt-60 lg:flex xl:w-11/12 xl:mx-auto ">
          <div>
            <picture>
              <source media="(max-width: 640px)" srcSet={Image1} />
              <source media="(max-width: 768px)" srcSet={Image4} />
              <source media="(max-width: 1023px)" srcSet={Image4} />
              <source media="(max-width: 1024px)" srcSet={Image7} />
              <source media="(max-width: 1280px)" srcSet={Image7} />
              <source media="(max-width: 1880px)" srcSet={Image7} />
              <img
                src={Image1}
                alt="my-selfimage"
                className="left-0 rounded-lg"
              />
            </picture>
          </div>
          <div className="lg:text-left lg:my-auto">
            <h1 className="text-[#D87D4A] mt-10 text-xl tracking-[8px] font-light lg:ml-20 lg:text-lg">
              NEW PRODUCT
            </h1>
            <h1
              className="text-3xl mt-8 tracking-[3px]
                md:w-72 md:mx-auto md:text-4xl md:font-medium lg:ml-20 lg:mt-2"
            >
              XX99 MARK II HEADPHONES
            </h1>
            <p
              className="mt-6 text-justify-center text-gray-400 text-lg md:text-xl md:w-[700px] md:mx-auto 
                lg:ml-20 lg:text-lg lg:w-[520px]"
            >
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <button
              onClick={() => {
                navigate("/mark2");
              }}
              className="text-white text-lg bg-[#D87D4A] mt-8 w-48 h-16 tracking-[2px] lg:ml-20 lg:h-12"
            >
              SEE PRODUCT
            </button>
          </div>
        </div>

        <div className="mt-28 lg:flex lg:flex-row-reverse lg:gap-5 lg:mt-20 xl:w-11/12 xl:mx-auto">
          <picture>
            <source media="(max-width: 640px)" srcSet={Image2} />
            <source media="(max-width: 768px)" srcSet={Image5} />
            <source media="(max-width: 968px)" srcSet={Image5} />
            <source media="(max-width: 1024px)" srcSet={Image2} />
            <source media="(max-width: 1280px)" srcSet={Image2} />
            <source media="(max-width: 1868px)" srcSet={Image2} />
            <img
              src={Image2}
              alt="my-selfimage"
              className="left-0 rounded-lg lg:p-8"
            />
          </picture>
          <div className="lg:text-left lg:my-auto">
            <h1
              className="text-3xl mt-8 tracking-[3px]
                md:w-72 md:mx-auto md:text-4xl md:font-medium lg:ml-2"
            >
              XX99 MARK I HEADPHONES
            </h1>
            <p
              className="mt-6 text-justify-center text-lg text-gray-400
                md:text-xl md:w-[720px] md:mx-auto
                lg:ml-2 lg:text-lg lg:w-[485px]"
            >
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <button
              onClick={() => {
                navigate("/mark1");
              }}
              className="text-white text-lg bg-[#D87D4A] mt-8 w-48 h-16 tracking-[2px] lg:h-12"
            >
              SEE PRODUCT
            </button>
          </div>
        </div>

        <div className="mt-28 lg:flex xl:w-11/12 xl:mx-auto">
          <picture>
            <source media="(max-width: 640px)" srcSet={Image3} />
            <source media="(max-width: 768px)" srcSet={Image6} />
            <source media="(max-width: 968px)" srcSet={Image6} />
            <source media="(max-width: 1024px)" srcSet={Image3} />
            <source media="(max-width: 1280px)" srcSet={Image3} />
            <source media="(max-width: 1880px)" srcSet={Image3} />
            <img
              src={Image3}
              alt="my-selfimage"
              className="left-0 rounded-lg"
            />
          </picture>
          <div className="lg:text-left lg:my-auto">
            <h1
              className="text-3xl mt-8 tracking-[3px] w-[90%] mx-auto
                md:w-72 md:mx-auto md:text-4xl md:font-medium lg:ml-20 lg:mt-2"
            >
              XX59 HEADPHONES
            </h1>
            <p
              className="mt-6 text-justify-center text-lg text-gray-400
                md:text-xl md:w-[700px] md:mx-auto
                lg:ml-20 lg:text-lg lg:w-[520px]"
            >
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <button
              onClick={() => {
                navigate("/xx59");
              }}
              className="text-white text-lg bg-[#D87D4A] mt-8 w-48 h-16 tracking-[2px] lg:ml-20"
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

export default HeadPhones;
