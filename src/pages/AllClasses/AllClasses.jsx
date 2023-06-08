import React from 'react';
import useClass from '../../Components/hooks/useClasse';

const AllClasses = () => {
    const [classes,refetch] = useClass()

    const filterClass = classes.filter(item=>item.status==="approve")
    console.log(filterClass)
    return (
        <div>
            <div className="overflow-x-auto overflow-y-auto">
  <table className="table mt-36">
    {/* head */}
    <thead>
      <tr>
        <th>
        #
        </th>
        <th>Image</th>
        <th>Class Name</th>
        <th>Instructor Name</th>
        <th>Available Seat</th>
        <th>Price</th>
        <th>Select</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        filterClass.map((user,index)=><tr key={user._id}>
            <th>
             {
                index + 1
             }
                      </th>
                      <td>
                      <div className="mask mask-squircle w-12 h-12">
                <img src={user.image} alt="Avatar Tailwind CSS Component" />
              </div>
                      </td>
            <td>
                  <div className="font-bold">{user.className}</div>
            </td>
            <td>
        <p>{user.instructorname}</p>
              
            </td>
            <td>
        <p>{user.seat}</p>
              
            </td>
            <td>
        <p>{user.price}</p>
              
            </td>
            
            <td>
            <button  className="btn btn-primary ">Select</button>
                </td>

          </tr>)
      }
      
     
     
    </tbody>
   
    
  </table>
</div> 
        </div>
    );
};

export default AllClasses;