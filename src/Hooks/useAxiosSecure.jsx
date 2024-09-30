import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

export default function useAxiosSecure() {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  //? request interceptor to add authorization header for every secure cal to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );

  //? intercets 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      console.log(error);
      const statusCode = error.response.status;
      if (statusCode === 401 || statusCode === 403) {
        await logOut()
          .then(() => {})
          .catch((err) => {});
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
}
