import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useRecent = () => {
  const axiosPublic = useAxiosPublic();
  const { data: recents = [], isLoading } = useQuery({
    queryKey: ["recent"],
    queryFn: async () => {
      const res = await axiosPublic.get("/recent-assignments");
      return res.data;
    },
  });
  return [recents, isLoading];
};

export default useRecent;
