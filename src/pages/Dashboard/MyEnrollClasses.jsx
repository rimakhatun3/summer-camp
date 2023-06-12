import React from 'react';
// import useAxiosSecure from '../../Components/hooks/UseAxiosSecure';
// import { useQuery } from '@tanstack/react-query';
import useEnrolClass from '../../Components/useEnrollClasse';

const MyEnrollClasses = () => {
const [enrollClass] = useEnrolClass()
console.log(enrollClass)

    // const [axiosSecure] = useAxiosSecure()
    // const {data:selectedClass=[],refetch} = useQuery({
    //     queryKey:['enrollclass'],
    //     queryFn: async()=>{
    // const res = await axiosSecure.get('/enrollclass')
    // console.log(res.data)
    // return res.data
    //     }
    // })
    return (
        <div>
            <h2>all enroll classes</h2>
            <div className="overflow-x-auto bg-base-200 p-10 mt-8">
  <table className="table " >
    {/* head */}
    <thead>
      <tr >
        <th>#</th>
        <th>Class Name</th>
        <th>Price</th>
        <th>Enroll Email</th>
        <th>Transation Id</th>
        <th>Transation Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
                enrollClass.map((item,index)=><tr key={item._id} >
                <th>{index+1}</th>
                <td>{item.className}</td>
                <td>{item.price}</td>
                <td>{item.email}</td>
                <td>{item.transationId}</td>
                <td>{item.date}</td>
                
              </tr>)
            }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyEnrollClasses;