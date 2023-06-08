import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./UseAxiosSecure"


const useClass =()=>{
    const [axiosSecure] = useAxiosSecure()
    const {data:classes=[],refetch} = useQuery({
        queryKey:['allclasses'],
        queryFn: async()=>{
    const res = await axiosSecure.get('/allclasses')
    // console.log(res.data)
    return res.data
        }
    })

    return [classes,refetch]
}

export default useClass