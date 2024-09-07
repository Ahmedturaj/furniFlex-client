import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Product from "../../components/Product/Product";
import Pagination from "../../components/Pagination/Pagination";

const Products = () => {
  const { products } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All"); // State for selected

  const productsPerPage = 6;

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="my-14">
      <div className="flex justify-center gap-6">
        <div className="flex items-start justify-start flex-col gap-6 w-4/12 border-r">
          <button
            onClick={() => setSelectedCategory("rocking chair")}
            className={`p-2 ${
              selectedCategory === "rocking chair"
                ? "bg-black text-white"
                : "bg-gray-400"
            } hover:bg-black hover:text-white text-xl font-bold rounded-md w-11/12 mx-auto`}
          >
            Rocking Chair
          </button>
          <button
            onClick={() => setSelectedCategory("side chair")}
            className={`p-2 ${
              selectedCategory === "side chair"
                ? "bg-black text-white"
                : "bg-gray-400"
            } hover:bg-black hover:text-white text-xl font-bold rounded-md w-11/12 mx-auto`}
          >
            Side Chair
          </button>
          <button
            onClick={() => setSelectedCategory("lounge chair")}
            className={`p-2 ${
              selectedCategory === "lounge chair"
                ? "bg-black text-white"
                : "bg-gray-400"
            } hover:bg-black hover:text-white text-xl font-bold rounded-md w-11/12 mx-auto`}
          >
            Lounge Chair
          </button>
          <button
            onClick={() => setSelectedCategory("All")}
            className={`p-2 ${
              selectedCategory === "All" ? "bg-black text-white" : "bg-gray-400"
            } hover:bg-black hover:text-white text-xl font-bold rounded-md w-11/12 mx-auto`}
          >
            All
          </button>
        </div>
        <div className="flex-grow text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))
          ) : (
            <p>No products available in this category.</p>
          )}
        </div>
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Products;
