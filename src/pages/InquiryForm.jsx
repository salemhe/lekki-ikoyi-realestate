import React from "react";
import backgroundImage from "../assets/images/about-header.jpg";
import Header from "../components/layout/Header";
import { motion } from "framer-motion";

const bounceIn = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const InquiryForm = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          variants={bounceIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full max-w-2xl mx-auto border border-gray-200 p-6 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-800">Got Any Inquiry?</h2>
          <p className="mb-8 mt-6 text-[#54595f] font-light">
            Have a question about a property, partnership, or our services?  
            Fill out the form below and our team will get back to you promptly.
          </p>

          <form className="space-y-4">
            {/* Inquiry Type */}
            <div>
              <label className="block text-sm font-bold text-gray-700">
                Inquiry Type *
              </label>
              <select className="w-full border p-2 rounded focus:ring-2 focus:ring-orange-500">
                <option value="">Select</option>
                <option value="buy">Buying</option>
                <option value="sell">Selling</option>
                <option value="buy">Renting</option>
                <option value="sell">Shortlet</option>
              </select>
            </div>

            {/* Information */}
            <div>
              <label className="block text-sm font-bold text-gray-700">
                Information *
              </label>
              <select className="w-full border p-2 rounded focus:ring-2 focus:ring-orange-500">
                <option value="">Select</option>
                <option value="general">General Inquiry</option>
                <option value="specific">Specific Property</option>
              </select>
            </div>

            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-2 rounded focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-2 rounded focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-2 rounded focus:ring-2 focus:ring-orange-500"
            />

            {/* Phone */}
            <div>
              <label className="block text-sm font-bold text-gray-700">
                Your Phone *
              </label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full border p-2 rounded focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Property */}
            <div>
              <label className="block text-sm font-bold text-gray-700">
                Property *
              </label>
              <select className="w-full border p-2 rounded focus:ring-2 focus:ring-orange-500">
                <option value="">Select Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
              </select>
            </div>

            {/* Price & Beds */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Max Price"
                className="border p-2 rounded focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="number"
                placeholder="Number Of Beds"
                className="border p-2 rounded focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#ff0000] text-white font-semibold py-2 rounded hover:bg-[#e00000] transition"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default InquiryForm;


