import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaDollarSign, FaTruck, FaUsers, FaUtensils } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function AdminHome() {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data = [] } = useQuery({
    queryKey: ["admin-stats", "order-stats"],
    queryFn: async () => {
      const [adminStats, orderStats] = await Promise.all([
        axiosSecure("/admin-stats"),
        axiosSecure("/order-stats"),
      ]);
      return {
        adminStats: adminStats.data,
        orderStats: orderStats.data,
      };
    },
  });

  //custom shape for the bar chart
  const BarColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const barGetPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const BarTriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return (
      <path d={barGetPath(x, y, width, height)} stroke="none" fill={fill} />
    );
  };

  //custom shape for the pie chart
  const PieCHartColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = data?.orderStats?.map((data) => {
    return { name: data.category, value: data.revenue };
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
          <div className="stat-value">
            {data?.adminStats?.revenue?.totalRevenue}
          </div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl" />
          </div>
          <div className="stat-title">Guests</div>
          <div className="stat-value">{data?.adminStats?.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUtensils className="text-3xl" />
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{data?.adminStats?.menuItems}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaTruck className=" text-3xl" />
          </div>
          <div className="stat-title">Total Orders</div>
          <div className="stat-value">{data?.adminStats?.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>

      <div className="flex">
        {/* bar chart */}
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={data?.orderStats}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<BarTriangleBar />}
              label={{ position: "top" }}
            >
              {data?.orderStats?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={BarColors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>

        {/* pie chart */}
        <div className="w-1/2">
          {pieChartData && pieChartData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={PieCHartColors[index % PieCHartColors.length]}
                    />
                  ))}
                </Pie>
                <Legend></Legend>
              </PieChart>
            </ResponsiveContainer>
          ) : null}
        </div>
      </div>
    </div>
  );
}
