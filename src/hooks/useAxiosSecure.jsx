import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const axiosSecure= axios.create({
      baseURL: 'https://assignment-12-server-side-pi.vercel.app'
      // baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
      const navigate = useNavigate();
      const {logOut}=useAuth();
      // interseptor code suru 
      // request interceptor to add authorization header for every secure call to the api 
      axiosSecure.interceptors.request.use(function (config){
            const token = localStorage.getItem('access-token')
            // console.log('request stopeped by interceptors', token);
            config.headers.authorization = `Bearer ${token}`;
            return config;
      },function (error){
            // do something with request error 
            return Promise.reject(error)
      });


      // intercept 401 and 403 status 
      axiosSecure.interceptors.response.use(function (response){
            return response;
      }, async (error)=>{
            const status = error.response.status;
            // console.log('status error in the interceptor', status);
            // for 401 or 403 log out the user and move the user  to the login page
            if(status === 401 || status === 403){
                  await logOut();
                  navigate('/login')
            }
            return Promise.reject(error)
      });








      // interseptor code ses 
      return axiosSecure;
};

export default useAxiosSecure;