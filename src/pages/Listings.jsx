import React, { useState, useEffect, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import usePropertySearch from "../hooks/usePropertySearch";
import ListingPageGrid from "../components/listings/ListingPageGrid";
import SearchBarListings from "../components/layout/SearchbarListings";
import { properties as allProperties } from "../data/properties";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Loader for the grid area only
const GridLoader = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-[#ff0000] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[#ff0000] text-sm font-medium animate-pulse">
          Loading Listings...
        </p>
      </div>
    </div>
  );
};

const LOCATION_ALIASES = {
  "Lekki Phase 1": "Lekki",
  "Ikota Lekki": "Lekki",
  "Banana Island": "Ikoyi",
};

const Listings = () => {
  const location = useLocation();

  // ---------------- Loader ----------------
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  // ----------------------------------------

  const queryLocation = useMemo(() => {
    const sp = new URLSearchParams(location.search);
    return (sp.get("location") || "").trim();
  }, [location.search]);

  const stateFilters = location.state?.filters || {};

  const normalizedIncomingLocation = (() => {
    const raw = (stateFilters.location || queryLocation || "").trim();
    return LOCATION_ALIASES[raw] || raw;
  })();

  const [filters, setFilters] = useState({
    type: stateFilters.type || "",
    location: normalizedIncomingLocation || "",
    bedroom: stateFilters.bedroom || "",
    price: stateFilters.price || "",
  });

  useEffect(() => {
    const rawFromState = (location.state?.filters?.location || "").trim();
    const rawFromQuery = queryLocation;
    const incoming = rawFromState || rawFromQuery || "";

    const normalized = LOCATION_ALIASES[incoming] || incoming;

    setFilters((prev) => ({
      ...prev,
      location: normalized || prev.location,
    }));
  }, [location.state, queryLocation]);

  // --- helper to scroll up
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (next) => {
    setLoading(true);
    setFilters((prev) => ({ ...prev, ...next }));
    setCurrentPage(1); // reset to page 1
    scrollToTop();
    setTimeout(() => setLoading(false), 2000);
  };

  const filteredProperties = usePropertySearch(filters);

  // ---------------- Pagination ----------------
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;
  const currentProperties = filteredProperties.slice(
    indexOfFirst,
    indexOfLast
  );
  // --------------------------------------------

  // ---------------- Featured Listings ----------------
  const selected = [...allProperties]
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);
  // ---------------------------------------------------

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <br />
      <div className="bg-black mt-[-20px] py-3 px-3">
        <SearchBarListings onSearch={handleSearch} initialFilters={filters} />
      </div>

      <br />
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-600">
        <Link to="/" className="hover:text-[#ff0000]">
          Home
        </Link>{" "}
        <span className="mx-2">›</span>
        <span className="text-gray-800">Listings</span>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-3xl font-light text-gray-800 mb-6">Listings</h1>

        {/* Tabs + Sort */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-4 text-sm font-medium">
            <button className="px-4 py-2 bg-[#ff0000] text-white rounded-md">
              ALL
            </button>
          </div>
          <div className="text-sm text-gray-600">
            Sort By:{" "}
            <span className="font-medium text-gray-800">Default Order</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content */}
          <div className="lg:col-span-3">
            {loading ? (
              <GridLoader />
            ) : (
              <>
                <ListingPageGrid properties={currentProperties} />

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-8 space-x-2 mb-5">
                    {/* Prev */}
                    <button
                      disabled={currentPage === 1}
                      onClick={() => {
                        setCurrentPage((p) => Math.max(p - 1, 1));
                        scrollToTop();
                      }}
                      className={`px-3 py-1 rounded ${
                        currentPage === 1
                          ? "bg-white text-gray-400 border cursor-not-allowed"
                          : "bg-white text-gray-700 hover:bg-gray-200 border"
                      }`}
                    >
                      Prev
                    </button>

                    {/* Page numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter((page) => {
                        return (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        );
                      })
                      .map((page, idx, arr) => (
                        <React.Fragment key={page}>
                          {idx > 0 && arr[idx - 1] !== page - 1 && (
                            <span className="px-2">...</span>
                          )}
                          <button
                            onClick={() => {
                              setCurrentPage(page);
                              scrollToTop();
                            }}
                            className={`px-3 py-1 rounded ${
                              currentPage === page
                                ? "bg-[#ff0000] text-white border"
                                : "bg-white text-gray-700 border hover:bg-gray-300"
                            }`}
                          >
                            {page}
                          </button>
                        </React.Fragment>
                      ))}

                    {/* Next */}
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => {
                        setCurrentPage((p) => Math.min(p + 1, totalPages));
                        scrollToTop();
                      }}
                      className={`px-3 py-1 rounded ${
                        currentPage === totalPages
                          ? "bg-white text-gray-400 border cursor-not-allowed"
                          : "bg-white text-gray-700 hover:bg-gray-200 border"
                      }`}
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 mb-5">
            <div className="sticky top-6 space-y-6">
              {/* Featured Listings */}
              <div className="bg-white shadow-sm p-6">
                <h2 className="text-xl font-normal mb-6">Featured Listings</h2>

                {selected.length > 0 ? (
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="relative"
                  >
                    {selected.map((property, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="relative w-[450px] h-[200px] overflow-hidden shadow-md bg-gray-100">
                          <img
                            src={property.image}
                            alt={property.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />

                          {/* Tags */}
                          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                            {property.isFeatured && (
                              <span className="bg-red-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
                                FEATURED
                              </span>
                            )}
                            {property.tags &&
                              property.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="bg-black/70 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded hover:text-red-400 transition-colors"
                                >
                                  {tag.toUpperCase()}
                                </span>
                              ))}
                          </div>

                          {/* Price + Location */}
                          <div>
                            <div className="absolute bottom-12 left-2 text-sm font-extrabold text-white drop-shadow-lg">
                              From {property.price.toLocaleString()}
                            </div>
                            <div className="absolute bottom-6 left-2 text-sm font-normal text-white drop-shadow-lg">
                              {property.location}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}

                    {/* Custom navigation buttons */}
                    <div className="swiper-button-prev !w-8 !h-8 !bg-red-500 !rounded-full !flex !items-center !justify-center after:!text-white after:!text-lg shadow-md absolute top-1/2 -translate-y-1/2 left-3 z-10"></div>
                    <div className="swiper-button-next !w-8 !h-8 !bg-red-500 !rounded-full !flex !items-center !justify-center after:!text-white after:!text-lg shadow-md absolute top-1/2 -translate-y-1/2 right-3 z-10"></div>
                  </Swiper>
                ) : (
                  <p className="text-gray-500">No featured listings found.</p>
                )}
              </div>

              {/* Property Type */}
              <div className="bg-white shadow-sm p-4">
                <h2 className="text-lg font-normal mb-4">Property Type</h2>
                <ul className="space-y-2 text-sm text-gray-800">
                  <li className="text-[#ff0000] font-medium">› Residential</li>
                  <ul className="ml-4 space-y-1">
                    {[
                      "Apartment",
                      "Fully Detached Duplex",
                      "Penthouse",
                      "Residential Land",
                      "Flat",
                      "Terrace Duplex",
                    ].map((type) => (
                      <li
                        key={type}
                        onClick={() => handleSearch({ type })}
                        className="hover:text-[#ff0000] cursor-pointer"
                      >
                        › {type}
                      </li>
                    ))}
                  </ul>

                  <li className="text-[#ff0000] font-medium mt-3">› Commercial</li>
                  <ul className="ml-4 space-y-1">
                    {["Commercial Land", "Office"].map((type) => (
                      <li
                        key={type}
                        onClick={() => handleSearch({ type })}
                        className="hover:text-[#ff0000] cursor-pointer"
                      >
                        › {type}
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>

              {/* Cities */}
              <div className="bg-white shadow-sm p-4">
                <h2 className="text-lg font-normal mb-4">Cities</h2>
                <ul className="space-y-2 text-sm">
                  {["Lekki", "Banana Island", "Ikoyi", "Victoria Island"].map(
                    (city) => (
                      <li
                        key={city}
                        onClick={() => handleSearch({ location: city })}
                        className="hover:text-[#ff0000] cursor-pointer"
                      >
                        › {city}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Listings;














































