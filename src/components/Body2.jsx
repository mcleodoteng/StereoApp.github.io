// import Image4 from '../resources/assets/product-zx9-speaker/mobile/h1.jpg'
import Image3 from "../resources/assets/product-zx9-speaker/mobile/h7.jpg";
import Image7 from "../resources/assets/product-zx9-speaker/mobile/h6.jpg";
import Image5 from "../resources/assets/product-zx7-speaker/mobile/x7.jpg";
import Image6 from "../resources/assets/product-yx1-earphones/mobile/h1.jpg";
import Image4 from "../resources/assets/product-yx1-earphones/tablet/h1.jpg";
import Image8 from "../resources/assets/home/tablet/h2.jpg";
import Image9 from "../resources/assets/home/desktop/h2.jpg";
import Image10 from "../resources/assets/product-zx9-speaker/mobile/3.jpg";
import { useNavigate } from "react-router-dom";

const Body2 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mt-5 rounded-lg p-6 xl:w-9/12 xl:mx-auto lg:w-9/12 lg:mx-auto">
        <picture>
          <source media="(max-width: 640px)" srcSet={Image10} />
          <source media="(max-width: 768px)" srcSet={Image10} />
          <source media="(max-width: 1024px)" srcSet={Image7} />
          <source media="(max-width: 1280px)" srcSet={Image3} />
          <source media="(max-width: 1800px)" srcSet={Image3} />
          <img
            src={Image3}
            alt="my-selfimage"
            className="left-0 rounded-xl md:w-full"
          />
        </picture>
        <div className="mx-auto lg:text-left lg:ml-20">
          <h1
            className="text-white font-medium text-xl tracking-[3px] -mt-[163px]
                sm:text-3xl sm:-mt-[250px]
                md:text-4xl md:-mt-[420px]
                lg:text-3xl lg:-mt-[270px] lg:ml-72
                xl:text-3xl xl:-mt-[295px] xl:ml-80"
          >
            ZX9
          </h1>
          <h1
            className="text-white font-medium text-xl tracking-[3px]
                md:text-4xl
                lg:text-3xl lg:ml-72
                xl:text-3xl xl:ml-80"
          >
            SPEAKER
          </h1>
          <p
            className="font-thin mx-auto tracking-[1px] text-sm text-white mt-1 w-[300px]
                md:text-xl md:w-[480px] md:tracking-[2px] md:mt-6
                lg:text-lg lg:ml-72 lg:mt-3 lg:w-[400px] lg:tracking-[2px]
                xl:text-lg xl:ml-80 xl:mt-3 xl:w-[400px] xl:tracking-[2px]"
          >
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button
            onClick={() => {
              navigate("/9speaker");
            }}
            className="text-white text-lg bg-[#000000] mt-1 w-48 h-9 tracking-[2px]
                md:mt-7 md:w-56 md:h-20
                lg:mt-5 lg:w-48 lg:h-10 lg:ml-72
                xl:mt-5 xl:w-48 xl:h-10 xl:ml-80"
          >
            SEE PRODUCT
          </button>
        </div>

        <br />
        <br />
      </div>
      <div className="xl:w-9/12 xl:mx-auto lg:w-9/12 lg:mx-auto md:mt-24">
        <div>
          <picture>
            <source media="(max-width: 640px)" srcSet={Image5} />
            <source media="(max-width: 766px)" srcSet={Image5} />
            <source media="(max-width: 1024px)" srcSet={Image8} />
            <source media="(max-width: 1280px)" srcSet={Image9} />
            <source media="(max-width: 1800px)" srcSet={Image9} />
            <img
              src={Image9}
              alt="my-selfimage"
              className="left-0 mt-12 rounded-xl md:w-full"
            />
          </picture>
          <div className="-ml-32 md:text-left md:ml-12 md:-mt-60">
            <h1 className="text-black font-medium text-2xl tracking-[3px] -mt-56 md:text-3xl lg:mt-0 ">
              ZX7 SPEAKER
            </h1>
            <button
              onClick={() => {
                navigate("/7speaker");
              }}
              className="text-black text-lg mt-6 w-44 h-14 tracking-[2px] bg-transparent border-black border hover:bg-black hover:text-white"
            >
              SEE PRODUCT
            </button>
          </div>
        </div>

        <div className="mt-40 md:flex md:justify-between md:mt-32">
          <picture>
            <source media="(max-width: 640px)" srcSet={Image6} />
            <source media="(max-width: 767px)" srcSet={Image6} />
            <source media="(max-width: 1024px)" srcSet={Image4} />
            <source media="(max-width: 1280px)" srcSet={Image4} />
            <img
              src={Image6}
              alt="my-selfimage"
              className="left-0 mt-12 rounded-xl"
            />
          </picture>
          <div className="mt-5 bg-[#eaeaea] rounded-lg p-8 md:mt-12 md:rounded-r-lg md:text-left lg:w-[580px]  xl:h-[300px]">
            <h1 className="text-black font-medium text-3xl tracking-[2px] lg:mt-1">
              YX1 EARPHONES
            </h1>
            <button
              onClick={() => {
                navigate("/yx1earphone");
              }}
              className="text-black text-lg mt-7 w-44 h-14 tracking-[2px] bg-transparent border-black border -ml-28 md:ml-0 hover:bg-black hover:text-white"
            >
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body2;
