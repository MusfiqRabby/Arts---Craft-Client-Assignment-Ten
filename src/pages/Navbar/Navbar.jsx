import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../FirbaseProvider/FirbaseProvider';

const Navbar = () => {

  const { logOut, user } = useContext(AuthContext);
  const [theme, setTheme] = useState('light')


  const handleToggle = (e) =>{
    if(e.target.checked){
      setTheme('synthwave')
    }
    else{
      setTheme('light')
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)

  },[theme])

    const navLinks = <>
    <li> <NavLink to='/'>Home</NavLink> </li>
    <li> <NavLink to='/artcraftitme'>All Art & craft</NavLink> </li>
    <li> <NavLink to='/addcart'>Add Craft</NavLink> </li>
    <li> <NavLink to='/artcraft'>My Art & Craft List</NavLink> </li>
  </>


    return (
      <div className="my-4 navbar bg-gray-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-poppins font-bold"> <span className='text-[#e28743] '>Art</span> & <span className='text-[#fc034e]'>Craft</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end ">

        {
          user ?
            <>
              <div className="dropdown dropdown-end btn btn-circle tooltip tooltip-primary tooltip-left" data-tip={user?.displayName || 'user name not found'}>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full ">
                    <img src={user?.photoURL || "https://i.ibb.co/cv8B8ws/19021605.jpg"} />
                  </div>
                </label>
              </div>
              <button
                onClick={logOut}
                className="btn btn-sm font-bold text-black hover:hover:bg-cyan-500 btn-ghost">Logout</button>
            </>
            :
            <Link to='/login'>
              <button className="btn btn-sm font-bold btn-ghost text-black hover:bg-cyan-500 ">Login</button>
            </Link>
        }
     
      <label className="inline-flex items-center space-x-4 cursor-pointer ">
	  <span className="relative">
		<input onChange={handleToggle} id="Toggle1" type="checkbox" className="hidden peer" />
		<div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-600 peer-checked:dark:bg-violet-600"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-100"></div>
  	</span>
    </label>

      </div>
    </div>
  );
};

export default Navbar;