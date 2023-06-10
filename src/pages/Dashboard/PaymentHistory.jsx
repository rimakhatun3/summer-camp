import React from 'react';
import useEnrolClass from '../../Components/useEnrollClasse';

const PaymentHistory = () => {
    const [enrollClass] = useEnrolClass()
    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>Payment History</h1>
               <div className="overflow-x-auto bg-base-200 p-10 mt-8">
  <table className="table " >
    {/* head */}
    <thead>
      <tr >
        <th>#</th>
        <th>Price</th>
        <th>Transation Id</th>
        <th>Transation Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
                enrollClass.map((item,index)=><tr key={item._id} >
                <th>{index+1}</th>
                <td>{item.price}</td>
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

export default PaymentHistory;