
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
      return (
            <div>
                  <div className=' bg-[#B80000]'><Navbar></Navbar></div>
                  <Outlet></Outlet>
                  <div><Footer></Footer></div>
            </div>
      );
};

export default Main;