import React from 'react';
import { FaAddressBook, FaBook, FaBookReader, FaHome, FaUsers } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { MdPublish } from "react-icons/md";
const Dashboard = () => {
      const isAdmin = true;
      return (
            <div className='flex'>
                  <div className='w-64 min-h-screen bg-[#B80000]'>
                        {/* dashboard side bar  */}
                        <ul className='menu p-4 text-white'>

                              {/* admim or jonno */}
                              {
                                    isAdmin ? <>

                                          <li> <NavLink to="/dashboard/adminHome">
                                                <FaHome></FaHome>
                                                Admin Home</NavLink>
                                          </li>
                                          <li> <NavLink to="/dashboard/allUser">
                                                <FaUsers />
                                                All users</NavLink>
                                          </li>
                                          <li> <NavLink to="/dashboard/allArticle">
                                                <FaBookReader />
                                                al Articles</NavLink>
                                          </li>
                                          <li> <NavLink to="/dashboard/addPublisher">
                                                <MdPublish />
                                                Add publisher</NavLink>
                                          </li>
                                          <li> <NavLink to="/">
                                                <FaHome></FaHome>
                                                Home</NavLink>
                                          </li>

                                    </>
                                          : <>
                                                {/* normal user  */}
                                                <li> <NavLink to="/dashboard/userHome">
                                                      <FaHome></FaHome>
                                                      User Home</NavLink>
                                                </li>
                                                <li> <NavLink to="/dashboard/PremiumArticles">
                                                      <FaBook />
                                                      Premium Articles</NavLink>
                                                </li>
                                                <li> <NavLink to="/dashboard/profile">
                                                      <FaAddressBook />
                                                      My Profile</NavLink>
                                                </li>
                                                <li> <NavLink to="/dashboard/myArticle">
                                                      <FaBookReader />
                                                      My Articles</NavLink>
                                                </li>
                                                <li> <NavLink to="/">
                                                      <FaHome></FaHome>
                                                      Home</NavLink>
                                                </li>
                                          </>
                              }




                        </ul>
                  </div>
                  {/* dashboard content  */}
                  <div className='flex-1 p-8'>
                        <Outlet></Outlet>
                  </div>
            </div>
      );
};

export default Dashboard;