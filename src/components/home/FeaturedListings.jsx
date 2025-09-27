import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { properties } from '../../data/properties';
import ListingCard from '../listings/ListingCard';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeaturedListings = () => {
  const swiperRef = useRef(null);

  // trigger animation only when section enters viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only the first time
    threshold: 0.2, // how much of section should be visible before firing
  });

  return (
    <section ref={ref} className="bg-[#f9f9f9] py-20 px-4">
      <div className="max-w-7xl mx-auto mt-15">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            Featured Listings
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Discover some of our recent and finest listings
          </p>
        </motion.div>

        {/* Custom Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-end gap-2 mb-4"
        >
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-[#ff0000] text-white px-3 py-1 rounded hover:bg-white hover:text-black border transition"
          >
            Prev
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-white hover:text-black border transition"
          >
            Next
          </button>
        </motion.div>

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {/* Display only the first 6 properties */}
            {properties
              .filter((p) => p.tags?.includes('FEATURED'))
              .slice(0, 6)
              .map((property) => (
                <SwiperSlide key={property.id}>
                  <ListingCard property={property} />
                </SwiperSlide>
              ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedListings;
