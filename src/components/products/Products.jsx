import React, { useState, useEffect } from "react";
import fakeStoreApi from "../../services/fake-store-api";
import { Item } from "../item";
import { useSearchParams } from "react-router-dom";
import { useCart } from "../../context/cart";
import { NotFound } from "../not-found";


const Products = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [query, setQuery] = useSearchParams();

  const {addToCart} = useCart()

  const searchQuery = query.get("q");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const products = searchQuery
          ? await fakeStoreApi.fetchProductByQuery(searchQuery)
          : await fakeStoreApi.fetchAllProducts();
        setProduct(products);
      } catch (error) {
        console.error("Data Fetching issue", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [searchQuery]); // Add searchQuery as a dependency

  if (!loading && searchQuery && !product.length) { // Corrected the variable name to product
    return (
      <div className="bg-gray-200">
       <NotFound />
      </div>
    );
  }

  return (
    <div className="container flex flex-wrap justify-evenly ml-20px mr-20px mt-7 mb-5">
      {loading ? (
        <div className="flex justify-center items-center mt-10 text-orange-600">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
          <p className="text-xl">Loading...</p>
        </div>
      ) : (
        product.map((productItem) => ( // Changed variable name to productItem to avoid shadowing
          <Item
            key={productItem.id}
            data={productItem}
            addToCart={(productItem) => addToCart(productItem)}
            
          />
          
        ))
        
      )}
    </div>
  );
};

export { Products };
