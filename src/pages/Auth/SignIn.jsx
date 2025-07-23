import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Input from '../../components/Input';
import Button from '../../components/Button';
import axios from 'axios';

const serverUrl = import.meta.env.VITE_SERVER_URL;

const SignIn = () => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSendPhone = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${serverUrl}/login`,
        { phone },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      const result = response.data;
      console.log('Result', response.data);
      if (!result.success) {
        toast.error(result.message || 'Login failed');
        return;
      }

      toast.success('Redirect to verifycation!');
      setTimeout(() => {
        navigate(`/${result.url}`);
      }, 1000);
    } catch (error) {
      console.error(error.message);
      toast.error('Error!');
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

      <h3 className="text-3xl font-semibold">Sign In</h3>
      <p className="text-gray-400 font-semibold mt-2">Please enter your phone to sign in !</p>
      <form onSubmit={handleSendPhone}>
        <div className="flex flex-col gap-6 mt-6 max-w-1/2 mx-auto">
          <Input
            type="text"
            name="phone"
            required
            placeholder="Your Phone Number"
            className="py-3 px-6"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button type="submit" text="Sign In" secondary />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
