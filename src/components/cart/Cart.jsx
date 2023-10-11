import React from "react";
import { useCart } from "../../context/cart";
import { Link } from "react-router-dom";

const shippingCharge = 39;
const Cart = () => {
  const {
    cart,
    cartItemCount,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeCartItem,
  } = useCart();

  const cartTotal = () =>{
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  }

  const round = () =>{
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals)
  }

  return <h1>Lorem, ipsum dolor.</h1>;
};

export { Cart };
