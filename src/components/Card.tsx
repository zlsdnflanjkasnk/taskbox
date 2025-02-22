import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  content: string;
  imageSrc?: string;
  disabled?: boolean;
}

const Card: React.FC<CardProps> = ({ title, content, imageSrc, disabled = false }) => {
  return (
    <div className={`card ${disabled ? 'disabled' : ''}`}>
      {imageSrc && <img className="card-image" src={imageSrc} alt={title} />}
      <div className="card-body">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
