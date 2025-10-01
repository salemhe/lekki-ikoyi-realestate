import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Newsletter = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("newsletter_seen");
    if (seen) return; //  don't show again

    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Prevent background scroll when popup is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem("newsletter_seen", "true"); //  remember dismissal
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-xl w-[90%] max-w-md p-7 text-center relative"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-2">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-5">
              Get the latest updates, exclusive offers, and insider tips
              delivered straight to your inbox.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed!");
                handleClose();
              }}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-red-500 outline-none"
              />
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Newsletter;

