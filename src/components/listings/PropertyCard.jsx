import React from 'react';
import { PiBed, PiBathtub } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/property/${property.id}`);
  };
  
  //  Ensure tags is always an array
  const tags = Array.isArray(property.tags) ? property.tags : [];

  return (
    <div
      onClick={handleClick}
      className="relative h-80 rounded-t-md rounded-b-none overflow-hidden border border-gray-200 
                 transition-all duration-300 cursor-pointer hover:brightness-105"
      style={{
        backgroundImage: `url(${property.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/*  Overlay */}
      <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all"></div>

      {/*  Property Details */}
      <div className="relative z-10 p-4 flex flex-col justify-end h-full text-white">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-700/80 text-white text-xs font-medium 
                           px-2 py-0.5 rounded-sm transition-all duration-300 
                           hover:bg-[#ff0000]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="font-light text-lg mb-1 leading-tight 
                       transition-all duration-300 hover:text-[#ff0000]">
          {property.title}
        </h3>

        {/* Price */}
        <p className="text-xl font-bold mb-4">{property.price}</p>

        {/* Beds and Baths icons */}
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <PiBed className="h-5 w-5 mr-1" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center">
            <PiBathtub className="h-5 w-5 mr-1" />
            <span>{property.baths} Baths</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;




