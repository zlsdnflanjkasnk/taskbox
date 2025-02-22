import React from 'react';
import './Text.css'; // Optional: for styling

interface TextProps {
  content: string;
  disabled?: boolean;
}

const Text: React.FC<TextProps> = ({ content, disabled = false }) => {
  return (
    <p className={`text-component ${disabled ? 'text-disabled' : ''}`}>
      {content}
    </p>
  );
};

export default Text;
