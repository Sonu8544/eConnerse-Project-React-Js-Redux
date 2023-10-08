import "./App.css";
import { Routes, Route, useNavigate, createSearchParams } from "react-router-dom";
import { Products } from "./components/products";
import { Cart } from "./components/cart";
import { Product } from "./components/product";
import { NotFound } from "./components/not-found";
import { NavBar } from "./components/navbar";
import { Item } from "./components/item";

function App() {

const navigate = useNavigate();
const onSearch = (searchQuery) => {
  navigate(`/?${createSearchParams({ q: searchQuery})}`)
}

  return (
    <>
    <NavBar onSearch={onSearch} cartItemCount={12} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/home" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="*" element={<NotFound />} />
        <Route path="item" element={<Item />} />
      </Routes>
    </>
  );
}

export default App;
