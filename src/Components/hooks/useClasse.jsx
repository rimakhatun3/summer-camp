import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./UseAxiosSecure"
import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"


const useClass =()=>{
    const {loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const {data:classes=[],refetch} = useQuery({
        queryKey:['allclasses'],
        // enabled:!loading,
        queryFn: async()=>{
    const res = await axiosSecure.get('/allclasses')
    console.log(res.data)
    return res.data
        }
    })

    return [classes,refetch]
}

export default useClass