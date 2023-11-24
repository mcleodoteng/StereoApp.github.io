import AllProduct from "./AllProduct";
import Body2 from "./Body2";
import Body3 from "./Body3";
import Footer from "./Footer";
import Header from "./Header";

const Homepage = () => {
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
