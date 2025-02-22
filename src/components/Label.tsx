import React from 'react';
import './Label.css'; // Optional: For styling

interface LabelProps {
  text: string;
  htmlFor?: string;
  disabled?: boolean;
}

const Label: React.FC<LabelProps> = ({ text, htmlFor, disabled = false }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`label ${disabled ? 'label-disabled' : ''}`}
      style={{ opacity: disabled ? 0.5 : 1 }}
    >
      {text}
    </label>
  );
};

export default Label;
