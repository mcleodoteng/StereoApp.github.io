import * as React from "react";
import Menu from "@mui/material/Menu";
import { FaBars } from "react-icons/fa";
import MenuItem from "@mui/material/MenuItem";
import Product from "./Product";
import Image1 from "../resources/assets/shared/mobile/h1.jpg";
import Image2 from "../resources/assets/shared/mobile/h2.jpg";
import Image4 from "../resources/assets/shared/mobile/h4.jpg";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
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
    <div className="float-left  ">
      <div
        className="h-4 pt-1 bg-black w-4 text-white text-lg cursor-pointer"
        onClick={handleOpenMenu}
      >
        <FaBars className="text-white text-xl mt-1" />
      </div>
      <div className="group relative">
        <Menu
          className="mt-2 text-center bg-transparent lg:flex md:-mt-[800px] lg:-mt-[320px] lg:w-[60%] xl:-mt-[370px] xl:w-[60%]"
          id="basic-menu"
          selectedElement={selectedElement}
          open={open}
          onClose={handleCloseMenu}
        >
          <div className="md:flex" onClick={handleCloseMenu}>
            <MenuItem
              onClick={() => {
                navigate("/headphone");
              }}
            >
              {" "}
              <Product imageName={Image1} productName={"HEADPHONES"} />{" "}
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/speaker");
              }}
            >
              {" "}
              <Product imageName={Image2} productName={"SPEAKERS"} />{" "}
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/earphone");
              }}
            >
              {" "}
              <Product imageName={Image4} productName={"EARPHONES"} />{" "}
            </MenuItem>
          </div>
        </Menu>
      </div>

      <br />
    </div>
  );
}
