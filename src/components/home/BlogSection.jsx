import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogPosts from "../../data/blogContent";

const BlogSection = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 md:px-12 lg:px-32">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-normal text-gray-900 mb-4">
          From the Blog
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Fresh stories, ideas, and insights.
        </p>
      </div>

      {/* Stacking scroll effect */}
      <div className="relative">
        {blogPosts.slice(0, 6).map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            className={`
              sticky top-28
              z-[${10 - index}]
              bg-white shadow-xl rounded-2xl overflow-hidden
              border-2 border-gray-100
              mb-10 h-auto
            `}
            style={{
              transform: `translateY(${index * 10}px)`, // stacking offset
            }}
          >
            <Link
              to={`/blog/${post.id}`}
              className="flex items-stretch group w-full"
            >
              {/* Image (fixed ratio) */}
              <div className="w-28 sm:w-36 md:w-52 flex-shrink-0">
                <div className="h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col justify-between flex-1 p-4 sm:p-5 md:p-6">
                <div>
                  <span className="text-xs uppercase tracking-wide text-red-500 font-medium">
                    {post.category}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mt-2 mb-2 group-hover:text-red-500 transition">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 sm:line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400 mt-4">
                  <span>{post.date}</span>
                  <span className="font-medium text-gray-700">
                    By {post.author}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;


