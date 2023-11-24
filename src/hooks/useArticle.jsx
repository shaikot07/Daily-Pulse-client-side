import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useArticle = () => {
      const axiosPublic = useAxiosPublic();

      const {data:article=[], isPending:loading, refetch}= useQuery({
            queryKey:['article'],
            queryFn: async()=>{
                  const res= await axiosPublic.get('/article');
                  return res.data;
            }
      })

      return [article, loading,refetch]
};

export default useArticle;