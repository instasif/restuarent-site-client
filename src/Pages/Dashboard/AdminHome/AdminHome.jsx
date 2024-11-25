import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaDollarSign, FaTruck, FaUsers, FaUtensils } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

export default function AdminHome() {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi!, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>

      <div className="stats stats-vertical lg:stats-horizontal shadow bg-red-200 my-3">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-3xl" />
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">{data?.revenue?.totalRevenue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl" />
          </div>
          <div className="stat-title">Guests</div>
          <div className="stat-value">{data?.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUtensils className="text-3xl" />
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{data?.menuItems}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaTruck className=" text-3xl" />
          </div>
          <div className="stat-title">Total Orders</div>
          <div className="stat-value">{data?.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
}
