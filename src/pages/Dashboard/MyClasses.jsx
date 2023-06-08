import React from 'react';
import useClass from '../../Components/hooks/useClasse';

const MyClasses = () => {

    const [classes,refetch] = useClass()

    const filterClass = classes.filter(item=>item.status==="approve")
    console.log(filterClass)
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>status</th>
        <th>Total enroll students</th>
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
            <td>
              Zemlak, Daniel and Leannon
              <br/>
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
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