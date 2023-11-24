import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="bg-black bg-cover w-full lg:mt-64 xl:px-5 lg:px-5 bottom-0 left-0">
        <hr className="mt-20 h-2 bg-[#D87D4A] w-36 mx-auto " />
        <div className="bg-black mx-auto md:text-left md:ml-10">
          <br></br>
          <br />
          <br />
          <div className="lg:flex lg:justify-between">
            <a
              onClick={() => {
                navigate("/");
              }}
              className="text-white text-3xl font-semibold tracking-[2px]"
            >
              audiophile
            </a>
            <div className="md:flex md:gap-5 md:mt-7 lg:-mt-5 lg:mr-10">
              <a
                onClick={() => {
                  navigate("/");
                }}
              >
                <h1 className="text-white text-lg mt-14 font-extralight tracking-[3px] md:mt-5">
                  HOME
                </h1>
              </a>
              <a
                onClick={() => {
                  navigate("/headphone");
                }}
              >
                <h1 className="text-white text-lg mt-5 font-extralight tracking-[3px] ">
                  HEADPHONES
                </h1>
              </a>
              <a
                onClick={() => {
                  navigate("/speaker");
                }}
              >
                <h1 className="text-white text-lg mt-5 font-extralight tracking-[3px] ">
                  SPEAKERS
                </h1>
              </a>
              <a
                onClick={() => {
                  navigate("/earphone");
                }}
              >
                <h1 className="text-white text-lg mt-5 font-extralight tracking-[3px]">
                  EARPHONES
                </h1>
              </a>
            </div>
          </div>

          <p
            className="text-white text-justify-center mt-16 w-[360px] mx-auto text-lg font-thin tracking-[0.5px]
            md:text-left md:mx-0 md:w-[700px]"
          >
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </p>
          <div className="md:flex md:justify-between">
            <h1 className="mt-12 text-xl text-gray-400">
              Copyright 2021. All Rights Reserved
            </h1>
            <div className="flex justify-between mt-12 mx-auto w-[35%] md:w-36 md:mr-16">
              <BsFacebook className="text-white text-3xl" />
              <BsTwitter className="text-white text-3xl" />
              <BsInstagram className="text-white text-3xl" />
            </div>
          </div>

          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Footer;
