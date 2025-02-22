import React from 'react';
import './Dropdown.css';

interface DropdownProps {
  label: string;
  options: string[];
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, disabled = false, onChange }) => {
  return (
    <div className="dropdown-container">
      <label className="dropdown-label">{label}</label>
      <select
        className="dropdown-select"
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
