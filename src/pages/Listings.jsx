// import React, { useState, useEffect, useMemo } from "react";
// import { useLocation, Link } from "react-router-dom";
// import Navbar from "../components/layout/Navbar";
// import usePropertySearch from "../hooks/usePropertySearch";
// import ListingPageGrid from "../components/listings/ListingPageGrid";
// import SearchBarListings from "../components/layout/SearchbarListings";

// // Loader for the grid area only
// const GridLoader = () => {
//   return (
//     <div className="flex justify-center items-center h-64">
//       <div className="flex flex-col items-center space-y-4">
//         <div className="w-12 h-12 border-4 border-[#ff0000] border-t-transparent rounded-full animate-spin"></div>
//         <p className="text-[#ff0000] text-sm font-medium animate-pulse">
//           Loading Listings...
//         </p>
//       </div>
//     </div>
//   );
// };

// const LOCATION_ALIASES = {
//   "Lekki Phase 1": "Lekki",
//   "Ikota Lekki": "Lekki",
//   "Banana Island": "Ikoyi",
// };

// const Listings = () => {
//   const location = useLocation();

//   // ---------------- Loader ----------------
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 5000); // First load = 5s
//     return () => clearTimeout(timer);
//   }, []);
//   // ----------------------------------------

//   const queryLocation = useMemo(() => {
//     const sp = new URLSearchParams(location.search);
//     return (sp.get("location") || "").trim();
//   }, [location.search]);

//   const stateFilters = location.state?.filters || {};

//   const normalizedIncomingLocation = (() => {
//     const raw = (stateFilters.location || queryLocation || "").trim();
//     return LOCATION_ALIASES[raw] || raw;
//   })();

//   const [filters, setFilters] = useState({
//     type: stateFilters.type || "",
//     location: normalizedIncomingLocation || "",
//     bedroom: stateFilters.bedroom || "",
//     price: stateFilters.price || "",
//   });

//   useEffect(() => {
//     const rawFromState = (location.state?.filters?.location || "").trim();
//     const rawFromQuery = queryLocation;
//     const incoming = rawFromState || rawFromQuery || "";

//     const normalized = LOCATION_ALIASES[incoming] || incoming;

//     setFilters((prev) => ({
//       ...prev,
//       location: normalized || prev.location,
//     }));
//   }, [location.state, queryLocation]);

//   const handleSearch = (next) => {
//     setLoading(true); // Show loader
//     setFilters((prev) => ({ ...prev, ...next }));

//     // Keep loader for 2s only when searching
//     setTimeout(() => setLoading(false), 2000);
//   };

//   const filteredProperties = usePropertySearch(filters);

//   // ---------------- Pagination ----------------
//   const [currentPage, setCurrentPage] = useState(1);
//   const propertiesPerPage = 6;
//   const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

//   const indexOfLast = currentPage * propertiesPerPage;
//   const indexOfFirst = indexOfLast - propertiesPerPage;
//   const currentProperties = filteredProperties.slice(
//     indexOfFirst,
//     indexOfLast
//   );
//   // --------------------------------------------

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar />
//       <br />
//       <div className="bg-[#ff0000] mt-[-20px] py-3 px-3">
//         <SearchBarListings onSearch={handleSearch} initialFilters={filters} />
//       </div>

//       <br />
//       {/* Breadcrumb */}
//       <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-600">
//         <Link to="/" className="hover:text-[#ff0000]">
//           Home
//         </Link>{" "}
//         <span className="mx-2">›</span>
//         <span className="text-gray-800">Listings</span>
//       </div>

//       <div className="max-w-6xl mx-auto px-4">
//         {/* Page Title */}
//         <h1 className="text-3xl font-light text-gray-800 mb-6">Listings</h1>

//         {/* Tabs + Sort */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex space-x-4 text-sm font-medium">
//             <button className="px-4 py-2 bg-[#ff0000] text-white rounded-md">
//               ALL
//             </button>
//           </div>
//           <div className="text-sm text-gray-600">
//             Sort By:{" "}
//             <span className="font-medium text-gray-800">Default Order</span>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Main content */}
//           <div className="lg:col-span-3">
//             {loading ? (
//               <GridLoader />
//             ) : (
//               <>
//                 <ListingPageGrid properties={currentProperties} />

//                 {/* Pagination */}
//                 {totalPages > 1 && (
//                   <div className="flex justify-center mt-8 space-x-2 mb-5">
//                     {/* Prev */}
//                     <button
//                       disabled={currentPage === 1}
//                       onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//                       className={`px-3 py-1 rounded ${
//                         currentPage === 1
//                           ? "bg-white text-gray-400 border cursor-not-allowed"
//                           : "bg-white text-gray-700 hover:bg-gray-200 border"
//                       }`}
//                     >
//                       Prev
//                     </button>

//                     {/* Page numbers */}
//                     {Array.from({ length: totalPages }, (_, i) => i + 1)
//                       .filter((page) => {
//                         return (
//                           page === 1 ||
//                           page === totalPages ||
//                           (page >= currentPage - 1 && page <= currentPage + 1)
//                         );
//                       })
//                       .map((page, idx, arr) => (
//                         <React.Fragment key={page}>
//                           {idx > 0 && arr[idx - 1] !== page - 1 && (
//                             <span className="px-2">...</span>
//                           )}
//                           <button
//                             onClick={() => setCurrentPage(page)}
//                             className={`px-3 py-1 rounded ${
//                               currentPage === page
//                                 ? "bg-[#ff0000] text-white border"
//                                 : "bg-white text-gray-700 border hover:bg-gray-300"
//                             }`}
//                           >
//                             {page}
//                           </button>
//                         </React.Fragment>
//                       ))}

//                     {/* Next */}
//                     <button
//                       disabled={currentPage === totalPages}
//                       onClick={() =>
//                         setCurrentPage((p) => Math.min(p + 1, totalPages))
//                       }
//                       className={`px-3 py-1 rounded ${
//                         currentPage === totalPages
//                           ? "bg-white text-gray-400 border cursor-not-allowed"
//                           : "bg-white text-gray-700 hover:bg-gray-200 border"
//                       }`}
//                     >
//                       Next
//                     </button>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>

//           {/* Sidebar */}
//           <aside className="lg:col-span-1 mb-5">
//             <div className="sticky top-6 bg-white rounded-md shadow-sm p-4">
//               <h2 className="text-lg font-semibold mb-4">Featured Listings</h2>
//               <div className="space-y-4">
//                 {filteredProperties.slice(0, 3).map((p) => (
//                   <div
//                     key={p.id}
//                     className="border rounded-md overflow-hidden shadow-sm"
//                   >
//                     <img
//                       src={p.image}
//                       alt={p.title}
//                       className="w-full h-28 object-cover"
//                     />
//                     <div className="p-2 text-sm">
//                       <p className="font-medium text-gray-800 truncate">
//                         {p.title}
//                       </p>
//                       <p className="text-[#ff0000] font-bold">{p.price}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Listings;



























// import React, { useState, useEffect, useMemo } from "react";
// import { useLocation, Link } from "react-router-dom";
// import Navbar from "../components/layout/Navbar";
// import usePropertySearch from "../hooks/usePropertySearch";
// import ListingPageGrid from "../components/listings/ListingPageGrid";
// import SearchBarListings from "../components/layout/SearchbarListings";

// // Loader for the grid area only
// const GridLoader = () => {
//   return (
//     <div className="flex justify-center items-center h-64">
//       <div className="flex flex-col items-center space-y-4">
//         <div className="w-12 h-12 border-4 border-[#ff0000] border-t-transparent rounded-full animate-spin"></div>
//         <p className="text-[#ff0000] text-sm font-medium animate-pulse">
//           Loading Listings...
//         </p>
//       </div>
//     </div>
//   );
// };

// const LOCATION_ALIASES = {
//   "Lekki Phase 1": "Lekki",
//   "Ikota Lekki": "Lekki",
//   "Banana Island": "Ikoyi",
// };

// const Listings = () => {
//   const location = useLocation();

//   // ---------------- Loader ----------------
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 5000); // First load = 5s
//     return () => clearTimeout(timer);
//   }, []);
//   // ----------------------------------------

//   const queryLocation = useMemo(() => {
//     const sp = new URLSearchParams(location.search);
//     return (sp.get("location") || "").trim();
//   }, [location.search]);

//   const stateFilters = location.state?.filters || {};

//   const normalizedIncomingLocation = (() => {
//     const raw = (stateFilters.location || queryLocation || "").trim();
//     return LOCATION_ALIASES[raw] || raw;
//   })();

//   const [filters, setFilters] = useState({
//     type: stateFilters.type || "",
//     location: normalizedIncomingLocation || "",
//     bedroom: stateFilters.bedroom || "",
//     price: stateFilters.price || "",
//   });

//   useEffect(() => {
//     const rawFromState = (location.state?.filters?.location || "").trim();
//     const rawFromQuery = queryLocation;
//     const incoming = rawFromState || rawFromQuery || "";

//     const normalized = LOCATION_ALIASES[incoming] || incoming;

//     setFilters((prev) => ({
//       ...prev,
//       location: normalized || prev.location,
//     }));
//   }, [location.state, queryLocation]);

//   const handleSearch = (next) => {
//     setLoading(true); // Show loader
//     setFilters((prev) => ({ ...prev, ...next }));

//     // Keep loader for 2s only when searching
//     setTimeout(() => setLoading(false), 2000);
//   };

//   const filteredProperties = usePropertySearch(filters);

//   // ---------------- Pagination ----------------
//   const [currentPage, setCurrentPage] = useState(1);
//   const propertiesPerPage = 6;
//   const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

//   const indexOfLast = currentPage * propertiesPerPage;
//   const indexOfFirst = indexOfLast - propertiesPerPage;
//   const currentProperties = filteredProperties.slice(
//     indexOfFirst,
//     indexOfLast
//   );
//   // --------------------------------------------

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar />
//       <br />
//       <div className="bg-[#ff0000] mt-[-20px] py-3 px-3">
//         <SearchBarListings onSearch={handleSearch} initialFilters={filters} />
//       </div>

//       <br />
//       {/* Breadcrumb */}
//       <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-600">
//         <Link to="/" className="hover:text-[#ff0000]">
//           Home
//         </Link>{" "}
//         <span className="mx-2">›</span>
//         <span className="text-gray-800">Listings</span>
//       </div>

//       <div className="max-w-6xl mx-auto px-4">
//         {/* Page Title */}
//         <h1 className="text-3xl font-light text-gray-800 mb-6">Listings</h1>

//         {/* Tabs + Sort */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex space-x-4 text-sm font-medium">
//             <button className="px-4 py-2 bg-[#ff0000] text-white rounded-md">
//               ALL
//             </button>
//           </div>
//           <div className="text-sm text-gray-600">
//             Sort By:{" "}
//             <span className="font-medium text-gray-800">Default Order</span>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Main content */}
//           <div className="lg:col-span-3">
//             {loading ? (
//               <GridLoader />
//             ) : (
//               <>
//                 <ListingPageGrid properties={currentProperties} />

//                 {/* Pagination */}
//                 {totalPages > 1 && (
//                   <div className="flex justify-center mt-8 space-x-2 mb-5">
//                     {/* Prev */}
//                     <button
//                       disabled={currentPage === 1}
//                       onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//                       className={`px-3 py-1 rounded ${
//                         currentPage === 1
//                           ? "bg-white text-gray-400 border cursor-not-allowed"
//                           : "bg-white text-gray-700 hover:bg-gray-200 border"
//                       }`}
//                     >
//                       Prev
//                     </button>

//                     {/* Page numbers */}
//                     {Array.from({ length: totalPages }, (_, i) => i + 1)
//                       .filter((page) => {
//                         return (
//                           page === 1 ||
//                           page === totalPages ||
//                           (page >= currentPage - 1 && page <= currentPage + 1)
//                         );
//                       })
//                       .map((page, idx, arr) => (
//                         <React.Fragment key={page}>
//                           {idx > 0 && arr[idx - 1] !== page - 1 && (
//                             <span className="px-2">...</span>
//                           )}
//                           <button
//                             onClick={() => setCurrentPage(page)}
//                             className={`px-3 py-1 rounded ${
//                               currentPage === page
//                                 ? "bg-[#ff0000] text-white border"
//                                 : "bg-white text-gray-700 border hover:bg-gray-300"
//                             }`}
//                           >
//                             {page}
//                           </button>
//                         </React.Fragment>
//                       ))}

//                     {/* Next */}
//                     <button
//                       disabled={currentPage === totalPages}
//                       onClick={() =>
//                         setCurrentPage((p) => Math.min(p + 1, totalPages))
//                       }
//                       className={`px-3 py-1 rounded ${
//                         currentPage === totalPages
//                           ? "bg-white text-gray-400 border cursor-not-allowed"
//                           : "bg-white text-gray-700 hover:bg-gray-200 border"
//                       }`}
//                     >
//                       Next
//                     </button>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>

//           {/* Sidebar */}
//           <aside className="lg:col-span-1 mb-5">
//             <div className="sticky top-6 space-y-6">
//               {/* Featured Listing (only 1) */}
//               <div className="bg-white rounded-md shadow-sm p-4">
//                 <h2 className="text-lg font-semibold mb-4">Featured Listing</h2>
//                 {filteredProperties[0] && (
//                   <div className="border rounded-md overflow-hidden shadow-sm">
//                     <img
//                       src={filteredProperties[0].image}
//                       alt={filteredProperties[0].title}
//                       className="w-full h-28 object-cover"
//                     />
//                     <div className="p-2 text-sm">
//                       <p className="font-medium text-gray-800 truncate">
//                         {filteredProperties[0].title}
//                       </p>
//                       <p className="text-[#ff0000] font-bold">
//                         {filteredProperties[0].price}
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Property Type */}
//               <div className="bg-white rounded-md shadow-sm p-4">
//                 <h2 className="text-lg font-semibold mb-4">Property Type</h2>
//                 <ul className="space-y-2 text-sm text-gray-800">
//                   <li className="text-[#ff0000] font-medium">› Residential</li>
//                   <ul className="ml-4 space-y-1">
//                     <li className="hover:text-[#ff0000] cursor-pointer">
//                       › Apartment
//                     </li>
//                     <li className="hover:text-[#ff0000] cursor-pointer">
//                       › Fully Detached Duplex
//                     </li>
//                     <li className="hover:text-[#ff0000] cursor-pointer">
//                       › Penthouse
//                     </li>
//                     <li className="hover:text-[#ff0000] cursor-pointer">
//                       › Residential Land
//                     </li>
//                     <li className="hover:text-[#ff0000] cursor-pointer">
//                       › Flat
//                     </li>
//                     <li className="hover:text-[#ff0000] cursor-pointer">
//                       › Terrace Duplex
//                     </li>
//                   </ul>

//                   <li className="text-[#ff0000] font-medium mt-3">
//                     › Commercial
//                   </li>
//                   <ul className="ml-4 space-y-1">
//                     <li className="hover:text-[#ff0000] cursor-pointer">
//                       › Commercial Land
//                     </li>
//                     <li className="hover:text-[#ff0000] cursor-pointer">
//                       › Office
//                     </li>
//                   </ul>
//                 </ul>
//               </div>

//               {/* Cities */}
//               <div className="bg-white rounded-md shadow-sm p-4">
//                 <h2 className="text-lg font-semibold mb-4">Cities</h2>
//                 <ul className="space-y-2 text-sm">
//                   <li className="hover:text-[#ff0000] cursor-pointer">
//                     › Lagos Island
//                   </li>
//                   <li className="hover:text-[#ff0000] cursor-pointer">› Ibadan</li>
//                   <li className="hover:text-[#ff0000] cursor-pointer">
//                     › Lagos Mainland
//                   </li>
//                   <li className="hover:text-[#ff0000] cursor-pointer">› Asokoro</li>
//                 </ul>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Listings;





































import React, { useState, useEffect, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import usePropertySearch from "../hooks/usePropertySearch";
import ListingPageGrid from "../components/listings/ListingPageGrid";
import SearchBarListings from "../components/layout/SearchbarListings";
import { properties as allProperties } from "../data/properties";

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
    const timer = setTimeout(() => setLoading(false), 2000); // First load = 5s
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

  const handleSearch = (next) => {
    setLoading(true); // Show loader
    setFilters((prev) => ({ ...prev, ...next }));

    // Keep loader for 2s only when searching
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
                      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
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
                            onClick={() => setCurrentPage(page)}
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
                      onClick={() =>
                        setCurrentPage((p) => Math.min(p + 1, totalPages))
                      }
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
              {/* Featured Listing (only 1) */}
              <div className="bg-white shadow-sm p-6">
                <h2 className="text-lg font-normal mb-4">Featured Listing</h2>
                {filteredProperties[0] && (
                  <div className="overflow-hidden shadow-sm">
                    <img
                      src={filteredProperties[0].image}
                      alt={filteredProperties[0].title}
                      className="w-full h-28 object-cover"
                    />
                    <div className="p-2 text-sm">
                      <p className="font-medium text-gray-800 truncate">
                        {filteredProperties[0].title}
                      </p>
                      <p className="text-[#ff0000] font-bold">
                        {filteredProperties[0].price}
                      </p>
                    </div>
                  </div>
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
                  {["Lekki", "Banana Island", "Ikoyi"].map((city) => (
                    <li
                      key={city}
                      onClick={() => handleSearch({ location: city })}
                      className="hover:text-[#ff0000] cursor-pointer"
                    >
                      › {city}
                    </li>
                  ))}
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

