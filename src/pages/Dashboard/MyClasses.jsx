import React from 'react';
import useClass from '../../Components/hooks/useClasse';
import useEnrolClass from '../../Components/useEnrollClasse';

const MyClasses = () => {
  const [enrollClass] = useEnrolClass()
  console.log(enrollClass.length)

    const [classes,refetch] = useClass()

    const filterClass = classes.filter(item=>item.status==="approve")
    console.log(filterClass)
    return (
        <div className='bg-slate-100 py-5 px-14'>
        
          <p className='text-3xl font-extrabold my-5 text-center'>Total Enroll Student : {enrollClass.length}</p>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>status</th>
        {/* <th>Total enroll students</th> */}
        <th>FeedBack</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        classes.map((singleClass,index)=><tr key={singleClass._id}>
            <th>
              {index + 1}
            </th>
            <td>
             {singleClass.status}
            </td>
            {/* <td className='text-center'>
             {enrollClass.length}
            </td> */}
            <td><button className="btn bg-green-500">FeedBack</button></td>
            <th>
              <button className="btn bg-pink-600">Update</button>
            </th>
          </tr>)
      }
      
      
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default MyClasses;