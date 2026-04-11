import { useEffect, useState } from "react";
import { client } from "../../sanity";
import { urlFor } from "../../imageUrl";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "blog"]`)
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  // Animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (!blogs.length) {
    return <div className="p-20 text-center">Loading...</div>;
  }

  const [featured, ...rest] = blogs;

  return (
    <div className="bg-white py-32 px-6">

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-semibold tracking-tight mb-4">
          Insights & Travel Stories
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Explore travel tips, taxi insights, and premium ride experiences.
        </p>
      </div>

      {/* FEATURED BLOG */}
      {featured && (
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-6xl mx-auto mb-20"
        >
          <Link to={`/blogs/${featured.slug?.current}`}>

            <div className="group relative rounded-3xl overflow-hidden">

              {featured.image && (
                <img
                  src={urlFor(featured.image).width(1200).url()}
                  alt={featured.title}
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition duration-700"
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="absolute bottom-0 p-10 text-white max-w-2xl">
                <h2 className="text-3xl font-semibold mb-3">
                  {featured.title}
                </h2>

                <p className="text-gray-200 text-sm line-clamp-2">
                  {featured.content?.[0]?.children?.[0]?.text || "Read more..."}
                </p>
              </div>

            </div>

          </Link>
        </motion.div>
      )}

      {/* BLOG GRID */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >

        {rest.map((blog) => (
          <motion.div key={blog._id} variants={fadeUp} whileHover={{ y: -5 }}>
            <Link to={`/blogs/${blog.slug?.current}`} className="group block">

              <div className="rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-500 bg-white">

                {blog.image && (
                  <div className="overflow-hidden">
                    <img
                      src={urlFor(blog.image).width(600).url()}
                      alt={blog.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>
                )}

                <div className="p-6">

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-red-600 transition">
                    {blog.title}
                  </h3>

                  <p className="text-gray-500 text-sm line-clamp-2">
                    {blog.content?.[0]?.children?.[0]?.text || "Read more..."}
                  </p>

                </div>

              </div>

            </Link>
          </motion.div>
        ))}

      </motion.div>

    </div>
  );
}