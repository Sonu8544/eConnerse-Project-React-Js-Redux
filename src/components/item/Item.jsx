import React from "react";
import { Link } from "react-router-dom";

const Item = ({ data, addToCart }) => {
  const { image, id, title, price } = data;

  return (
    <>
    <div className="flex flex-row flex-wrap cursor-pointer mb-5" >
    <div className=" w-[350px] h-[450px] overflow-hidden shadow-2xl hover:bg-gray-200 transition duration-400 ease-in-out">
        <div>
        <img
          src={image}
          alt="Product Image"
          className="w-full h-[300px] rounded-lg p-2 hover:scale-110 object-cover overflow-hidden duration-150"
        />
        </div>
        <div className="px-6 py-4">
          <Link to={`product/${id}`}>
            <div className="font-bold text-md text-orange-500 hover:text-blue-500 mb-2">{title}</div>
          </Link>
          <div className="mt-4 flex justify-between items-center">
            <div>
              <span className="text-orange-500 text-lg font-bold">
                $ {price}
              </span>
            </div>
            <div>
              <button
                onClick={addToCart}
                className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export { Item };
