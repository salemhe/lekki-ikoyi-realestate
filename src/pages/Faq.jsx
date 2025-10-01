import React, { useState } from "react";
import backgroundImage from "../assets/images/about-header.jpg";
import Navbar from "../components/layout/Navbar";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

// Motion variants
const bounceIn = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I book a property viewing?",
      answer:
        "You can book a property viewing by contacting our customer care lines or filling out the contact form. Our agents will reach out to schedule a convenient time.",
    },
    {
      question: "Do you provide property management services?",
      answer:
        "Yes, we offer comprehensive property management services including tenant screening, rent collection, and maintenance oversight.",
    },
    {
      question: "What documents are required to purchase a property?",
      answer:
        "Typically, you’ll need valid identification, proof of funds, and relevant agreements. Our legal team will guide you through every step of the process.",
    },
    {
      question: "Are international clients eligible to buy properties?",
      answer:
        "Absolutely. We assist international clients with acquiring properties in Lagos, including guidance on regulatory compliance and secure transactions.",
    },
    {
      question: "How do I know if a property is verified?",
      answer:
        "All our listed properties are thoroughly vetted and come with verified documentation. You can always request to see supporting documents before making a commitment.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* Hero / Banner */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-blue-400/40 flex items-start">
          <h1 className="text-4xl md:text-5xl font-light text-white mt-24 px-6 drop-shadow-md">
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.h2
          variants={bounceIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-2xl mb-8 text-center font-light"
        >
          We’ve compiled answers to common questions to help guide your property
          journey.
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={bounceIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-gray-800 font-medium focus:outline-none"
              >
                {faq.question}
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-red-500" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
