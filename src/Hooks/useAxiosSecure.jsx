import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);

    // request interceptor to add authorization header for every secure call to teh api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });


    

    axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      async (error) => {
        if (!error.response) {
          console.error("Network or unexpected error:", error);
          return Promise.reject(error);
        }
    
        const statusCode = error.response.status;
        if (statusCode === 401 || statusCode === 403) {
          await logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((err) => {
              console.error("Logout error:", err);
            });
        }
        return Promise.reject(error);
      }
    );


    return axiosSecure;
};

export default useAxiosSecure;