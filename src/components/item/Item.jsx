import React from "react";
import { Link } from "react-router-dom";

const Item = ({data, addToCart}) => {

    const {image, id, title, price} = data

  return (
    <>
      <div className="p-1 mr-2 ml-2 flex flex-wrap gap-1 justify-between" >
        <div className="group min-w-[300px] max-w-[400px] rounded overflow-hidden shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out">
          <img
            src={image}
            alt="Product Image"
            className="w-full p-3"
          />
          <div className="px-6 py-4">
          <Link to={`product/${id}`} >
            <div className="font-bold text-xl mb-2">{title}</div>
</Link>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <span className="text-orange-500 text-lg font-bold">
                  {price}
                </span>
              </div>
              <div>
                <button onClick={addToCart} className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl">
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
