import { IoTrash } from "react-icons/io5";

export default function UsersTable({users}) {
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
              <td>{user.role || "loading..."}</td>
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
  )
}
