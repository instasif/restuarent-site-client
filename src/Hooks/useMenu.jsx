import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

export const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  const { data: menu = [], refetch, isPending: loading } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });
  return [menu, refetch, loading];
};
