import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

const MainLayout = () => {
  return (
    <div>
      < Navbar />
      < Outlet />
      < ToastContainer/> 
    </div>
  )
};
export default MainLayout