import { useEffect, useState } from "react";
import AllProduct from "./AllProduct";
import Body2 from "./Body2";
import Body3 from "./Body3";
import Footer from "./Footer";
import Header from "./Header";

const Homepage = () => {
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
  return (
    <>
      <div className="overflow-hidden">
        <Header />
      </div>

      <div className="overflow-hidden p-10">
        <AllProduct />
        <Body2 />
        <Body3 />
      </div>
      <div className="overflow-hidden">
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
