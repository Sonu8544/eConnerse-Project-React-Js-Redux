import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Products } from "./components/products";
import { Cart } from "./components/cart";
import { Product } from "./components/product";
import { NotFound } from "./components/not-found";
import { NavBar } from "./components/navbar";

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/home" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
