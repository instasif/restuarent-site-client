import { IoTrash } from "react-icons/io5";
import usePaymentHistory from "../../../Hooks/usePaymentHistory";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";

export default function PaymentHistory() {
  const [paymentHistory] = usePaymentHistory();
  console.log(paymentHistory);
  return (
    <>
      <SectionTitle heading={"Payment History"} subHeading={"At a glance!"} />
      <div className="overflow-x-auto mt-4">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr className="">
            <th>#</th>
            <th>Price</th>
            <th>Transaction Id</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map((item, idx) => (
            <tr key={item._id}>
              <th>
                <label>{idx + 1}</label>
              </th>
              <td>${item.price || "loading..."}</td>
              <td>{item.transactionId || "loading..."}</td>
              <td>{item.status || "loading..."}</td>
              <td>{item.date || "loading..."}</td>
              {/* <td>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-ghost btn-md"
                >
                  <IoTrash   className="text-red-600 text-md cursor-pointer hover:text-red-400" />
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
