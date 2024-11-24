import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export default function usePaymentHistory() {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: paymentHistory = [], refetch } = useQuery({
    queryKey: ["paymentHistory"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });
  return [paymentHistory, refetch];
}