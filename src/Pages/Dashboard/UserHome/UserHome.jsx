import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

export default function UserHome() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi!, Welcome </span>
        {
            user?.displayName ? user.displayName : "Back"
        }
      </h2>
    </div>
  );
}
