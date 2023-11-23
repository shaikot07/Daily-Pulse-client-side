import React from 'react';
import { Link, NavLink,  } from 'react-router-dom';
const Navbar = () => {


      const navOption = <>
            <li> <NavLink to="/" className="hover:bg-slate-950 hover:text-white">Home</NavLink></li>
            <li> <NavLink to="/addarticles" className="hover:bg-black hover:text-white" >Add Articles</NavLink></li>
            <li> <NavLink to="/allarticles" className="hover:bg-black hover:text-white" >All Articles</NavLink></li>
            <li> <NavLink to="/subscription" className="hover:bg-black hover:text-white" >Subscription</NavLink></li>
            <li> <NavLink to="/dashboard" className="hover:bg-black hover:text-white" >Dashboard</NavLink></li>
            
      </>
      return (
            <div className="navbar max-w-6xl mx-auto bg-[#B80000] text-white">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                   { navOption }
                              </ul>
                        </div>
                        <h3 className='text-4xl'>DailyPulse</h3>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                              {navOption}
                        </ul>
                  </div>
                  <div className="navbar-end">
                        <a className="btn">Button</a>
                  </div>
            </div>
      );
};

export default Navbar;