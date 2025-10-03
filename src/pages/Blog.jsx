// // src/pages/BlogPage.jsx
// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import Navbar from "../components/layout/Navbar";
// import blogPosts from "../data/blogContent";
// import { motion } from "framer-motion";

// const bounceIn = {
//   hidden: { opacity: 0, y: 40 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const BlogPage = () => {
//   const { id } = useParams();
//   const post = blogPosts.find((p) => p.id === parseInt(id));
//   const relatedPosts = blogPosts.filter((p) => p.id !== post.id);

//   if (!post) return <div className="p-10 text-center">Post not found</div>;

//   return (
//     <div className="bg-white text-gray-800">
//       <Navbar />

//       {/* Hero */}
//       <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}>
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//           <h1 className="text-4xl md:text-5xl font-light text-white drop-shadow-md text-center px-4">
//             {post.title}
//           </h1>
//         </div>
//       </div>

//       {/* Blog Content */}
//       <div className="max-w-4xl mx-auto px-6 py-16">
//         <motion.div
//           variants={bounceIn}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           <div className="mb-6 text-sm text-gray-500 flex justify-between">
//             <span>By {post.author}</span>
//             <span>{post.date}</span>
//           </div>
//           <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
//             {post.content}
//           </div>
//         </motion.div>
//       </div>

//       {/* Related Posts */}
//       <div className="bg-gray-50 py-16">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-2xl font-light mb-8">Related Posts</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {relatedPosts.map((rp) => (
//               <Link
//                 to={`/blog/${rp.id}`}
//                 key={rp.id}
//                 className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
//               >
//                 <img src={rp.image} alt={rp.title} className="w-full h-44 object-cover" />
//                 <div className="p-5">
//                   <span className="text-xs uppercase text-red-500">
//                     {rp.category}
//                   </span>
//                   <h3 className="text-lg font-semibold mt-2 mb-2">{rp.title}</h3>
//                   <p className="text-sm text-gray-600">{rp.excerpt}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPage;



// src/pages/BlogPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/blogContent";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
  }),
};

const BlogPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id);

  if (!post) return <div className="p-10 text-center">Post not found</div>;

  return (
    <div className="bg-white text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center px-6 py-24">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-6xl font-serif leading-tight text-gray-900"
          >
            {post.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-4 text-sm text-gray-500"
          >
            By {post.author} • {post.date}
          </motion.p>
        </div>
      </section>

      {/* Content Split Layout */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-4 gap-12">
        {/* Main Content */}
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-3 prose prose-lg prose-gray max-w-none"
        >
          {post.content}
        </motion.article>

        {/* Side Meta / Info */}
        <aside className="hidden md:block space-y-8">
          <div className="sticky top-28 space-y-4 text-sm text-gray-600">
            <div>
              <h4 className="text-gray-900 font-semibold mb-2">Category</h4>
              <p>{post.category}</p>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-2">Published</h4>
              <p>{post.date}</p>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-2">Author</h4>
              <p>{post.author}</p>
            </div>
          </div>
        </aside>
      </section>

      {/* Related Posts Carousel */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-10 text-gray-900 text-center">
            Related Reads
          </h2>

          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {relatedPosts.slice(0, 6).map((rp, i) => (
              <motion.div
                key={rp.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="flex-none w-80 bg-white rounded-2xl shadow hover:shadow-xl transition"
              >
                <Link to={`/blog/${rp.id}`} className="block">
                  <div className="h-48 overflow-hidden rounded-t-2xl">
                    <img
                      src={rp.image}
                      alt={rp.title}
                      className="w-full h-full object-cover transform transition duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-wide text-red-600 font-semibold">
                      {rp.category}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900 line-clamp-2">
                      {rp.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                      {rp.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

