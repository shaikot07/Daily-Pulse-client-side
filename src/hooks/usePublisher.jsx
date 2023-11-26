
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const usePublisher = () => {
      const axiosPublic = useAxiosPublic();

      const {data:publisher=[], isPending:loading, refetch}= useQuery({
            queryKey:['publisher'],
            queryFn: async()=>{
                  const res= await axiosPublic.get('/publisher');
                  return res.data;
            }
      })

      return [publisher, loading,refetch]
};

export default usePublisher;