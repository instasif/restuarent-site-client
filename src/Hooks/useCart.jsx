import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export default function useCart() {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);

  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
}
