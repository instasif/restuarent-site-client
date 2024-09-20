import { Link, NavLink, Outlet } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { IoMdHome, IoMdMenu } from "react-icons/io";
import {
  BsStars,
  BsFillCalendarCheckFill,
  BsCalendar2WeekFill,
} from "react-icons/bs";
import useCart from "../Hooks/useCart";

export default function Dashboard() {
  const [cart] = useCart();
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-8">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-orange-500 min-h-full w-80 p-4 text-white">
          {/* Sidebar content here */}
          <li className="mb-2">
            <NavLink to={"/dashboard/cart"}>
              {" "}
              <IoCart /> My cart ({cart.length})
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to={"/dashboard/userHome"}>
              {" "}
              <IoMdHome />
              User Home
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to={"/dashboard/reservation"}>
              {" "}
              <BsCalendar2WeekFill />
              Reservation
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to={"/dashboard/review"}>
              {" "}
              <BsStars />
              Add Review
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to={"/dashboard/bookings"}>
              {" "}
              <BsFillCalendarCheckFill />
              My Bookings
            </NavLink>
          </li>
          <div className="divider divider-neutral"></div>
          <li className="mb-2">
            <NavLink to={"/"}>
              {" "}
              <IoMdHome />
              Home
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to={"/order/salad"}>
              {" "}
              <IoMdMenu />
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
