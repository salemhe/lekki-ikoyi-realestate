import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { CheckCircle } from "lucide-react";
import Header from "../components/layout/Header";
import { motion } from "framer-motion";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const bounceIn = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const InquiryForm = () => {
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

            {/* ✅ International Phone */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Your Phone *
              </label>
              <div className="relative border border-black py-1  focus-within:ring-2 focus-within:ring-red-500">
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

            {/* ✅ Submit Button */}
            <button
              type="submit"
              className={`w-full flex justify-center items-center gap-2 bg-[#ff0000] text-white font-semibold py-2 transition ${
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
        </motion.div>
      </div>
    </div>
  );
};

export default InquiryForm;
