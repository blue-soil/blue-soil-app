import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function GetStartedButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="flex flex-col sm:flex-row gap-4 rounded-full">
      <button 
        className="rounded-full bg-green-500 text-white px-10 py-4 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-green-600 hover:shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className={`transition-transform duration-300 ${isHovered ? 'transform -translate-x-1' : ''}`}>
          find a way to contribute
        </span>
        <ArrowRight 
          size={20} 
          className={`transition-all duration-300 ${isHovered ? 'transform translate-x-1 opacity-100' : 'opacity-70'}`}
        />
      </button>
    </div>
  );
}