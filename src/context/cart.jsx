import { createContext, useContext, useState } from "react";

const initialState = {
  cart: [],
  cartItemCount: () => 0,
  addToCart: () => null,
  removeCartItem: () => null,
  increaseQuantity: () => null,
  decreaseQuantity: () => null,
};

const CartContext = createContext(initialState);

const useCart = () => useContext(CartContext);

const cartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialState.cart || []);

  // Cart Item Count
  const cartItemCount = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  // Add to cart
  const addToCart = (product) => {
    const currentProductId = cart.findIndex(
      (item) => item.product.id === product.id
    );
    if (currentProductId !== -1) {
      increaseQuantity(product.id);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  // removeCartItem
  const removeCartItem = (productId) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

  // increase Quantity
  const increaseQuantity = (productId) => {
    const allCartProduct = cart.slice();
    const currentProductId = allCartProduct.findIndex(
      (item) => item.product.id === productId
    );
    if (currentProductId !== -1) {
      allCartProduct[currentProductId].quantity += 1;
      setCart(allCartProduct);
    }
  };

  // decrease quantity
  const decreaseQuantity = (productId) => {
    const allCartProduct = cart.slice();
    const currentProductId = allCartProduct.findIndex(
      (item) => item.product.id === productId
    );
    if (currentProductId !== -1) {
      allCartProduct[currentProductId].quantity -= 1;
      setCart(allCartProduct);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItemCount,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, cartProvider };
