import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { FaEuroSign, FaMinus, FaPlus } from "react-icons/fa";

const Cart = ({ item }) => {
  const { updateCartQuantity, removeCart } = useContext(AuthContext);
  return (
    <div
      key={item._id}
      className="bg-base-200 bg-opacity-25 col-span-2 flex justify-between border-b-2 "
    >
      {/* image */}
      <div className="flex  justify-start items-center gap-6 p-2">
        <div className="">
          <div className="flex items-center gap-3 justify-center border-2 p-3 rounded-md">
            <button
              className="cursor-pointer"
              onClick={() => updateCartQuantity(item._id, item.quantity + 1)}
            >
              <FaPlus />
            </button>
            <p>{item.quantity}</p>
            <button
              className="cursor-pointer"
              onClick={() => updateCartQuantity(item._id, item.quantity - 1)}
            >
              <FaMinus />
            </button>
          </div>
        </div>
        <img className="w-40" src={item.productImage} alt="" />
        <p className="mt-5">{item.productName}</p>
      </div>
      {/* ---------- */}

      <div className="flex flex-col justify-between items-center p-4">
        <button onClick={() => removeCart(item._id)} className="cursor-pointer">
          X
        </button>
        <h3 className="flex gap-1 items-center">
          <FaEuroSign />
          {item.discountPrice}.00
        </h3>
      </div>
    </div>
  );
};

Cart.propTypes = {
  item: PropTypes.object,
};

export default Cart;
