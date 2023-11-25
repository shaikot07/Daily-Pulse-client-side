import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAddArticle = () => {
      const axiosSecure = useAxiosSecure();
      const { user } = useAuth()
      // tanstak query 
      const {  data: addArticle = [],refetch } = useQuery({
            queryKey: ['article', user?.email],
            queryFn: async () => {
                  const res = await axiosSecure.get(`/article?email=${user.email}`)
                  // console.log(res);
                  return res.data
            }
      })

      return [addArticle, refetch]
};

export default useAddArticle;