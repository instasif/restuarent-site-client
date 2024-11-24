import React from "react";
import useCart from "../../../Hooks/useCart";
import CartTable from "./CartTable";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, refetch] = useCart();

  //? accumulator means total (default value decleared 0)
  const totalPrice = cart.reduce((accumulator, item) => {
    return +item.price + accumulator;
  }, 0);

  return (
    <div>
      <div className=" flex justify-evenly">
        <h2 className="text-3xl ">Items: {cart?.length}</h2>
        <h2 className="text-3xl ">Total price: ${totalPrice}</h2>
        {cart.length ? <Link to={"/dashboard/payment"}><button disabled={!cart.length} className="btn btn-outline btn-primary">Pay</button></Link> : <button disabled className="btn btn-outline btn-primary">Pay</button>}
      </div>
      <CartTable cart={cart} refetch={refetch} />
    </div>
  );
}
