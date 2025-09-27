import React from 'react';
import ListingPageCard from './ListingPageCard';

const ListingPageGrid = ({ properties }) => {
  if (!properties || properties.length === 0) {
    return <p className="text-gray-600 text-center mt-10">No properties found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 mb-5">
      {properties.map((property) => (
        <ListingPageCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default ListingPageGrid;
