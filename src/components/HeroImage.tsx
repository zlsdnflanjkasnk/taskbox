import React from 'react';
import './HeroImage.css';

interface HeroImageProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  disabled?: boolean;
}

const HeroImage: React.FC<HeroImageProps> = ({ title, subtitle, imageSrc, disabled = false }) => {
  return (
    <div className={`hero-container ${disabled ? 'disabled' : ''}`}>
      <img className="hero-image" src={imageSrc} alt={title} />
      <div className="hero-text">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
};

export default HeroImage;
