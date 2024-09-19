import { FaCartShopping, FaHouseTsunami } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <div className="w-64 min-h-full bg-orange-400">
        <ul className="menu p-4">
          <li>
            <NavLink to={"/dashboard/cart"}>
            <FaCartShopping />
            My cart
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
            <FaHouseTsunami />  //!67-7 Cart data from custom hook and calculate total price
            My cart
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
