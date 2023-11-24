import Body1 from "./Body1";
import SideBar from "./slidemenu";
// import {FaCartPlus} from 'react-icons/fa'
import CartMenu from "./CartMenu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen">
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
        {/* <FaCartPlus className="text-white text-3xl px-1"/> */}

        <CartMenu />
      </div>
      <Body1 />
    </div>
  );
};

export default Header;
