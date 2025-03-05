import React from "react";
import useFetch from "./useFetch";
import ProductCard from "./ProductCard";

const Products = () => {
  const [data] = useFetch("https://dummyjson.com/products?limit=0");

  return (
    <div className="w-full min-h-screen bg-gray-950 text-white p-10">
      <h1>Products</h1>

      <div className="w-full grid grid-cols-5 gap-5 my-10">
        {data &&
          data?.products?.map((product) => {
            return <ProductCard product={product} key={product?.id} />;
          })}
      </div>

      <div className="w-full">
        <button></button>
        <span>
          {data?.limit}/{data?.total}
        </span>
        <button></button>
      </div>
    </div>
  );
};

export default Products;
