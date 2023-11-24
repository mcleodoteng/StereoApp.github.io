import { useNavigate } from "react-router-dom";

const Body1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="bg-back bg-no-repeat -mt-10 bg-cover h-[680px] w-full bg-left 
    md:bg-backm md:bg-cover md:bg-no-repeat md:mt-10 md:h-[720px]
    lg:bg-backl lg:bg-cover lg:bg-no-repeat lg:mt-10 lg:text-left
    xl:bg-backl xl:bg-cover xl:bg-no-repeat xl:mt-10 xl:text-left xl:bg-left"
      >
        {/* <img src={Image1} alt='my-selfimage'  className='left-0'/> */}
        <div className="ml-6">
          <br></br>
          <hr className="mt-20 md:mt-1" />
          <p
            className="text-white mt-28 tracking-[10px] text-xl font-thin
        md:text-2xl
        lg:ml-20"
          >
            NEW PRODUCT
          </p>
          <h1
            className="text-white font-semibold tracking-[3px] text-4xl mt-4
        md:text-6xl
        lg:ml-20 lg:text-4xl"
          >
            XX99 MARK II
          </h1>
          <h1
            className="text-white font-semibold tracking-[3px] text-4xl
        md:text-6xl
        lg:ml-20 lg:text-6xl"
          >
            HEADPHONES
          </h1>
          <p
            className="text-white mt-8 font-thin w-[365px] mx-auto tracking-[2px] text-lg
        md:text-xl md:w-[510px]
        lg:text-lg lg:w-[510px] lg:ml-20"
          >
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
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
        <br />
      </div>
    </>
  );
};

export default Body1;
