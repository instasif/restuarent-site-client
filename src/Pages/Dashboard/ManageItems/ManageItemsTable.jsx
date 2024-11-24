import { IoTrash } from "react-icons/io5";
import useAdmin from "../../../Hooks/useAdmin";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useMenu } from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";

export default function ManageItemsTable() {
  const axiosSecure = useAxiosSecure();
  const [menu, refetch] = useMenu();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, deleted it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${id}`);
        console.log(res.data);
        refetch();
        if (res.data?.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto mt-4">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, idx) => (
              <tr key={idx}>
                <th>
                  <label>{idx + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item?.image} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item?.name || "loading..."}</td>
                <td>{item?.price || "loading..."}</td>
                <td>
                  <Link className="btn btn-ghost btn-md" to={`/dashboard/updateItem/${item._id}`}>
                      <FaEdit className="text-red-600 text-md font-bold cursor-pointer hover:text-red-400" />
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-md"
                  >
                    <IoTrash className="text-red-600 text-md font-bold cursor-pointer hover:text-red-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
