import React from "react";

function MySelect({ options, defaultValue, onChange, value }) {
  return (
    <select
      className="form-select w-50"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((e) => (
        <option key={e.value} value={e.value}>
          {e.name}
        </option>
      ))}
    </select>
  );
}
export default MySelect;
