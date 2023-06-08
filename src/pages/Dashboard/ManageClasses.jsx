import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Components/hooks/UseAxiosSecure';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure()
const {data:classes=[],refetch} = useQuery({
    queryKey:['allclasses'],
    queryFn: async()=>{
const res = await axiosSecure.get('/allclasses')
console.log(res.data)
return res.data
    }
})

    return (
        <div>
            <h2>manage all classes {classes.length}</h2>
        </div>
    );
};

export default ManageClasses;