import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const token = localStorage.getItem('token');
const serverUrl = import.meta.env.VITE_SERVER_URL;

const Create = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    userName: '',
    email: '',
    phoneNumber: '',
  });

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    try {
      axios
        .get(`${serverUrl}/user/${id}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          const result = res.data;
          const user = result.data;
          console.log('Result', user);
          setData({
            userName: user.userName ?? '',
            email: user.email ?? '',
            phoneNumber: user.phone,
          });
        })
        .catch((error) => {
          console.error(`Error:`, error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error(`Error:`, error.message);
    }
  }, [id]);

  useEffect(() => {
    console.log('Updated data:', data);
  }, [data]);

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(`${serverUrl}/edit/${id}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const result = res.json();
          console.log('update result', result);
        })
        .catch((error) => {
          console.error(`Error: ${error.message}`);
          setLoading(false);
        })
        .finally(setLoading(false));
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="font-semibold text-xl">Edit User</h3>
      {loading && <p className="text-sm text-gray-400">Updating...</p>}
      <form onSubmit={handleEdit}>
        <div className="flex flex-col gap-4 max-w-lg w-full">
          <Input
            type="text"
            isLabel
            label="Employee Name"
            placeholder="Enter employee name"
            name="userName"
            value={data?.userName}
            className="focus:border-orange-200 transition-all duration-200 text-sm px-4 w-full"
            onChange={handleChange}
          />
          <Input
            type="text"
            isLabel
            label="Email"
            placeholder="Enter employee email"
            name="email"
            value={data?.email}
            className="focus:border-amber-400 transition-all duration-200 text-sm px-4 w-full"
            onChange={handleChange}
          />
          <Input
            type="text"
            isLabel
            label="Phone Number"
            placeholder="Enter employee phone number"
            name="phoneNumber"
            value={data?.phoneNumber}
            className="focus:border-blue-400 transition-all duration-200 text-sm px-4 w-full"
            onChange={handleChange}
          />

          <Button
            onClick={handleEdit}
            secondary
            className="px-3 py-2 button-success text-white mt-1"
            type="button"
            text="Edit Employee"
          />
        </div>
      </form>
    </div>
  );
};

export default Create;
