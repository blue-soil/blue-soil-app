import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div 
      className={`
        p-6 rounded-lg bg-white 
        ${hover ? 'hover:shadow-lg transition-shadow duration-300' : 'shadow-md'} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;