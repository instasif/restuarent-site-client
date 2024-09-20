import { IoTrash } from "react-icons/io5";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

export default function CartTable({ cart, refetch }) {
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          refetch();
          if (res.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="overflow-x-auto mt-4">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Item Image</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, idx) => (
            <tr key={item._id}>
              <th>
                <label>{idx + 1}</label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{item.name || "loading..."}</td>
              <td>${item.price || "loading..."}</td>
              <td>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-ghost btn-md"
                >
                  <IoTrash className="text-red-600 text-md cursor-pointer hover:text-red-400" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
