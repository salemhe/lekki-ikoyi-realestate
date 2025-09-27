import React, { createContext, useContext, useState } from 'react';
import { properties as allProperties } from '../data/properties';

const PropertyContext = createContext();

export const usePropertyContext = () => useContext(PropertyContext);

export const PropertyProvider = ({ children }) => {
  const [filteredProperties, setFilteredProperties] = useState(allProperties);

  const filterProperties = (filters) => {
    let result = allProperties;

    // Filter by Property Type
    if (filters.type && filters.type !== 'Property Type') {
      const type = filters.type.trim().toLowerCase();
      result = result.filter((p) =>
        p.title?.toLowerCase().includes(type)
      );
    }

    // Filter by Location
    if (filters.location && filters.location !== 'All Cities') {
      const searchLocation = filters.location.trim().toLowerCase();
      result = result.filter((p) =>
        p.location?.toLowerCase().includes(searchLocation)
      );
    }

    // Filter by Bedroom Count
    if (filters.bedroom && filters.bedroom !== 'Bedrooms') {
      const bedroomCount = parseInt(filters.bedroom);
      result = result.filter((p) => parseInt(p.beds) === bedroomCount);
    }

    // Filter by Price
    if (filters.price) {
      const maxPrice = parseInt(filters.price.replace(/[^0-9]/g, ''));
      result = result.filter((p) => {
        const cleanPrice = parseInt(p.price.replace(/[^0-9]/g, ''));
        return cleanPrice <= maxPrice;
      });
    }

    setFilteredProperties(result);
  };

  return (
    <PropertyContext.Provider value={{ filteredProperties, filterProperties }}>
      {children}
    </PropertyContext.Provider>
  );
};







