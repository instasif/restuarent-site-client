import { IoTrash } from "react-icons/io5";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { RiAdminFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

export default function UsersTable({ users, refetch }) {
  const axiosSecure = useAxiosSecure();

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          console.log(res.data.modifiedCount);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `${user.name} is admin now!`,
              icon: "success",
            });
          }
          refetch();
        });
      }
    });
  };

  const handleDelete = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `${user.name} has been deleted`,
              icon: "success",
            });
          }
          refetch();
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
            <th>User Image</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>User Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user._id}>
              <th>
                <label>{idx + 1}</label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{user.name || "loading..."}</td>
              <td>{user.email || "loading..."}</td>
              <td>
                {user.role === "admin" ? (
                  <>
                    <RiAdminFill className="text-red-600 text-xl font-bold cursor-pointer hover:text-red-400 ml-4" />
                    <small className="font-semibold ml-2">Admin</small>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost btn-md "
                    >
                      <div className="">
                        <FaUser className="text-red-600 text-xl mr-2 font-bold cursor-pointer hover:text-red-400" />
                        <small className=" -ml-3">Customer</small>
                      </div>
                    </button>
                  </>
                )}
              </td>
              <td>
                <button
                  onClick={() => handleDelete(user)}
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
  );
}
