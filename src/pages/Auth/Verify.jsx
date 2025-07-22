import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const serverUrl = import.meta.env.VITE_SERVER_URL;

const Verify = () => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/dashboard');
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${serverUrl}/verify`,
        {
          code,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      if (res.data.success === false) {
        toast.error(res.data.message);
        return;
      }

      const token = res.data.data;
      localStorage.setItem('token', token);
      toast.success(res.data.message);

      if (res.data.url === 'dashboard') {
        setTimeout(() => {
          handleRedirect();
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
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

      <h3 className="text-3xl font-semibold">Phone Verification</h3>
      <p className="text-gray-400 font-semibold mt-2">
        Please enter your code that send to your phone
      </p>

      {loading && <p className="text-green-500 font-semibold text-base">Đang xử lý...</p>}

      <form onSubmit={handleSignIn}>
        <div className="flex flex-col gap-6 mt-6 max-w-1/2 mx-auto">
          <Input
            type="text"
            name="code"
            placeholder="Enter Your code"
            className="py-3 px-6"
            onChange={(e) => setCode(e.target.value)}
          />
          <Button type="submit" text="Submit" secondary />
        </div>
      </form>
    </div>
  );
};

export default Verify;
