import React from 'react';
import './Img.css';

interface ImgProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  disabled?: boolean;
}

const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled = false }) => {
  return (
    <img
      className={`image ${disabled ? 'disabled' : ''}`}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Img;
