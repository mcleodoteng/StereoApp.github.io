import * as React from "react";
import Menu from "@mui/material/Menu";
import { FaCartPlus } from "react-icons/fa";
import MenuItem from "@mui/material/MenuItem";
import Carts from "./Carts"; // Import Carts component
import PropTypes from "prop-types";

const CartMenu = ({ cartItems, setCartItems }) => {
  const [selectedElement, setselectedElement] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  function handleOpenMenu() {
    setOpen(true);
  }

  function handleCloseMenu(event) {
    setOpen(false);
    setselectedElement(event.target);
  }

  const cartItemsLength = cartItems ? cartItems.length : 0;

  return (
    <div className="float-right">
      <div
        className="h-4 pt-1 bg-black w-4 text-white text-lg cursor-pointer"
        onClick={handleOpenMenu}
      >
        <FaCartPlus className="text-white text-3xl mt-3 -ml-10" />
        <p className="-mt-10 bg-[#D87D4A] -ml-3 border-orange-500 border w-6 h-7">
          {cartItemsLength}
        </p>
      </div>
      <Menu
        className="text-center bg-transparent"
        id="basic-menu"
        selectedElement={selectedElement}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{ "aria-labelledby": "cart-button" }}
      >
        <MenuItem>
          <div>
            {/* Pass cartItems to Carts component */}
            <Carts cartItems={cartItems} setCartItems={setCartItems} />
          </div>
        </MenuItem>
      </Menu>
      <br />
      <br />
    </div>
  );
};

CartMenu.propTypes = {
  cartItems: PropTypes.array.isRequired, // Ensure prop is an array
  setCartItems: PropTypes.func.isRequired, // Function to update cartItems
};

export default CartMenu;
