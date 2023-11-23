import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
      return (
            <div>
                  <div className=' bg-[#B80000]'><Navbar></Navbar></div>
                  <Outlet></Outlet>
            </div>
      );
};

export default Main;