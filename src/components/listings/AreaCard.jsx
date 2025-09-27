import React from 'react';
import { useNavigate } from 'react-router-dom';

const AreaCard = ({ area }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // send both: query param (robust) + state (your current pattern)
    navigate(`/listings?location=${encodeURIComponent(area.title)}`, {
      state: {
        filters: {
          location: area.title.trim(),
          type: '',
          bedroom: '',
          price: '',
        },
      },
    });
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-full h-96 overflow-hidden group cursor-pointer"
    >
      <img
        src={area.image}
        alt={area.title}
        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />

      <div className="relative z-10 flex flex-col justify-between w-full h-full bg-gradient-to-b from-black/30 to-black/70 p-5 text-white">
        <div>
          <p className="text-sm font-light">{area.propertiesCount} Properties</p>
          <h3 className="text-xl font-medium mt-1">{area.title}</h3>
        </div>
        <div>
          <span className="text-xs font-light tracking-wide flex items-center space-x-1">
            <span>MORE DETAILS</span>
            <span className="transform group-hover:translate-x-1 transition-transform">▶</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AreaCard;
