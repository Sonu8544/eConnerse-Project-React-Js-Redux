import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="wrapper w-full bg-slate-500 p-3 text-white text-2xl ">
        <header className="container flex items-center w-full justify-around ">
          <div className="name">
            <Link to="/">
              <h1 className="text-orange-500 hover:underline text-3xl">
                eCommerse
              </h1>
            </Link>
          </div>
          <div>
            <div className="flex items-center justify-center">
              <input
                className="px-4 text-orange-500 py-2 border-4 border-orange-500 rounded outline-none w-[400px] text-lg"
                type="text"
                placeholder="search here..."
              />
              <button className="bg-orange-400 hover:bg-orange-600 text-white rounded px-4 py-2 ml-2 transition duration-300">
                search
              </button>
            </div>
          </div>
          <div>
            <div className="addToCart">
              <p className="ml-12 text-white "> 13 </p>
              <Link to="/cart">
                <h1 className="text-orange-500 hover:underline duration-100">
                  Add To Cart
                </h1>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export { NavBar };
