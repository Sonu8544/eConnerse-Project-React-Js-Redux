import React, { useState, useEffect } from "react";
import fakeStoreApi from "../../services/fake-store-api";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../context/cart";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const { productId } = useParams(); // Destructure the productId from useParams

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const productData = await fakeStoreApi.fetchProductById(productId);
        setProduct(productData);
      } catch (error) {
        console.error("Data Fetching issue", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]); // Add productId as a dependency

  if (loading) {
    return (
      <div className="text-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!loading && !product) {
    return (
      <h1 className="text-3xl text-orange-500">
        Product Not Found
        <Link to="/" className="text-blue-500">
          Home
        </Link>
        see all Available product
      </h1>
    );
  }
  const { title, image, description, price } = product;
  return (
    <>
      <div className="bg-gray-100 p-[30px] pb-[130px]">
        <div className="container bg-gray-300 rounded-lg flex text-orange-600 text-lg w-[900px] ml-auto mr-auto shadow-2xl p-5 gap-8 mt-10">
          <div className="image">
            <img
              src={image}
              alt=""
              className="min-w-[300px] max-w-[400px] h-[400px] p-4"
            />
          </div>
          <div className="details flex flex-col gap-5 justify-center items-start">
            <div className="title font-bold text-2xl ">{title}</div>
            <Link to={"/productId"}>
              <div className="description text-orange-700 text-lg">
                {description}
              </div>
            </Link>
            <div>
              <div className="flex justify-between items-center  ">
                <div className="price mr-[250px] font-bold text-2xl">
                  $ {price}
                </div>
                <div className="addtocart cursor-pointer">
                  <button
                    type="button"
                    onClick={(product) => addToCart(product)}
                    className="bg-orange-400 hover:bg-orange-600 text-white rounded px-4 py-2 ml-2 transition duration-300"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Product };
