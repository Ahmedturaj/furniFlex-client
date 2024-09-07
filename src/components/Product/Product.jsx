import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FaEuroSign } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Product = ({ product }) => {
  const { addToCart, loggedUser } = useContext(AuthContext);
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img src={product.productImage} className="object-cover h-72" alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.productName}</h2>
        <h2 className="flex gap-2 items-center justify-evenly text-xl font-bold">
          <span className="flex items-center gap-1">
            <FaEuroSign />
            {product.discountPrice}.00
          </span>
          <span className="text-gray-300">
            <del>{product.price}.00</del>
          </span>
          <span className="text-red-600">{product.discountPercent}%OFF</span>
        </h2>
        <p className="text-justify text-gray-500">
          {product.productDescription}
        </p>
        <div className="card-actions justify-end">
          <button
            disabled={loggedUser === " "}
            title={
              loggedUser === " " ? "Please log in to add items to the cart" : ""
            }
            onClick={() => addToCart(product)}
            className={
              loggedUser === " "
                ? " cursor-no-drop w-full p-2  flex items-center justify-center rounded bg-black text-white gap-3"
                : "w-full p-2 cursor-pointer flex items-center justify-center rounded bg-black text-white gap-3"
            }
          >
            <HiOutlineShoppingBag className="text-xl relative" />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
