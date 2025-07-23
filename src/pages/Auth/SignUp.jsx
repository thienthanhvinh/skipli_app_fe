import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const serverUrl = import.meta.env.VITE_SERVER_URL;

const SignUp = () => {
  const [data, setData] = useState({
    userName: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  const handleRedirect = (url) => {
    navigate(`${url}`);
  };

  const handleSendPhone = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${serverUrl}/register`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      const result = response.data;
      const url = result.data.url;
      toast.success('Please wait, we are redirect to verify page for you!');
      setTimeout(() => {
        handleRedirect(url);
      }, 2000);
    } catch (error) {
      const msg = error.response?.data?.message || 'Error';
      console.error(error.message);
      toast.error(msg);
    }
  };

  return (
    <div className="mt-10">
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

      <h3 className="text-3xl font-semibold">Sign Up</h3>
      <p className="text-gray-400 font-semibold mt-2">Please enter your phone to sign up !</p>
      <form onSubmit={handleSendPhone}>
        <div className="flex flex-col gap-6 mt-6 max-w-1/2 mx-auto">
          <Input
            type="text"
            name="phone"
            required
            placeholder="Your Phone Number"
            className="py-3 px-6"
            onChange={handleChange}
          />

          <Input
            type="text"
            name="userName"
            required
            placeholder="Your Name"
            className="py-3 px-6"
            onChange={handleChange}
          />

          <Input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="py-3 px-6"
            onChange={handleChange}
          />

          <Button type="submit" text="Next" secondary />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
