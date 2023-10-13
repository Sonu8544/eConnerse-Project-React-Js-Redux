import { Link } from "react-router-dom";
import { useCart } from "../../context/cart";
import "./Cart.css";

const shippingCharge = 9;

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  return (
    <div className="cartWrapper">
      <div className="container">
        {cart.length >= 1 ? (
          cart.map((item, index) => (
            <div key={index}>
            {console.log(item.product)}
              {/* Render your item information here */}
            </div>
          ))
        ) : (
          <div className="error">
            <h1 className="text-3xl">Cart is empty</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export { Cart };
