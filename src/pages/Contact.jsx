import React from "react";
import backgroundImage from "../assets/images/ikoyi.jpg";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";

// Motion variants
const bounceIn = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Hero / Banner */}
      <div
        className="relative h-50 bg-cover bg-center sm:h-64"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-blue-400/40 flex items-start">
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-24 px-6 sm:px-20 drop-shadow-md">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section - Contact Info + Cards */}
          <motion.div
            variants={bounceIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-2xl mb-6">Get in Touch</h2>
            <p className="mb-6 font-light text-[#54595f]">
              We’re here to assist you with all inquiries regarding properties,
              services, or partnerships. Reach out to us directly through the
              contact details below or send us a quick message using the form.
            </p>

            {/* Flex cards */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Phone Card */}
              <div className="flex-1 bg-gray-50 p-6 shadow-sm">
                <h3 className="text-lg font-normal mb-3 text-gray-800">
                  Phone Numbers
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  <span className="font-medium">Customer Care Lines:</span>
                  <br />
                  +2349062036688, +2348130082248 <br />
                  <a
                    href="mailto:customercare@edenoasisrealty.com"
                    className="text-red-500 hover:underline"
                  >
                    customercare@lekkikoyi.com
                  </a>
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">General Enquiry:</span>
                  <br />
                  +2348130082248 <br />
                  <a
                    href="mailto:info@edenoasisrealty.com"
                    className="text-red-500 hover:underline"
                  >
                    info@lekkikoyi.com
                  </a>
                </p>
              </div>

              {/* Address Card */}
              <div className="flex-1 bg-gray-50 p-6 shadow-sm">
                <h3 className="text-lg font-normal mb-3 text-gray-800">
                    Headquarters
                </h3>
                <p className="text-sm text-gray-700">
                  Olamijuyin Avenue, Parkview Estate,
                  <br /> 
                  Ikoy, Lagos
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-700 hover:bg-green-700 hover:text-white transition"
              >
                <FaWhatsapp />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-100 text-sky-500 hover:bg-sky-500 hover:text-white transition"
              >
                <FaTwitter />
              </a> */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Right Section - Map + Form in bordered boxes */}
          <div className="flex flex-col gap-8">
            {/* Contact Form */}
            <motion.div
              variants={bounceIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex-1 border border-gray-300 py-3 px-4 rounded-lg"
            >
              <h3 className="text-xl font-normal mb-3">Send Us a Message</h3>
              <form className="space-y-4 p-5 rounded-lg">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-3 px-4 hover:bg-red-600 transition"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>

          {/* Map Section */}
            <motion.div
              variants={bounceIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex-1 border border-gray-300 py-5 px-4 rounded-lg"
            >
              <h3 className="text-xl font-normal mb-3">Location</h3>
              <div className="w-full h-64 rounded-lg overflow-hidden shadow">
                <iframe
                  title="Property Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.460414408647!2d3.4563!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52e8d1b4f3f%3A0x3e1d48a3f3aefb0!2sLekki%20Phase%201!5e0!3m2!1sen!2sng!4v1690000000000!5m2!1sen!2sng"
                  width="100%"
                  height="200%"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0 w-full h-full"
                ></iframe>
              </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
