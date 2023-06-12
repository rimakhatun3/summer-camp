import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "./UseAxiosSecure";



const useInstructor =()=>{
    const {user,loading} = useContext(AuthContext)
const [axiosSecure] = useAxiosSecure()


const {data:isInstructor,loading:isInstructorLoading} = useQuery({
    queryKey:['instructor',user?.email],
    enabled:!loading ,
queryFn:async ()=>{
const res = await axiosSecure.get(`/user/instructor/${user?.email}`)
return res.data.instructor
}

})
return [isInstructor , isInstructorLoading]
}

export default useInstructor;