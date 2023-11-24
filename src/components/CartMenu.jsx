import * as React from "react";
import Menu from "@mui/material/Menu";
import { FaCartPlus } from "react-icons/fa";
import MenuItem from "@mui/material/MenuItem";
import Cart from "./Cart";

export default function App() {
  const [selectedElement, setselectedElement] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  function handleOpenMenu() {
    setOpen(true);
  }
  function handleCloseMenu(event) {
    setOpen(false);
    setselectedElement(event.target);
  }
  return (
    <div className="float-right">
      <div
        className="h-4 pt-1 bg-black w-4 text-white text-lg cursor-pointer"
        onClick={handleOpenMenu}
      >
        <FaCartPlus
          onClick={handleCloseMenu}
          className="text-white text-3xl mt-3 -ml-10"
        />
        <p className="-mt-10 bg-[#D87D4A] -ml-3 border-orange-500 border w-6 h-7">
          1
        </p>
      </div>
      <Menu
        className=" text-center bg-transparent ml-auto sm:ml-[45%] -mt-16
             md:-mt-[440px] md:ml-[52%] lg:ml-[60%]
             xl:ml-[72%] xl:mt-2 
             lg:-mt-48 w-[390px]"
        id="basic-menu"
        selectedElement={selectedElement}
        open={open}
        onClose={handleCloseMenu}
      >
        <MenuItem>
          {" "}
          <Cart />{" "}
        </MenuItem>
      </Menu>
      <br />
      <br />
    </div>
  );
}
