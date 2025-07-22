import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  { path: 'admin', label: 'Manage Employee' },
  { path: 'task', label: 'Manage Task' },
  { path: 'message', label: 'Message' },
];

const SideBar = () => {
  return (
    <div className="flex flex-col gap-4">
      {items &&
        items.map((item) => (
          <Link key={item.path} className="px-3 py-2 bg-blue-200" to={`admin/${item.path}`}>
            <span className="text-white">{item.label}</span>
          </Link>
        ))}
    </div>
  );
};

export default SideBar;
