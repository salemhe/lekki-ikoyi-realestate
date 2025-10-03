import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { properties } from "../data/properties";
import ListingPageCard from "../components/listings/ListingPageCard";
import logo from "../assets/images/lekkiikoyi_logo.png";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Phone,
  MessageCircle,
  MapPin,
  Printer,
  Heart,
  Share2,
  CheckCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../components/layout/Header";

const SingleProperty = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  const fallbackImages = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  ];

  if (!property)
    return <p className="text-center mt-20">Property not found.</p>;

  const images = property.images?.length
    ? property.images
    : [property.image, ...fallbackImages];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  // Dummy amenities
  // const amenities = [
  //   "Swimming Pool",
  //   "Gym",
  //   "Parking Space",
  //   "24/7 Security",
  //   "CCTV",
  //   "Water Supply",
  //   "Children’s Play Area",
  //   "Backup Power",
  // ];

  // Related properties: filter by bedrooms OR category, exclude current
  const relatedProperties = properties
    .filter(
      (p) =>
        p.id !== property.id &&
        (p.bedrooms === property.bedrooms || p.category === property.category)
    )
    .slice(0, 4);


  
  //Animations for framer-motion 
  // Fade up when in view
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
  };

  // Bounce in (amenities)
  const bounceIn = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 10, staggerChildren: 0.1 } },
  };

  // Slide in from right (related props)
  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
  };




  return (
    <div className="w-full bg-white">
      <Header />

      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-7">
        {/* Breadcrumb */}
        <div className="hidden md:block">
          <Link
            to="/listings"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-4"
          >
            <ChevronLeft size={20} />
            Back to Listings
          </Link>
          <div className="text-sm text-gray-500 mb-6">
            <Link to="/" className="text-red-500 hover:underline">
              Home
            </Link>{" "}
            › <span className="text-red-500">{property.category}</span> ›{" "}
            {property.title}
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden relative">
          {/* Floating action icons */}
          <div className="absolute top-2 right-4 z-10 flex gap-3">
            <button className="bg-white/80 p-2 rounded-full shadow">
              <Printer size={18} />
            </button>
            <button className="bg-white/80 p-2 rounded-full shadow">
              <Heart size={18} />
            </button>
            <button className="bg-white/80 p-2 rounded-full shadow">
              <Share2 size={18} />
            </button>
          </div>

          {/* Mobile Image with arrows + counter */}
          <div className="relative mb-4 -mx-4 mt-[-20px]">
            <img
              src={images[currentImageIndex]}
              alt="Property"
              className="w-full h-64 object-cover"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {currentImageIndex + 1}/{images.length}
                </div>
              </>
            )}
          </div>

          {/* Tags */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-2 mb-3"
          >
            {property.tags?.map((tag, i) => (
              <motion.span
                variants={fadeUp}
                key={i}
                className={`px-2 py-1 text-xs rounded-md font-medium uppercase ${
                  tag === "FEATURED"
                    ? "bg-red-500 text-white"
                    : tag === "FOR SALE"
                    ? "bg-gray-800 text-white"
                    : tag === "HOT OFFER"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>


          {/* Title, Location, Price */}
          <h1 className="text-xl font-semibold text-gray-900 mb-2">
            {property.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin size={16} className="mr-2" />
            {property.location}
          </div>
          <p className="text-2xl font-semibold text-gray-900 mb-6">
            <span className="font-normal text-[20px]">From</span>{" "}
            {property.price || "Available upon request"}
          </p>

          <div className="mb-5 -mx-4 border-t border-gray-200"></div>

          {/* Description */}
          <div className="mb-8 py-5 px-3">
            <h2 className="text-2xl font-normal mb-3 text-center">Description</h2>
            <p className="text-gray-700 leading-relaxed">
              {property.description ||
                "This property offers modern living in a prime location. Spacious rooms, contemporary finishes, and a secure environment make it a perfect investment or family home."}
            </p>
          </div>

          {/* Amenities */}
          <motion.div
            variants={bounceIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 border border-gray-200 py-3 px-3 mb-5"
          >
            {property.amenities.map((item, i) => (
              <motion.div
                variants={bounceIn}
                key={i}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3 transition"
              >
                <CheckCircle className="text-red-500 flex-shrink-0" size={20} />
                <span className="text-gray-800 text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>


          <div className="mb-5 -mx-4 border-t border-gray-200"></div>
          {/* Map + Contact Form */}
          <div className="mb-20 flex flex-col lg:flex-row gap-8">
            {/* Map Section */}
            <div className="flex-1 border border-gray-300 py-3 px-4 rounded-lg">
              <h3 className="text-xl font-normal mb-3">Location</h3>
              <motion.div 
                variants={bounceIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="w-full h-64 rounded-lg overflow-hidden shadow"
              >
                <iframe
                  title="Property Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.460414408647!2d3.4563!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52e8d1b4f3f%3A0x3e1d48a3f3aefb0!2sLekki%20Phase%201!5e0!3m2!1sen!2sng!4v1690000000000!5m2!1sen!2sng"
                  width="100%"
                  height="200%"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0 w-full h-full"
                ></iframe>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div 
              variants={bounceIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex-1 border border-gray-300 py-3 px-4 rounded-lg mb-10"
            >
              <h3 className="text-xl font-normal mb-3">Contact Agent</h3>
              <form className="space-y-4 p-5 rounded-lg">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-3 px-4  hover:bg-red-600 transition"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* RELATED PROPERTIES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <h2 className="text-2xl font-normal mb-6 text-center">Related Properties</h2>
              {relatedProperties.map((rp) => (
                <div key={rp.id}>
                  <ListingPageCard property={rp} />
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Call & Chat */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex items-center gap-4">
            <a>
              <img src={logo} alt="Logo" width="70px" height="70px" />
            </a>

            <div className="ml-auto flex items-center gap-4">
              <a
                href="https://wa.me/2348130082248"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-gray-300 rounded-lg py-4 px-6 bg-green-500 text-white"
              >
                <FaWhatsapp size={25} />
              </a>
              <a
                href="tel:+2348130082248"
                className="flex items-center justify-center border border-gray-200 rounded-lg py-4 px-6 bg-white text-black"
              >
                <Phone size={25} />
              </a>
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:block">
          {/* Title + Price + Tags ABOVE images */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex flex-col">
              <h1 className="text-3xl font-normal leading-snug mb-1">
                {property.title}
              </h1>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-wrap gap-2 mb-3"
              >
                {property.tags?.map((tag, i) => (
                  <motion.span
                    variants={fadeUp}
                    key={i}
                    className={`px-2 py-1 text-xs rounded-md font-medium uppercase ${
                      tag === "FEATURED"
                        ? "bg-red-500 text-white"
                        : tag === "FOR SALE"
                        ? "bg-gray-800 text-white"
                        : tag === "HOT OFFER"
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <p className="text-gray-600 flex items-center mb-2 font-light">
                <MapPin size={16} className="mr-2" />
                {property.location}
              </p>
            </div>

            <div className="flex flex-col items-end gap-3">
              <p className="text-3xl font-semibold text-gray-800">
                <span className="font-normal">From</span>{" "}
                {property.price || "Available upon request"}
              </p>
              <div className="flex gap-3">
                <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                  <Printer size={18} />
                </button>
                <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                  <Heart size={18} />
                </button>
                <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Images grid */}
          <div className="grid grid-cols-3 gap-4 h-96 mb-20 relative">
            <div className="col-span-2 row-span-2 relative">
              <img
                src={images[0]}
                alt="Main property view"
                className="w-full h-[500px] object-cover cursor-pointer"
                onClick={() => {
                  setCurrentImageIndex(0);
                  setIsGalleryOpen(true);
                }}
              />
            </div>
            <div className="relative">
              <img
                src={images[1] || images[0]}
                alt="Interior view"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => {
                  setCurrentImageIndex(1);
                  setIsGalleryOpen(true);
                }}
              />
            </div>
            <div className="relative">
              <img
                src={images[2] || images[0]}
                alt="Interior stairs"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => {
                  setCurrentImageIndex(2);
                  setIsGalleryOpen(true);
                }}
              />
              {images.length > 3 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <button
                    onClick={() => setIsGalleryOpen(true)}
                    className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
                  >
                    +{images.length - 3} More
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8 py-5 px-3">
            <h2 className="text-2xl font-normal mb-10 mt-10 text-center">
              Description
            </h2>
            <p className="text-3xl font-semibold text-center mb-4">
              {property.title} - {property.price}
            </p>
            <p className="text-gray-700 leading-relaxed px-5">
              {property.description ||
                "This property offers modern living in a prime location. Spacious rooms, contemporary finishes, and a secure environment make it a perfect investment or family home."}
            </p>
          </div>

          {/* Amenities */}
          <motion.div
            variants={bounceIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 border border-gray-200 py-3 px-3 mb-15"
          >
            {property.amenities.map((item, i) => (
              <motion.div
                variants={bounceIn}
                key={i}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3 transition"
              >
                <CheckCircle className="text-red-500 flex-shrink-0" size={20} />
                <span className="text-gray-800 text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Map + Contact Form */}
          <div className="mb-20 flex flex-col lg:flex-row gap-8">
            {/* Map Section */}
            <motion.div 
              variants={bounceIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex-1 border border-gray-300 py-3 px-4 rounded-lg"
            >
              <h3 className="text-xl font-normal mb-3">Location</h3>
              <div className="w-full h-64 rounded-lg overflow-hidden shadow">
                <iframe
                  title="Property Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.460414408647!2d3.4563!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52e8d1b4f3f%3A0x3e1d48a3f3aefb0!2sLekki%20Phase%201!5e0!3m2!1sen!2sng!4v1690000000000!5m2!1sen!2sng"
                  width="100%"
                  height="200%"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0 w-full h-full"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              variants={bounceIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex-1 border border-gray-300 py-3 px-4 rounded-lg"
            >
              <h3 className="text-xl font-normal mb-3">Contact Agent</h3>
              <form className="space-y-4 p-5 rounded-lg">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-3 px-4  hover:bg-red-600 transition"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>

          {/* RELATED PROPERTIES */}
          {relatedProperties.length > 0 && (
            <div className="mb-20">
              <h2 className="text-2xl font-normal mb-6 text-center">
                Related Properties
              </h2>
              <div
                variants={slideRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }} 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {relatedProperties.map((rp) => (
                  <ListingPageCard key={rp.id} property={rp} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;



// import React, { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import Navbar from "../components/layout/Navbar";
// import { properties } from "../data/properties";
// import ListingPageCard from "../components/listings/ListingPageCard";
// import logo from "../assets/images/lekkiikoyi_logo.png";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Printer,
//   Heart,
//   Share2,
//   MapPin,
//   CheckCircle,
//   Phone,
// } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";

// const SingleProperty = () => {
//   const { id } = useParams();
//   const property = properties.find((p) => p.id === parseInt(id));

//   // Fallback images if no images array provided
//   const fallbackImages = [
//     "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
//     "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
//   ];

//   if (!property)
//     return <p className="text-center mt-20">Property not found.</p>;

//   // Use property images or fallback
//   const images = property.images?.length
//     ? property.images
//     : [property.image, ...fallbackImages];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () =>
//     setCurrentImageIndex((prev) => (prev + 1) % images.length);
//   const prevImage = () =>
//     setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

//   // Related properties: filter by beds OR category, exclude current
//   const relatedProperties = properties
//     .filter(
//       (p) =>
//         p.id !== property.id &&
//         (p.beds === property.beds || p.category === property.category)
//     )
//     .slice(0, 4);

//   //Animations for framer-motion
//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, staggerChildren: 0.1 },
//     },
//   };

//   const bounceIn = {
//     hidden: { opacity: 0, scale: 0.8 },
//     show: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 120,
//         damping: 10,
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   return (
//     <div className="w-full bg-white">
//       <Navbar />

//       <div className="max-w-6xl mx-auto px-4 md:px-6 pt-5">
//         {/* Breadcrumb */}
//         <div className="hidden md:block">
//           <Link
//             to="/listings"
//             className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-4"
//           >
//             <ChevronLeft size={20} />
//             Back to Listings
//           </Link>
//           <div className="text-sm text-gray-500 mb-6">
//             <Link to="/" className="text-red-500 hover:underline">
//               Home
//             </Link>{" "}
//             › <span className="text-red-500">{property.category}</span> ›{" "}
//             {property.title}
//           </div>
//         </div>

//         {/* MOBILE VIEW */}
//         <div className="md:hidden relative">
//           {/* Floating action icons */}
//           <div className="absolute top-2 right-4 z-10 flex gap-3">
//             <button className="bg-white/80 p-2 rounded-full shadow">
//               <Printer size={18} />
//             </button>
//             <button className="bg-white/80 p-2 rounded-full shadow">
//               <Heart size={18} />
//             </button>
//             <button className="bg-white/80 p-2 rounded-full shadow">
//               <Share2 size={18} />
//             </button>
//           </div>

//           {/* Mobile Image with arrows + counter */}
//           <div className="relative mb-4 -mx-4 mt-[-20px]">
//             <img
//               src={images[currentImageIndex]}
//               alt="Property"
//               className="w-full h-64 object-cover"
//             />
//             {images.length > 1 && (
//               <>
//                 <button
//                   onClick={prevImage}
//                   className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
//                 >
//                   <ChevronLeft size={20} />
//                 </button>
//                 <button
//                   onClick={nextImage}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//                 <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
//                   {currentImageIndex + 1}/{images.length}
//                 </div>
//               </>
//             )}
//           </div>

//           {/* Tags */}
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.2 }}
//             className="flex flex-wrap gap-2 mb-3"
//           >
//             {property.tags?.map((tag, i) => (
//               <motion.span
//                 variants={fadeUp}
//                 key={i}
//                 className={`px-2 py-1 text-xs rounded-md font-medium uppercase ${
//                   tag === "FEATURED"
//                     ? "bg-red-500 text-white"
//                     : tag === "FOR SALE"
//                     ? "bg-gray-800 text-white"
//                     : tag === "HOT OFFER"
//                     ? "bg-green-500 text-white"
//                     : "bg-gray-200 text-gray-800"
//                 }`}
//               >
//                 {tag}
//               </motion.span>
//             ))}
//           </motion.div>

//           {/* Title, Location, Price */}
//           <h1 className="text-xl font-semibold text-gray-900 mb-2">
//             {property.title}
//           </h1>
//           <div className="flex items-center text-gray-600 mb-2">
//             <MapPin size={16} className="mr-2" />
//             {property.location}
//           </div>
//           <p className="text-2xl font-semibold text-gray-900 mb-6">
//             <span className="font-normal text-[20px]">From</span>{" "}
//             {property.price || "Available upon request"}
//           </p>

//           <div className="mb-5 -mx-4 border-t border-gray-200"></div>

//           {/* Description */}
//           <div className="mb-8 py-5 px-3">
//             <h2 className="text-2xl font-normal mb-3 text-center">Description</h2>
//             <p className="text-gray-700 leading-relaxed">
//               {property.description ||
//                 "This property offers modern living in a prime location. Spacious rooms, contemporary finishes, and a secure environment make it a perfect investment or family home."}
//             </p>
//           </div>

//           {/* Amenities from property */}
//           {property.amenities && (
//             <motion.div
//               variants={bounceIn}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.2 }}
//               className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 border border-gray-200 py-3 px-3 mb-5"
//             >
//               {property.amenities.map((item, i) => (
//                 <motion.div
//                   variants={bounceIn}
//                   key={i}
//                   className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3 transition"
//                 >
//                   <CheckCircle className="text-red-500 flex-shrink-0" size={20} />
//                   <span className="text-gray-800 text-sm font-medium">{item}</span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}

//           {/* Sticky Call & Chat */}
//           <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex items-center gap-4">
//             <a>
//               <img src={logo} alt="Logo" width="70px" height="70px" />
//             </a>

//             <div className="ml-auto flex items-center gap-4">
//               <a
//                 href="https://wa.me/2348130082248"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center justify-center border border-gray-300 rounded-lg py-4 px-6 bg-green-500 text-white"
//               >
//                 <FaWhatsapp size={25} />
//               </a>
//               <a
//                 href="tel:+2348130082248"
//                 className="flex items-center justify-center border border-gray-200 rounded-lg py-4 px-6 bg-white text-black"
//               >
//                 <Phone size={25} />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* DESKTOP VIEW */}
//         <div className="hidden md:block">
//           {/* Title + Price + Tags ABOVE images */}
//           <div className="flex items-start justify-between mb-4">
//             <div className="flex flex-col">
//               <h1 className="text-3xl font-normal leading-snug mb-1">
//                 {property.title}
//               </h1>

//               <motion.div
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.2 }}
//                 className="flex flex-wrap gap-2 mb-3"
//               >
//                 {property.tags?.map((tag, i) => (
//                   <motion.span
//                     variants={fadeUp}
//                     key={i}
//                     className={`px-2 py-1 text-xs rounded-md font-medium uppercase ${
//                       tag === "FEATURED"
//                         ? "bg-red-500 text-white"
//                         : tag === "FOR SALE"
//                         ? "bg-gray-800 text-white"
//                         : tag === "HOT OFFER"
//                         ? "bg-green-500 text-white"
//                         : "bg-gray-200 text-gray-800"
//                     }`}
//                   >
//                     {tag}
//                   </motion.span>
//                 ))}
//               </motion.div>

//               <p className="text-gray-600 flex items-center mb-2 font-light">
//                 <MapPin size={16} className="mr-2" />
//                 {property.location}
//               </p>
//             </div>

//             <div className="flex flex-col items-end gap-3">
//               <p className="text-3xl font-semibold text-gray-800">
//                 <span className="font-normal">From</span>{" "}
//                 {property.price || "Available upon request"}
//               </p>
//               <div className="flex gap-3">
//                 <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
//                   <Printer size={18} />
//                 </button>
//                 <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
//                   <Heart size={18} />
//                 </button>
//                 <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
//                   <Share2 size={18} />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Images grid */}
//           <div className="grid grid-cols-3 gap-4 h-96 mb-20 relative">
//             <div className="col-span-2 row-span-2 relative">
//               <img
//                 src={images[0]}
//                 alt="Main property view"
//                 className="w-full h-full object-cover cursor-pointer"
//               />
//             </div>
//             <div className="relative">
//               <img
//                 src={images[1] || images[0]}
//                 alt="Interior view"
//                 className="w-full h-full object-cover cursor-pointer"
//               />
//             </div>
//             <div className="relative">
//               <img
//                 src={images[2] || images[0]}
//                 alt="Interior stairs"
//                 className="w-full h-full object-cover cursor-pointer"
//               />
//             </div>
//           </div>

//           {/* Description */}
//           <div className="mb-8 py-5 px-3">
//             <h2 className="text-2xl font-normal mb-10 mt-10 text-center">
//               Description
//             </h2>
//             <p className="text-3xl font-semibold text-center mb-4">
//               {property.title} - {property.price}
//             </p>
//             <p className="text-gray-700 leading-relaxed px-5">
//               {property.description}
//             </p>
//           </div>

//           {/* Amenities */}
//           {property.amenities && (
//             <motion.div
//               variants={bounceIn}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.2 }}
//               className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 border border-gray-200 py-3 px-3 mb-15"
//             >
//               {property.amenities.map((item, i) => (
//                 <motion.div
//                   variants={bounceIn}
//                   key={i}
//                   className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3 transition"
//                 >
//                   <CheckCircle className="text-red-500 flex-shrink-0" size={20} />
//                   <span className="text-gray-800 text-sm font-medium">{item}</span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}

//           {/* RELATED PROPERTIES */}
//           {relatedProperties.length > 0 && (
//             <div className="mb-20">
//               <h2 className="text-2xl font-normal mb-6 text-center">
//                 Related Properties
//               </h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {relatedProperties.map((rp) => (
//                   <ListingPageCard key={rp.id} property={rp} />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProperty;
