import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBarListings = ({ onSearch, initialFilters = {}, navigateTo }) => {
  const [type, setType] = useState(initialFilters.type || "");
  const [location, setLocation] = useState(initialFilters.location || "");
  const [bedroom, setBedroom] = useState(initialFilters.bedroom || "");
  const [price, setPrice] = useState(initialFilters.price || "");
  const [showFilters, setShowFilters] = useState(false); // mobile toggle

  const navigate = useNavigate();

  // keep local state in sync if parent updates initialFilters
  useEffect(() => {
    setType(initialFilters.type || "");
    setLocation(initialFilters.location || "");
    setBedroom(initialFilters.bedroom || "");
    setPrice(initialFilters.price || "");
  }, [
    initialFilters.type,
    initialFilters.location,
    initialFilters.bedroom,
    initialFilters.price,
  ]);

  const handleSearch = () => {
    const filters = { type, location, bedroom, price };

    if (typeof onSearch === "function") {
      onSearch(filters);
    }

    if (navigateTo) {
      navigate(navigateTo, { state: { filters } });
    }

    setShowFilters(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Desktop */}
      <div className="hidden md:grid backdrop-blur-md bg-white shadow-lg rounded-2xl border border-gray-200 px-6 py-6 grid-cols-5 gap-4">
        {/* Property Type */}
        <div>
          <label className="text-xs font-semibold text-gray-600 uppercase mb-2 block">
            Looking For
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500"
          >
            <option value="">Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="Duplex">Duplex</option>
            <option value="Flat">Flat</option>
            <option value="Land">Land</option>
            <option value="Terrace">Terrace</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Office">Office</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="text-xs font-semibold text-gray-600 uppercase mb-2 block">
            Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500"
          >
            <option value="">All Cities</option>
            <option value="Ikoyi">Ikoyi</option>
            <option value="Lekki">Lekki</option>
            <option value="Banana Island">Banana Island</option>
            <option value="Victoria Island">Victoria Island</option>
            <option value="Parkview">Parkview</option>
            <option value="Surulere">Surulere</option>
            <option value="Opebi">Opebi</option>
            <option value="Ogudu">Ogudu</option>
            <option value="Abijo">Abijo</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="text-xs font-semibold text-gray-600 uppercase mb-2 block">
            Bedrooms
          </label>
          <select
            value={bedroom}
            onChange={(e) => setBedroom(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500"
          >
            <option value="">Any</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <label className="text-xs font-semibold text-gray-600 uppercase mb-2 block">
            Budget
          </label>
          <input
            type="text"
            placeholder="Max. Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button
            onClick={handleSearch}
            className="w-full bg-red-600 text-white py-2 px-5 rounded-lg font-medium hover:bg-red-700 transition duration-200"
          >
            Search
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full">
        {!showFilters ? (
          <input
            type="text"
            placeholder="Search properties..."
            onFocus={() => setShowFilters(true)}
            readOnly
            className="w-full border bg-white backdrop-blur-md border-gray-300 rounded-lg px-4 py-3 text-sm text-black focus:ring-2 focus:ring-red-500 shadow-sm"
          />
        ) : (
          <div className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-600 font-bold text-xl"
                aria-label="Close filters"
              >
                ×
              </button>
            </div>

            {/* Filters */}
            <div className="space-y-5">
              {/* Property Type */}
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase mb-2 block">
                  Looking For
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Property Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Duplex">Duplex</option>
                  <option value="Flat">Flat</option>
                  <option value="Land">Land</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase mb-2 block">
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500"
                >
                  <option value="">All Cities</option>
                  <option value="Ikoyi">Ikoyi</option>
                  <option value="Lekki">Lekki</option>
                  <option value="Banana Island">Banana Island</option>
                  <option value="Victoria Island">Victoria Island</option>
                  <option value="Parkview">Parkview</option>
                </select>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase mb-2 block">
                  Bedrooms
                </label>
                <select
                  value={bedroom}
                  onChange={(e) => setBedroom(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Any</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase mb-2 block">
                  Your Budget
                </label>
                <input
                  type="text"
                  placeholder="Max. Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="w-full bg-red-600 text-white py-3 rounded-lg text-base font-medium shadow-md hover:bg-red-700 transition duration-200"
              >
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBarListings;
