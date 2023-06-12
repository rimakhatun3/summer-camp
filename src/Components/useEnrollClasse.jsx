import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./hooks/UseAxiosSecure"
import axios from "axios"

const useEnrolClass =()=>{
    
    // const [axiosSecure] = useAxiosSecure()
    const {data:enrollClass=[],refetch} = useQuery({
        queryKey:['enrollclass'],
        // enabled:!loading,
        queryFn: async()=>{
    const res = await axios.get('https://b7a12-server.vercel.app/enrollclass')
    console.log(res.data)
    return res.data
        }
    })

    return [enrollClass,refetch]
}

export default useEnrolClass