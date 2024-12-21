import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartMenu from "./CartMenu";
import SideBar from "./slidemenu";
import Body1 from "./Body1";

const Header = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]); // Make sure it's initialized as an empty array

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  console.log("cartItems in Header:", cartItems); // Check cartItems state

  return (
    <div className="w-screen">
      <div className="bg-black flex justify-between w-screen p-1 px-5 h-24 items-center fixed top-0 left-0">
        <SideBar />
        <a
          onClick={() => navigate("/")}
          className="text-white text-4xl font-semibold tracking-[2px]"
        >
          audiophile
        </a>

        {/* Ensure cartItems is passed as a prop to CartMenu */}
        <CartMenu cartItems={cartItems} />
      </div>
      <Body1 />
    </div>
  );
};

export default Header;
