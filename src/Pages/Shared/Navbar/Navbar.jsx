import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  let cartItems = [];
  // if (user?.email) {
  //   const [cart] = useCart();
  //   cartItems = cart;
  // }

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {});
  };
  const navOptions = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/menu"}>Our Menu</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>Order Food</Link>
      </li>

      {user && isAdmin ? (
        <li>
          <Link to={"/dashboard/adminHome"}>Admin Home</Link>
        </li>
      ) : (
        <li>
          <Link to={"/dashboard/userHome"}>Guest Home</Link>
        </li>
      )}

      {user?.accessToken ? (
        <>
          <li onClick={handleLogout}>
            <Link>logout</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </>
      )}

      <li>
        <Link to={"/dashboard/cart"}>
          <button>
            <div className="flex relative">
              <FaCartShopping></FaCartShopping>
              <div className="badge badge-secondary absolute bottom-1 left-4">
                +{cartItems?.length}
              </div>
            </div>
          </button>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-50 bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">
            Bistro Boss Restaurant
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{navOptions}</ul>
        </div>
        <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
      </div>
    </>
  );
}
