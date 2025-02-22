import React from 'react';
import './RadioButton.css';

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, checked, disabled, onChange }) => {
  return (
    <label className={`radio-button ${disabled ? 'disabled' : ''}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange?.(value)}
      />
      {label}
    </label>
  );
};

export default RadioButton;
