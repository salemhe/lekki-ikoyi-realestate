import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { CheckCircle } from "lucide-react";
import backgroundImage from "../../assets/images/ikoyi.jpg";

const GetInquiryForm = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const [status, setStatus] = useState("idle");
  const [phone, setPhone] = useState("");

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    formData.append("phone", phone);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_INQUIRY_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        toast.success("Inquiry submitted successfully!");
        e.target.reset();
        setPhone("");
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch(() => {
        setStatus("error");
        toast.error("Failed to submit inquiry. Please try again.");
        setTimeout(() => setStatus("idle"), 4000);
      });
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
            <AnimatedBlock variants={textVariant}>
              <h2 className="text-3xl font-light leading-snug max-w-xs mt-17">
                Why You Should Deal With Lekkikoyi.
              </h2>
              <br />
              <br />
              <div className="border solid 2px w-[100px] text-white"></div>
            </AnimatedBlock>

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

            <form onSubmit={handleInquirySubmit} className="space-y-4">
              {/* Inquiry Type */}
              <div>
                <label className="block text-sm font-bold text-gray-700">
                  Inquiry Type *
                </label>
                <select
                  name="inquiry_type"
                  required
                  className="w-full border p-2 focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select</option>
                  <option value="Buying">Buying</option>
                  <option value="Selling">Selling</option>
                  <option value="Renting">Renting</option>
                  <option value="Shortlet">Shortlet</option>
                </select>
              </div>

              {/* Information */}
              <div>
                <label className="block text-sm font-bold text-gray-700">
                  Information *
                </label>
                <select
                  name="information"
                  required
                  className="w-full border p-2 focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Specific Property">Specific Property</option>
                </select>
              </div>

              {/* Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required
                  className="border p-2 focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required
                  className="border p-2 focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border p-2 focus:ring-2 focus:ring-red-500"
              />

              {/*  Updated International Phone */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Your Phone *
                </label>
                <div className="relative border border-black py-1 focus-within:ring-2 focus-within:ring-red-500">
                  <PhoneInput
                    defaultCountry="ng"
                    value={phone}
                    onChange={setPhone}
                    inputProps={{
                      name: "phone",
                      required: true,
                    }}
                    preferredCountries={["ng", "gb", "us", "za", "ae"]}
                    enableSearch={true}
                    inputClassName="!w-full !border-none !p-3 !py-3 !text-gray-800 !outline-none"
                    countrySelectorStyleProps={{
                      buttonClassName:
                        "!h-[35px] px-2 !bg-white hover:!bg-gray-50",
                      dropdownClassName:
                        "!absolute !z-50 !bg-white !shadow-lg !border !border-gray-200 !rounded-md !max-h-60 !overflow-y-auto",
                    }}
                  />
                </div>
              </div>

              {/* Property */}
              <div>
                <label className="block text-sm font-bold text-gray-700">
                  Property *
                </label>
                <select
                  name="property"
                  required
                  className="w-full border p-2 focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Duplex">Duplex</option>
                  <option value="Flat">Flat</option>
                  <option value="Land">Land</option>
                  <option value="Terrace">Terrace</option>
                  <option value="Penthouse">Penthouse</option>
                </select>
              </div>

              {/* Price & Beds */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="number"
                  name="max_price"
                  placeholder="Max Price"
                  className="border p-2 focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="number"
                  name="beds"
                  placeholder="Number Of Beds"
                  className="border p-2 focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/*  Submit Button */}
              <button
                type="submit"
                className={`w-full flex justify-center items-center gap-2 mt-10 bg-[#ff0000] text-white font-semibold py-2 transition ${
                  status === "sending"
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-[#ff0001]"
                }`}
                disabled={status === "sending"}
              >
                {status === "sending" && "Sending..."}
                {status === "success" && (
                  <>
                    <CheckCircle size={18} className="text-white" /> Sent Successfully
                  </>
                )}
                {status === "error" && "Failed — Try Again"}
                {status === "idle" && "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

//  Animated Block Helper
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
