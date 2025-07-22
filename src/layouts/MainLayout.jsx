import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="flex flex-col bg-white w-full">
      <Header />
      <main className="flex-grow px-5 mb-14 mt-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
