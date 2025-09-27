import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const SearchBar = () => {
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [price, setPrice] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigate = useNavigate();

  const handleSearch = () => {
    const filters = { type, location, bedroom, price };
    navigate("/listings", { state: { filters } });
  };

  // Options
  const propertyTypes = ["Apartment", "Duplex", "Flat", "Land", "Terrace", "Penthouse", "Office"];
  const locations = ["Ikoyi", "Lekki", "Banana Island", "Victoria Island", "Parkview"];
  const bedrooms = ["2", "3", "4", "5"];

  // Dropdown Item Grid
  const Dropdown = ({ options, onSelect }) => (
    <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-xl p-4 grid grid-cols-2 gap-3 z-50 w-64">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => {
            onSelect(opt);
            setOpenDropdown(null);
          }}
          className="border border-gray-300 bg-red-50 text-red-700 px-4 py-2 rounded-lg text-sm hover:bg-red-100 hover:border-red-500 hover:text-red-800 transition"
        >
          {opt}
        </button>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Desktop Search */}
      <div className="hidden md:flex bg-white shadow-lg rounded-full items-center gap-5 px-6 py-4 border-2 border-gray-300 relative">
        {/* Property Type */}
        <div className="relative">
          <button
            onClick={() => setOpenDropdown(openDropdown === "type" ? null : "type")}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 rounded-full hover:bg-gray-100 transition"
          >
            {type || "Property Type"} <ChevronDown size={16} />
          </button>
          {openDropdown === "type" && (
            <Dropdown options={propertyTypes} onSelect={setType} />
          )}
        </div>

        <span className="h-6 w-px bg-gray-300" />

        {/* Location */}
        <div className="relative">
          <button
            onClick={() => setOpenDropdown(openDropdown === "location" ? null : "location")}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 rounded-full hover:bg-gray-100 transition"
          >
            {location || "All Cities"} <ChevronDown size={16} />
          </button>
          {openDropdown === "location" && (
            <Dropdown options={locations} onSelect={setLocation} />
          )}
        </div>

        <span className="h-6 w-px bg-gray-300" />

        {/* Bedrooms */}
        <div className="relative">
          <button
            onClick={() => setOpenDropdown(openDropdown === "bedroom" ? null : "bedroom")}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 rounded-full hover:bg-gray-100 transition"
          >
            {bedroom ? `${bedroom} Bedrooms` : "Bedrooms"} <ChevronDown size={16} />
          </button>
          {openDropdown === "bedroom" && (
            <Dropdown options={bedrooms} onSelect={setBedroom} />
          )}
        </div>

        <span className="h-6 w-px bg-gray-300" />

        {/* Price */}
        <input
          type="text"
          placeholder="Max. Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="flex-1 bg-transparent border-none focus:ring-0 text-gray-700 text-sm px-3 py-2 rounded-full hover:bg-gray-100 transition"
        />

        {/* Search */}
        <button
          onClick={handleSearch}
          className="bg-red-600 text-white px-10 py-2 rounded-full font-medium hover:bg-red-700 transition"
        >
          Search
        </button>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden bg-white shadow-lg rounded-lg px-4 py-8 mt-4 border-2 border-gray-300 w-[300px]">
        <div className="grid grid-cols-1 gap-4">
          {/* Property Type */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === "type" ? null : "type")}
              className="w-full flex justify-between items-center border border-gray-300 px-4 py-4 text-sm text-gray-700 rounded-lg hover:border-red-500 hover:bg-red-50 transition"
            >
              {type || "Property Type"} <ChevronDown size={16} />
            </button>
            {openDropdown === "type" && (
              <Dropdown options={propertyTypes} onSelect={setType} />
            )}
          </div>

          {/* Location */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === "location" ? null : "location")}
              className="w-full flex justify-between items-center border border-gray-300 px-4 py-4 text-sm text-gray-700 rounded-lg hover:border-red-500 hover:bg-red-50 transition"
            >
              {location || "All Cities"} <ChevronDown size={16} />
            </button>
            {openDropdown === "location" && (
              <Dropdown options={locations} onSelect={setLocation} />
            )}
          </div>

          {/* Bedrooms */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === "bedroom" ? null : "bedroom")}
              className="w-full flex justify-between items-center border border-gray-300 px-4 py-4 text-sm text-gray-700 rounded-lg hover:border-red-500 hover:bg-red-50 transition"
            >
              {bedroom ? `${bedroom} Bedrooms` : "Bedrooms"} <ChevronDown size={16} />
            </button>
            {openDropdown === "bedroom" && (
              <Dropdown options={bedrooms} onSelect={setBedroom} />
            )}
          </div>

          {/* Price */}
          <input
            type="text"
            placeholder="Max. Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-gray-300 px-4 py-4 text-sm text-gray-700 rounded-lg focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="w-full mt-5 bg-red-600 text-white py-4 rounded-lg font-medium shadow-md hover:bg-red-700 transition"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;




