// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   FiHeart,
//   FiPlus,
//   FiMaximize2,
//   FiUser,
//   FiClock,
// } from 'react-icons/fi';
// import { PiRuler, PiBed, PiBathtub } from 'react-icons/pi';

// const ListingPageCard = ({ property }) => {
//   const [liked, setLiked] = useState(false);

//   return (
//     <Link to={`/property/${property.id}`} className="block">
//       <div className="bg-white rounded shadow-sm overflow-hidden hover:shadow-lg transition">
//         {/* Image with tags */}
//         <div className="relative">
//           <img
//             src={property.image}
//             alt={property.title}
//             className="w-full h-64 object-cover"
//           />
//           <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
//             {property.tags.map((tag, index) => (
//               <span
//                 key={index}
//                 className={`text-xs text-white font-semibold px-2 py-1 rounded ${
//                   tag === 'FEATURED' ? 'bg-[#ff0000]' : 'bg-black/70'
//                 }`}
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* Price + Icons */}
//           <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
//             <p className="text-lg font-semibold">{property.price}</p>
//             <div className="absolute bottom-3 right-3 flex items-center gap-3 text-sm">
//                 <span className='bg-[#121417] rounded py-2 px-2'>
//                     <FiMaximize2 />
//                 </span>

//                 <span className='bg-[#121417] rounded py-1.5 px-2'>
//                     <button
//                         type="button"
//                         onClick={(e) => {
//                         e.preventDefault(); // Prevent navigation on click
//                         setLiked(!liked);
//                         }}
//                     >
//                     <FiHeart className={liked ? 'text-red-500' : ''} />
//                     </button>
//                 </span>
//               <span className='bg-[#121417] rounded py-2 px-2'>
//                     <FiPlus />
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Text content */}
//         <div className="p-4 space-y-1">
//           <h3 className="font-medium text-[15px] mb-2">{property.title}</h3>
//           <p className="text-[12px] text-gray-600 font-light">{property.location}</p>
//           <div className="flex items-center text-xs gap-4 mt-2 mb-3">
//             <span className="flex items-center gap-1 font-bold text-m">
//               <PiBed className="text-2xl" /> {property.beds}
//             </span>
//             <span className="flex items-center gap-1 font-bold text-m">
//               <PiBathtub className="text-2xl" /> {property.baths}
//             </span>
//             <span className="flex items-center gap-1 font-bold text-m">
//               <PiRuler className="text-2xl" /> {property.size}
//             </span>
//           </div>
//           <p className="text-xs uppercase mt-2 font-semibold">{property.category}</p>
//         </div>

//         {/* Footer */}
//         {/* <div className="flex items-center justify-between text-xs text-gray-500 border-t px-4 py-4">
//           <div className="flex items-center gap-1">
//             <FiUser />
//             <span>{property.agent}</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <FiClock />
//             <span>{property.timePosted}</span>
//           </div>
//         </div> */}
//       </div>
//     </Link>
//   );
// };

// export default ListingPageCard;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiHeart,
  FiPlus,
  FiMaximize2,
} from 'react-icons/fi';
import { PiRuler, PiBed, PiBathtub } from 'react-icons/pi';

const ListingPageCard = ({ property }) => {
  const [liked, setLiked] = useState(false);

  return (
    <Link to={`/property/${property.id}`} className="block">
      <div className="bg-white rounded shadow-sm overflow-hidden hover:shadow-lg transition max-w-sm mx-auto">
        {/* Image with tags */}
        <div className="relative">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-58 object-cover" // reduced height
          />
          <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
            {property.tags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs text-white font-semibold px-2 py-1 rounded ${
                  tag === 'FEATURED' ? 'bg-[#ff0000]' : 'bg-black/70'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Price + Icons */}
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent text-white">
            <p className="text-base font-semibold">{property.price}</p>
            <div className="absolute bottom-2 right-2 flex items-center gap-2 text-sm">
              <span className="bg-[#121417] rounded py-2 px-2">
                <FiMaximize2 />
              </span>

              <span className="bg-[#121417] rounded py-1.5 px-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigation
                    setLiked(!liked);
                  }}
                >
                  <FiHeart className={liked ? 'text-red-500' : ''} />
                </button>
              </span>

              <span className="bg-[#121417] rounded py-2 px-2">
                <FiPlus />
              </span>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="p-3 space-y-1">
          <h3 className="font-medium text-[14px] mb-1">{property.title}</h3>
          <p className="text-[12px] text-gray-600 font-light">{property.location}</p>
          <div className="flex items-center text-xs gap-3 mt-2 mb-2">
            <span className="flex items-center gap-1 font-bold text-sm">
              <PiBed className="text-lg" /> {property.beds}
            </span>
            <span className="flex items-center gap-1 font-bold text-sm">
              <PiBathtub className="text-lg" /> {property.baths}
            </span>
            <span className="flex items-center gap-1 font-bold text-sm">
              <PiRuler className="text-lg" /> {property.size}
            </span>
          </div>
          <p className="text-[11px] uppercase mt-1 font-semibold">{property.category}</p>
        </div>
      </div>
    </Link>
  );
};

export default ListingPageCard;
