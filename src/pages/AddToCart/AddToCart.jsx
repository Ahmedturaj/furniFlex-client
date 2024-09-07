import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Cart from "../../components/Cart/Cart";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaEuroSign } from "react-icons/fa";

const AddToCart = () => {
  const { cartItem } = useContext(AuthContext);
  const totalDiscountPrice = cartItem.reduce((total, item) => {
    return total + (item.discountPrice || 0);
  }, 0);
  console.log(totalDiscountPrice);
  return (
    <div className="mt-14">
      <div className="flex justify-start items-start p-4">
        <h2 className="text-3xl font-bold">An overview of your order</h2>
      </div>
      <div className="grid grid-cols-3  gap-x-4 mt-5">
        {cartItem.map((item) => (
          <Cart key={item._id} item={item}></Cart>
        ))}
        {/* .................. */}
        <div className="absolute top-36 right-8">
          <h2 className="text-3xl mb-8 font-bold">Oder details</h2>
          <div className="card bg-base-200 bg-opacity-20  rounded-2xl w-96">
            <div className="card-body border flex flex-col justify-between rounded-xl">
              <div className="flex  justify-between p-1">
                <p className="text-base text-gray-400 font-bold">Subtotal :</p>
                <p className="text-base text-gray-400 font-bold">
                  {totalDiscountPrice}.00
                </p>
              </div>
              <div className="flex  justify-between p-1">
                <p className="text-base text-gray-400 font-bold">Shipping :</p>
                <p className="text-base text-gray-400 font-bold">Free</p>
              </div>
              <div className="flex  justify-between p-1">
                <p className="flex items-center text-base text-gray-400 font-bold">
                  Estimated Tax <IoIosInformationCircleOutline />:
                </p>
                <p className="flex items-center text-base text-gray-400 font-bold">
                  <FaEuroSign /> -
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold text-xl">Total </p>
                <p className="font-bold text-xl">{totalDiscountPrice}.00</p>
              </div>
            </div>
            <div className="mt-5">
              <button
                style={{ transition: "all .5s" }}
                className="p-2 w-full bg-black rounded-md text-white cursor-pointer hover:shadow-2xl shadow-blue-500"
              >
                Go to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
