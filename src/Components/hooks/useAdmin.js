import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "./UseAxiosSecure";



const useAdmin =()=>{
    const {user,loading} = useContext(AuthContext)
const [axiosSecure] = useAxiosSecure()


const {data:isAdmin,loading:isAdminLoading} = useQuery({
    queryKey:['admin',user?.email],
    enabled:!loading,
queryFn:async ()=>{
const res = await axiosSecure.get(`/user/admin/${user?.email}`)
return res.data.admin
}

})
return [isAdmin , isAdminLoading]
}

export default useAdmin;
 
