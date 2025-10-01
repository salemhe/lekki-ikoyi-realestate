import React from "react";

const InlineNewsletter = () => {
  return (
    <div className="bg-gray-50 py-10 px-6 md:px-10 lg:px-15 text-center">
      <h2 className="text-2xl font-normal mb-4">Stay Connected</h2>
      <p className="text-gray-600 mb-6">
        Subscribe to our newsletter and never miss an update.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Subscribed!");
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="w-full sm:flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-red-500 outline-none"
        />
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 sm:rounded-lg w-full sm:w-auto"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default InlineNewsletter;
