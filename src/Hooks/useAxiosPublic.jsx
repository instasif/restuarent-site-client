import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://mock-restaurant-nu.vercel.app",
});

export default function useAxiosPublic() {
  return axiosPublic;
}
