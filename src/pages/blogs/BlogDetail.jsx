import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../sanity";
import { urlFor } from "../../imageUrl";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PortableTextRenderer from "../../components/PortableTextRenderer";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "blog" && slug.current == $slug][0]`, { slug })
      .then((data) => setBlog(data));
  }, [slug]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (!blog) return <div className="p-20 text-center">Loading...</div>;

  return (
    <>
      <Helmet>
        <title>{blog.metaTitle || blog.title}</title>
        <meta
          name="description"
          content={blog.metaDescription || "Taxi services in Udupi"}
        />
      </Helmet>

      <div className="bg-white">

        {/* HERO */}
        <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">

          {blog.image && (
            <img
              src={urlFor(blog.image).width(1600).url()}
              alt={blog.title}
              className="absolute inset-0 w-full h-full object-cover scale-105"
            />
          )}

          {/* Premium gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="relative z-10 max-w-4xl mx-auto px-6 h-full flex flex-col justify-center"
          >
            <motion.h1
  variants={fadeUp}
  className="text-4xl md:text-6xl font-semibold text-white leading-tight"
>
  {blog.title}
</motion.h1>

{/* DATE */}
<motion.p
  variants={fadeUp}
  className="text-gray-400 mt-3 text-sm"
>
  {blog._createdAt &&
  new Date(blog._createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}
</motion.p>

<motion.p
  variants={fadeUp}
  className="text-gray-300 mt-2 text-sm"
>
  Travel insights • Premium taxi service
</motion.p>

<div className="w-16 h-[2px] bg-white/30 mt-4"></div>
          </motion.div>
        </div>

        {/* CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto px-6 py-20"
        >

          {/* Article */}
          <div>

            {Array.isArray(blog.content) ? (
  <PortableTextRenderer value={blog.content} />
) : (
  <p className="text-gray-700 text-lg">{blog.content}</p>
)}

          </div>

          {/* Divider */}
          <div className="my-16 border-t" />

          {/* Value Section (SEO + Trust) */}
          <div className="grid md:grid-cols-3 gap-8 text-sm">

            <div>
              <h3 className="font-semibold mb-2">Reliable Travel</h3>
              <p className="text-gray-500">
                Trusted taxi services across Udupi with professional drivers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-500">
                Book rides anytime with quick response and smooth service.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Premium Experience</h3>
              <p className="text-gray-500">
                Clean vehicles and comfortable rides for every journey.
              </p>
            </div>

          </div>

          {/* CTA BLOCK */}
          <div className="mt-20 bg-black text-white rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center gap-6">

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Need a ride in Udupi?
              </h3>
              <p className="text-gray-300 text-sm">
                Book a premium taxi now and travel stress-free.
              </p>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919901159323"
              className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium"
            >
              Call Now
            </motion.a>

          </div>

        </motion.div>

      </div>
    </>
  );
}