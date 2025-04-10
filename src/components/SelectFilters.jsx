import React from 'react';

const SelectFilter = ({ label, name, options, value, onChange }) => {
  return (
    <div className="w-full">
      <label className="block mb-1 font-medium text-gray-700">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded"
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFilter;
