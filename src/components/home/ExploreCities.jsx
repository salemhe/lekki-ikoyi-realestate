// import React from 'react';
// import { Play } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import backgroundImage from '../../assets/images/main_background.png';
// import { residentialProperties, cityProperties } from '../../data/cities';

// // Section Header
// const SectionHeader = ({ title, subtitle }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//       className="mb-6 md:mb-8 text-center lg:text-left"
//     >
//       <h2 className="text-sm font-bold uppercase tracking-widest text-black">
//         {title}
//       </h2>
//       <p className="mt-2 text-2xl font-light leading-tight text-black">
//         {subtitle}
//       </p>
//     </motion.div>
//   );
// };

// // Property Card
// const PropertyCard = ({ title, propertiesCount, image, isLarge = false, filter }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/listings', { state: { filters: filter } });
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.5, ease: 'easeOut' }}
//       onClick={handleClick}
//       className={`relative cursor-pointer overflow-hidden shadow-xl group rounded-sm ${
//         isLarge ? 'w-[14rem] h-[32rem]' : 'w-70 h-60'
//       }`}
//     >
//       {/* Image */}
//       <img
//         src={image}
//         alt={title}
//         loading="lazy"
//         className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
//       />

//       {/* Overlay (optional for readability) */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>

//       {/* Content */}
//       <div className="absolute bottom-5 left-5 text-white z-10">
//         <p className="text-xs font-medium opacity-80">{propertiesCount}</p>
//         <h3 className="text-lg font-normal">{title}</h3>
//         <button className="mt-2 flex items-center gap-1 border border-white/50 bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase backdrop-blur-sm">
//           <Play className="h-3 w-3" />
//           Explore
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// const ExploreCities = () => {
//   const apartment = residentialProperties.find((p) => p.title === 'Apartment');
//   const mainDuplex = residentialProperties.find((p) => p.title === 'Fully Detached Duplex');
//   const semiDuplex = residentialProperties.find((p) => p.title === 'Semi Detached Duplex');
//   const terracedDuplex = residentialProperties.find((p) => p.title === 'Terraced Duplex');

//   return (
//     <div className="font-sans min-h-screen w-full relative overflow-hidden">
//       {/* Background Image */}
//       <img
//         src={backgroundImage}
//         alt="Background"
//         loading="lazy"
//         className="absolute inset-0 w-full h-full object-cover bg-scroll lg:bg-fixed"
//       />

//       {/* Main Content */}
//       <div className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
//         <div className="container mx-auto max-w-5xl flex flex-col gap-10">
//           {/* Residential Section */}
//           <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-10">
//             {/* Left Column */}
//             <div className="w-full lg:w-1/3 flex flex-col gap-4 items-center lg:items-start">
//               <SectionHeader
//                 title="Residential"
//                 subtitle="Check out our array of premium residential homes"
//               />
//               <PropertyCard {...apartment} filter={{ type: 'Apartment' }} />
//             </div>

//             {/* Right Column */}
//             <div className="w-full flex flex-col gap-4 items-center lg:w-2/3 lg:flex-row lg:items-start">
//               <PropertyCard {...mainDuplex} isLarge={true} filter={{ type: 'Fully Detached Duplex' }} />
//               <div className="flex flex-col gap-4 items-center">
//                 <PropertyCard {...semiDuplex} filter={{ type: 'Semi Detached Duplex' }} />
//                 <PropertyCard {...terracedDuplex} filter={{ type: 'Terraced Duplex' }} />
//               </div>
//             </div>
//           </div>

//           {/* Browse By City Section */}
//           <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-10">
//             <div className="w-full lg:w-1/3 text-center lg:text-left">
//               <SectionHeader title="Browse By City" subtitle="Find your home in the perfect city" />
//             </div>
//             <div className="w-full flex flex-col gap-4 items-center lg:w-2/3 lg:flex-row lg:flex-wrap lg:justify-start">
//               {cityProperties.map((city) => (
//                 <PropertyCard key={city.id} {...city} filter={{ location: city.title }} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExploreCities;


import React from 'react';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import backgroundImage from '../../assets/images/main_background.png';
import { residentialProperties, cityProperties } from '../../data/cities';

// Section Header
const SectionHeader = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-6 md:mb-8 text-center lg:text-left"
    >
      <h2 className="text-sm font-bold uppercase tracking-widest text-black">
        {title}
      </h2>
      <p className="mt-2 text-2xl font-light leading-tight text-black">
        {subtitle}
      </p>
    </motion.div>
  );
};

// Property Card
const PropertyCard = ({ title, propertiesCount, image, isLarge = false, filter }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/listings', { state: { filters: filter } });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onClick={handleClick}
      className={`relative cursor-pointer overflow-hidden shadow-xl group rounded-sm
        ${isLarge 
          ? 'w-70 h-60 md:w-[14rem] md:h-[32rem]'   // mobile same as others, desktop tall
          : 'w-70 h-60'
        }`}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
      />

      {/* Overlay (optional for readability) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-5 left-5 text-white z-10">
        <p className="text-xs font-medium opacity-80">{propertiesCount}</p>
        <h3 className="text-lg font-normal">{title}</h3>
        <button className="mt-2 flex items-center gap-1 border border-white/50 bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase backdrop-blur-sm">
          <Play className="h-3 w-3" />
          Explore
        </button>
      </div>
    </motion.div>
  );
};

const ExploreCities = () => {
  const apartment = residentialProperties.find((p) => p.title === 'Apartment');
  const mainDuplex = residentialProperties.find((p) => p.title === 'Fully Detached Duplex');
  const semiDuplex = residentialProperties.find((p) => p.title === 'Semi Detached Duplex');
  const terracedDuplex = residentialProperties.find((p) => p.title === 'Terraced Duplex');

  return (
    <div className="font-sans min-h-screen w-full relative overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover bg-scroll lg:bg-fixed"
      />

      {/* Main Content */}
      <div className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
        <div className="container mx-auto max-w-5xl flex flex-col gap-10">
          {/* Residential Section */}
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-10">
            {/* Left Column */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4 items-center lg:items-start">
              <SectionHeader
                title="Residential"
                subtitle="Check out our array of premium residential homes"
              />
              <PropertyCard {...apartment} filter={{ type: 'Apartment' }} />
            </div>

            {/* Right Column */}
            <div className="w-full flex flex-col gap-4 items-center lg:w-2/3 lg:flex-row lg:items-start">
              <PropertyCard {...mainDuplex} isLarge={true} filter={{ type: 'Fully Detached Duplex' }} />
              <div className="flex flex-col gap-4 items-center">
                <PropertyCard {...semiDuplex} filter={{ type: 'Semi Detached Duplex' }} />
                <PropertyCard {...terracedDuplex} filter={{ type: 'Terraced Duplex' }} />
              </div>
            </div>
          </div>

          {/* Browse By City Section */}
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-10">
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <SectionHeader title="Browse By City" subtitle="Find your home in the perfect city" />
            </div>
            <div className="w-full flex flex-col gap-4 items-center lg:w-2/3 lg:flex-row lg:flex-wrap lg:justify-start">
              {cityProperties.map((city) => (
                <PropertyCard key={city.id} {...city} filter={{ location: city.title }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCities;
