import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const isAdmin = true
    const isInstructor = false
    return (
        <div>
           <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-rose-300 text-base-content">
      {/* Sidebar content here */}
      {
        isAdmin&&<><li><NavLink to='/dashboard/manageuser'>Manage AllUsers</NavLink></li>
        <li><NavLink to='/dashboard/manageclasses'>Manage Classes</NavLink></li></>

        
      }
      {
        isInstructor && <><li><NavLink to='/dashboard/addclass'>Add a Classes</NavLink></li>
        <li><NavLink to='/dashboard/myclass'>My Classes</NavLink></li></>
      }
      
      

      {
        !isAdmin && !isInstructor ?<><li><NavLink to='/dashboard/myselectedclasses'>My selected Classes</NavLink></li>
        <li><NavLink to='/dashboard/myenrollclasses'>My Enroll Classes</NavLink></li>
        <li><NavLink to='/dashboard/mypayment'>My Payment</NavLink></li></>:''
      }

      
      
    </ul>
    <div className="divider "></div> 
  </div>
</div> 
        </div>
    );
};

export default Dashboard;