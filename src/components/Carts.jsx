import { useNavigate } from "react-router-dom";

const Carts = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed top-10 right-10 bg-white p-2 rounded-md shadow-2xl">
      <h2>
        Your Cart <span>({cartItems.length})</span>
      </h2>
      <div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mt-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 mr-4 rounded-lg"
              />
              <div className="my-auto font-medium text-lg tracking-[1px]">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <div className="flex h-10 w-24 ml-8 text-center my-auto">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-[#eceaea] h-6 w-5 text-gray-400"
                >
                  -
                </button>
                <input
                  type="text"
                  value={item.quantity}
                  readOnly
                  className="bg-[#eceaea] h-6 w-10 text-center"
                />
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-[#eceaea] h-6 w-5 text-gray-400"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
        <div className="mt-10 flex justify-between ml-1 tracking-[1px]">
          <h1 className="font-light text-xl text-gray-500">TOTAL</h1>
          <h1 className="font-medium text-2xl">$ {totalAmount}</h1>
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/checkout");
        }}
        className="text-white text-lg bg-[#D87D4A] mt-8 w-full h-16 tracking-[2px] mx-auto rounded-sm"
      >
        CHECKOUT
      </button>
    </div>
  );
};

export default Carts;
