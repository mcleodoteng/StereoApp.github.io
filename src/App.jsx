import "./App.css";
import YX1EarPhones from "./components/YX1EarPhones";
import Zx7Speaker from "./components/Zx7Speaker";
import Zx9Speaker from "./components/Zx9Speaker";
import XX59 from "./components/XX59";
import Earphone from "./components/Earphone";
import Mark2 from "./components/Mark2";
import Reciept from "./components/Reciept";
// import Cart from './components/Cart'
import CheckOut from "./components/CheckOut";
import Mark1 from "./components/Mark1";
import HeadPhones from "./components/HeadPhones";
import Homepage from "./components/Homepage";
import { HashRouter as Routes, Route } from "react-router-dom";
import Speakers from "./components/Speakers";

function App() {
  return (
    <>
      <div className=" overflow-hidden mx-auto">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/headphone" element={<HeadPhones />} />
          <Route path="/speaker" element={<Speakers />} />
          <Route path="/earphone" element={<Earphone />} />
          <Route path="/9speaker" element={<Zx9Speaker />} />
          <Route path="/7speaker" element={<Zx7Speaker />} />
          <Route path="/mark2" element={<Mark2 />} />
          <Route path="/mark1" element={<Mark1 />} />
          <Route path="/yx1earphone" element={<YX1EarPhones />} />
          <Route path="/xx59" element={<XX59 />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/reciept" element={<Reciept />} />
        </Routes>
        {/* <HeadPhones/> */}
        {/* <Speakers/> */}
        {/* <Earphone/> */}
        {/* <Mark2/> */}
        {/* <Mark1/> */}
        {/* <XX59/> */}
        {/* <Zx9Speaker/> */}
        {/* <Zx7Speaker/> */}
        {/* <YX1EarPhones/> */}
        {/* <CheckOut/> */}
        {/* <Cart/> */}
        {/* <Reciept/> */}
      </div>
    </>
  );
}

export default App;
