import React from "react";
import { motion } from "framer-motion";
import heroVideo from "../../assets/images/mainhero.mp4";
import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black bg-grid">
      {/* Use new video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Fallback: if video fails, you could have a background image behind it, but optional */}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-transparent lg:bg-gradient-to-r z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-24 flex flex-col items-start justify-center">
        {/* Welcome text */}
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white text-md sm:text-2xl mb-2 font-light"
        >
          Welcome to <span className="text-red-500 font-extrabold">Lekkikoyi Property Investment Limited</span>
        </motion.h2>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-4 text-white text-left"
        >
          Find Your Next <span className="text-red-500">Luxury Home</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg sm:text-xl font-light mb-8 max-w-2xl text-white/90 text-left"
        >
          Discover curated properties in Nigeria’s most sought-after neighborhoods with us.
        </motion.p>

        {/* Search Bar (wide) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="w-full max-w-4xl"
        >
          <SearchBar />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;





