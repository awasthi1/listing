import React from "react";
import "./Select.css";

function SelectBox({ options, value, onChange, placeholder }) {
    return (
      <div className="select-box">
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
export default SelectBox;