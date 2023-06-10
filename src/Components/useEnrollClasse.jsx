import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./hooks/UseAxiosSecure"

const useEnrolClass =()=>{
    
    const [axiosSecure] = useAxiosSecure()
    const {data:enrollClass=[],refetch} = useQuery({
        queryKey:['enrollclass'],
        // enabled:!loading,
        queryFn: async()=>{
    const res = await axiosSecure.get('/enrollclass')
    console.log(res.data)
    return res.data
        }
    })

    return [enrollClass,refetch]
}

export default useEnrolClass