import React from "react";
import PropertyCard from "../listings/PropertyCard";
import { properties } from "../../data/properties";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NewSelection = () => {
  // ✅ Show the last 6 properties
  const latestProperties = properties.slice(-6);

  // Variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Main Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-light text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Check Our Selection Of Finest Properties
        </motion.h2>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestProperties.map((property, index) => (
            <motion.div
              key={property.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link
              to="/listings"
              className="bg-white text-[#ff0000] font-medium py-3 px-16 border 
                         hover:bg-[#ff0000] hover:text-white transition-all duration-300  shadow-sm"
            >
              Load More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewSelection;


// import React from "react";
// import PropertyCard from "../listings/PropertyCard";
// import { properties } from "../../data/properties";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const NewSelection = () => {
//   const latestProperties = properties.slice(-6);

//   const cardVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <section className="bg-gray-100 py-16">
//       <div className="container mx-auto px-6 md:px-12 lg:px-16">
//         <motion.h2
//           className="text-3xl md:text-4xl font-light text-center text-gray-800 mb-12"
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           Check Our Selection Of Finest Properties
//         </motion.h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {latestProperties.map((property, index) => (
//             <motion.div
//               key={property.id}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ delay: index * 0.2 }}
//             >
//               <PropertyCard property={property} />
//             </motion.div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//           >
//             <Link
//               to="/listings"
//               className="bg-white text-[#ff0000] font-medium py-3 px-16 border 
//                          hover:bg-[#ff0000] hover:text-white transition-all duration-300 shadow-sm"
//             >
//               Load More
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewSelection;
