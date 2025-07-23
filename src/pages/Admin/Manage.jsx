import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const serverUrl = import.meta.env.VITE_SERVER_URL;
const token = localStorage.getItem('token');

const Manage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      axios
        .get(`${serverUrl}/users`, {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const result = res.data;
          console.log('response', result.data);
          setEmployees(result.data);
        })
        .catch((error) => {
          console.error(`Error: ${error.message}`);
        })
        .finally(setLoading(false));
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }, []);

  const handleDelete = async (employeeId) => {
    try {
      const response = await axios.delete(`${serverUrl}/user/${employeeId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Delete successful', response);
      setEmployees(employees.filter((employee) => employee.id !== employeeId));
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
        {loading && <p className="text-green-500">Get list users...</p>}
        <table className="min-w-full bg-white border-collapse mt-8">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="px-4 py-2  text-gray-600 align-middle">Employee Name</th>
              <th className="px-4 py-2 text-gray-600 align-middle">Email</th>
              <th className="px-4 py-2 text-gray-600 align-middle">Role</th>
              <th className="px-4 py-2 text-gray-600 align-middle">Phone</th>
              <th className="px-4 py-2 text-gray-600 align-middle">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-2 px-4 align-middle">{employee.userName || 'Thanh Vinh'}</td>
                <td className="py-2 px-4 align-middle">{employee.email ?? 'Default email'}</td>
                <td className="py-2 px-4 align-middle">
                  <span className="rounded-lg bg-green-300 px-4 py-2 text-white">
                    {employee.role || 'Admin'}
                  </span>
                </td>
                <td className="py-2 px-4 align-middle">{employee.phone ?? 'Default phone'}</td>
                <td className="py-2 px-4 flex space-x-4 items-center ml-14">
                  <Link
                    to={`/admin/edit/${employee.id}`}
                    className="button-primary rounded py-[9px]"
                  >
                    <span className="text-white px-3">Edit</span>
                  </Link>
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="button-danger text-white px-3 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manage;
