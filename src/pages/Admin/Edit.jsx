import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import axios from 'axios';

const token = localStorage.getItem('token');

const Create = () => {
  const [loading, setLoading] = useState();

  const handleChange = () => {};

  const handleEdit = async (employeeId) => {
    try {
      setLoading(true);

      await axios
        .post(`${serverUrl}/edit/${employeeId}`, {
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
          name="userName"
          className="focus:border-amber-400 transition-all duration-200 text-sm px-4 w-full"
          onChange={handleChange}
        />
        <Input
          type="text"
          isLabel
          label="Phone Number"
          placeholder="Enter employee phone number"
          name="userName"
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
    </div>
  );
};

export default Create;
