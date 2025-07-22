import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const Manage = () => {
  const employees = [
    { id: 1, name: 'Employee 1', email: 'thanhvinh@gmail.com', status: 'Active' },
    { id: 2, name: 'Employee 2', email: '123@gmail.com', status: 'Active' },
  ];

  const handleDelete = (employeeId) => {
    try {
      const response = axios.delete(`${serverUrl}/user/${employeeId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error');
      }

      const result = response.json();
      console.log('Delete', result);
    } catch (error) {
      console.error('Error when connect to server');
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-semibold">Manage Employee</h3>
      <div className="border border-gray-200 rounded-sm px-5 py-4">
        <div className="flex items-center justify-between w-full">
          <p className="font-semibold">4 Employee</p>
          <div>
            <Link className="bg-orange-300 px-3 py-2 rounded-lg" to="/admin/create">
              <span className="text-white">Create Employee</span>
            </Link>
          </div>
        </div>
        <table className="min-w-full bg-white border-collapse mt-8">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="px-4 py-2  text-gray-600 align-middle">Employee Name</th>
              <th className="px-4 py-2 text-gray-600 align-middle">Email</th>
              <th className="px-4 py-2 text-gray-600 align-middle">Status</th>
              <th className="px-4 py-2 text-gray-600 align-middle">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-2 px-4 align-middle">{employee.name}</td>
                <td className="py-2 px-4 align-middle">{employee.email}</td>
                <td className="py-2 px-4 align-middle">
                  <span className="rounded-lg bg-green-300 px-4 py-2 text-white">
                    {employee.status}
                  </span>
                </td>
                <td className="py-2 px-4 flex space-x-4 items-center ml-14">
                  <Link
                    to={`/admin/edit/${employee.id}`}
                    className="button-primary rounded py-[9px]"
                  >
                    <span className="text-white px-3">Edit</span>
                  </Link>
                  <button onClick={handleDelete} className="button-danger text-white px-3 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            ;
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manage;
