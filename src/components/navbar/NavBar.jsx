import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="wrapper w-full bg-slate-500 p-3 text-white text-2xl ">
        <header className="container flex items-center w-full justify-around ">
          <div className="name">
            <h1 className="text-orange-500 text-3xl">eCommerse</h1>
          </div>
          <div>
            <div className="flex items-center justify-center">
              <input
                className="px-4 text-orange-500 py-2 border-4 border-orange-500 rounded outline-none w-[400px] text-lg rounded-xl"
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
               <p className="ml-12 text-white " > 13 </p>
              <h1 className="text-orange-500">Add To Cart</h1>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export { NavBar };
