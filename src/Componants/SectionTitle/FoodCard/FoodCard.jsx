import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

export default function FoodCard({ item }) {
  const { name, image, price, recipe } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const axiosSecure = useAxiosSecure();

  const handleAddToCart = (food) => {
    if (user?.email) {
      //todo: send cart item to the database
      const cartItem = {
        menuId: food._id,
        email: user?.email,
      };
      // 67-4 Simple Overview of React Query and load data
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data._id) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${food.name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You aren't logged in",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className=" absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-300 text-orange-300"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
