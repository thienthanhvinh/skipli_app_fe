import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
const Create = () => {
  const handleChange = () => {};

  return (
    <div className="flex flex-col items-center gap-4">
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
          name="userName"
          className="focus:border-amber-400 transition-all duration-200 text-sm px-4 w-full"
          onChange={handleChange}
        />
        <Input
          type="text"
          isLabel
          label="Phone Number"
          placeholder="Enter employee phoen number"
          name="userName"
          className="focus:border-blue-400 transition-all duration-200 text-sm px-4 w-full"
          onChange={handleChange}
        />

        <Button
          className="px-3 py-2 button-main text-white mt-1"
          type="button"
          text="Add Employee"
        />
      </div>
    </div>
  );
};

export default Create;
