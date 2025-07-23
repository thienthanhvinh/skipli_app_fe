import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const serverUrl = import.meta.env.VITE_SERVER_URL;
const token = localStorage.getItem('token');

const Create = () => {
  const [data, setData] = useState({
    userName: '',
    email: '',
    phone: '',
    role: '',
  });

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${serverUrl}/create`, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const result = response.data;
      console.log('result', result);
      toast.success(result?.message);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      toast.error(`${error.message}`);
    }
  };

  return (
    <form onSubmit={handleCreateUser}>
      <div className="flex flex-col items-center gap-4">
        <ToastContainer
          position="top-right" // Vị trí hiển thị
          autoClose={1500} // Tự động đóng sau 3s
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <h3 className="font-semibold text-xl">Create User</h3>
        <div className="flex flex-col gap-4 max-w-lg w-full">
          <Input
            type="text"
            isLabel
            label="Employee Name"
            placeholder="Enter employee name"
            name="userName"
            className="focus:border-orange-200 transition-all duration-200 text-sm px-4 w-full"
            onChange={handleChange}
          />
          <Input
            type="text"
            isLabel
            label="Email"
            placeholder="Enter employee email"
            name="email"
            className="focus:border-amber-400 transition-all duration-200 text-sm px-4 w-full"
            onChange={handleChange}
          />
          <Input
            type="text"
            isLabel
            label="Phone Number"
            placeholder="Enter employee phoen number"
            name="phone"
            className="focus:border-blue-400 transition-all duration-200 text-sm px-4 w-full"
            onChange={handleChange}
          />
          <Input
            type="text"
            isLabel
            label="Role"
            placeholder="Enter role"
            name="role"
            className="focus:border-blue-400 transition-all duration-200 text-sm px-4 w-full"
            onChange={handleChange}
          />

          <Button
            className="px-3 py-2 button-main text-white mt-1"
            type="submit"
            text="Add Employee"
          />
        </div>
      </div>
    </form>
  );
};

export default Create;
