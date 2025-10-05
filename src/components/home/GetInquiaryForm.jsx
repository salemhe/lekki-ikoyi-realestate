import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import backgroundImage from "../../assets/images/ikoyi.jpg";

const GetInquiryForm = () => {
  // Animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section 
      className="w-full h-full py-20 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(238, 67, 67, 0.9), rgba(239, 68, 68, 0.85)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="relative bg-cover bg-center text-white md:w-3/5 p-8 md:p-16">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {/* Col 1 Row 1 */}
            <AnimatedBlock variants={textVariant}>
              <h2 className="text-3xl font-light leading-snug max-w-xs mt-17">
                Why You Should Deal With Lekkikoyi.
              </h2>
              <br />
              <br />
              <div className="border solid 2px w-[100px] text-white"></div>
            </AnimatedBlock>

            {/* Col 2 Row 1 */}
            <AnimatedBlock variants={textVariant}>
              <h3 className="text-4xl font-bold mt-[-30px]">01.</h3>
              <br />
              <h4 className="text-xl font-semibold mb-2">We Know What To Look For</h4>
              <p className="text-sm leading-relaxed">
                Buyers usually have a pretty firm idea in mind of what they want in a
                property, from number of bedrooms to an attached garage to other
                must-have and must-not-have factors. We alert you to hidden issues like
                furnace problems, leaks, roofing issues, mold, and insect damage.
              </p>
              <br />
              <br />
              <div className="border solid 2px w-[50px] text-white"></div>
            </AnimatedBlock>

            {/* Col 1 Row 2 */}
            <AnimatedBlock variants={textVariant}>
              <h3 className="text-4xl font-bold">02.</h3>
              <br />
              <h4 className="text-xl font-semibold mb-2">Attention To Detail</h4>
              <p className="text-sm leading-relaxed">
                You might be far out of your element when it comes to reviewing and
                understanding the multiple documents involved in a real estate deal.
                Luckily, we are far more familiar with all this paperwork than you are.
              </p>
              <br />
              <br />
              <div className="border solid 2px w-[50px] text-white"></div>
            </AnimatedBlock>

            {/* Col 2 Row 2 */}
            <AnimatedBlock variants={textVariant}>
              <h3 className="text-4xl font-bold mt-10">03.</h3>
              <br />
              <h4 className="text-xl font-semibold mb-2 mt-2">
                We Have Superior Negotiating Skills
              </h4>
              <p className="text-sm leading-relaxed">
                You might not be a negotiation shark if you don't happen to be an
                attorney, mediator, or real estate agent. It’s our job to get you the
                best price possible or ensure you get the best deal on the property you
                want to buy.
              </p>
              <br />
              <br />
              <div className="border solid 2px w-[50px] text-white"></div>
            </AnimatedBlock>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white flex items-center justify-center p-8 md:p-16 md:w-2/5">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800">Got Any Inquiry?</h2>
            <p className="text-gray-600 mb-6">Start here</p>

            <form className="space-y-4">
              {/* Inquiry Type */}
              <div>
                <label className="block text-sm font-bold text-gray-700">
                  Inquiry Type *
                </label>
                <select className="w-full border p-2 focus:ring-2 focus:ring-orange-500">
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
                <select className="w-full border p-2 focus:ring-2 focus:ring-orange-500">
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
                  className="border p-2 focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border  p-2 focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-2 focus:ring-2 focus:ring-orange-500"
              />

              {/* Phone */}
              <div>
                <label className="block text-sm font-bold text-gray-700">
                  Your Phone *
                </label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full border p-2 focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Property */}
              <div>
                <label className="block text-sm font-bold text-gray-700">
                  Property *
                </label>
                <select className="w-full border p-2 focus:ring-2 focus:ring-orange-500">
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
                  className="border p-2 focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="number"
                  placeholder="Number Of Beds"
                  className="border p-2 focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#ff0000] text-white font-semibold py-2 hover:bg-[#ff0001] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ AnimatedBlock helper
const AnimatedBlock = ({ children, variants }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default GetInquiryForm;
