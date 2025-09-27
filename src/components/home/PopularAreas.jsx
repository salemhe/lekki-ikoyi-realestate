import React from "react";
import AreaCard from "../listings/AreaCard";
import { popularAreas } from "../../data/cities";
import backgroundImage from "../../assets/images/co_background.png";
import { motion } from "framer-motion";

const PopularAreas = () => {

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      className="relative py-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start justify-items-center">
          {/* Text block (1 column) */}
          <motion.div
            className="max-w-xs text-center lg:text-left self-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-3xl font-semibold mb-5 leading-snug text-gray-900">
              Explore Our Most Popular Areas
            </h2>
            <p className="text-lg text-gray-600">
              See what these areas have to offer and buy your perfect home
            </p>
          </motion.div>

          {/* Area cards (4 columns, full width on mobile) */}
          {popularAreas.slice(0, 4).map((area, index) => (
            <motion.div
              key={area.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full sm:w-[90%] md:w-full" 
            >
              <AreaCard area={area} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularAreas;
