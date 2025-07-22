import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';

const AdminLayout = () => {
  return (
    <div className="flex flex-col bg-white w-full">
      <Header />
      <main className="flex-grow flex flex-row gap-8 px-5 mb-14 mt-8">
        <SideBar className="w-64 flex-shrink-0" />
        <div className="flex-grow">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
