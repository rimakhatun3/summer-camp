import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import logo from '../../assets/images/logo.avif'

const Header = () => {

  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .then(error => {
        console.log(error.message)
      })
  }

  const navItem = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/instructor'>Instructors</Link></li>
    <li><Link to='/allclasses'>All Classes</Link></li>
    {user && <li><Link to='/dashboard'><button className="btn">
      Dashboard
      
    </button></Link></li>}

  </>
  return (
    <div>
      <div className="navbar fixed z-10 max-w-screen-xl mx-0   text-white bg-rose-400">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItem}
            </ul>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <img src={logo} alt="Website Logo" class="h-8 w-10 mr-2"/>
          <a className="btn btn-ghost normal-case text-xl">Sport Camp</a>
          
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <>
              <div className="tooltip mx-2" data-tip={user?.displayName}>

                <div className="w-12 ">
                  <img className='rounded-full' src={user?.photoURL} />
                </div>
              </div>
              <button onClick={handleLogOut} className='btn btn-sm'>Log Out</button>
            </>

              : <><Link to='/login'><button className='btn btn-sm'>Login</button></Link></>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;