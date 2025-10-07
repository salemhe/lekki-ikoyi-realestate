import React, { useRef, useState, useEffect } from "react";
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
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

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
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setStatus("error");
        toast.error("Failed to send message. Try again!");
      });
  };

  // Reset status after 4s
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

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
          {/* Left Section */}
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

            {/* Contact cards */}
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
                    href="mailto:Lekkikoyi@gmail.com"
                    className="text-red-500 hover:underline"
                  >
                    Lekkikoyi@gmail.com
                  </a>
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">General Enquiry:</span>
                  <br />
                  +2348130082248 <br />
                  <a
                    href="mailto:Lekkikoyi@gmail.com"
                    className="text-red-500 hover:underline"
                  >
                    Lekkikoyi@gmail.com
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
                  Ikoyi, Lagos
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition">
                <FaYoutube />
              </a>
              <a className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white transition">
                <FaInstagram />
              </a>
              <a className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-700 hover:bg-green-700 hover:text-white transition">
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>

          {/* Right Section */}
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
              <form ref={form} onSubmit={sendEmail} className="space-y-4 p-5 rounded-lg">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-3 px-4 hover:bg-red-600 transition"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : status === "success" ? (
                    <span className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                      Message Sent
                    </span>
                  ) : (
                    "Send Message"
                  )}
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

