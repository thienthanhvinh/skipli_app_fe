import { ToggleLeft } from 'lucide-react';
import React from 'react';

const Header = () => {
  return (
    <div className="bg-[#74b9ff] w-full shadow-md">
      <nav className="container mx-auto w-[100%]">
        <div className="flex items-center justify-between px-4">
          <div className="">
            <img src="/images/logo.png" className="" />
          </div>
          <h3 className="font-semibold text-3xl text-white">SKIPLI Vinh App</h3>
          <div>
            <ToggleLeft />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
