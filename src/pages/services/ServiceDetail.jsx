import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../lib/sanity";
import { urlFor } from "../../imageUrl";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function ServiceDetail() {
  const { slug } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug })
      .then((data) => setService(data));
  }, [slug]);

  // Animation Variant
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (!service) {
    return <div className="p-20 text-center">Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>{service.metaTitle || service.title}</title>
        <meta
          name="description"
          content={service.metaDescription || "Taxi service"}
        />
      </Helmet>

      <div className="bg-white">

        {/* HERO */}
        <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">

          {service.image && (
            <img
              src={urlFor(service.image).width(1600).url()}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Animated Content */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center"
          >

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-semibold text-white leading-tight max-w-3xl"
            >
              {service.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-200 mt-6 max-w-xl text-lg"
            >
              Premium taxi service designed for comfort, reliability, and class.
            </motion.p>

            <motion.a
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+919901159323"
              className="mt-8 w-fit bg-white text-black px-8 py-4 rounded-full text-sm font-medium"
            >
              Book Now →
            </motion.a>

          </motion.div>
        </div>

        {/* MAIN CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-5xl mx-auto px-6 py-20"
        >

          {/* About */}
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">
              About this service
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Divider */}
          <div className="my-16 border-t" />

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="font-semibold mb-2">Professional Drivers</h3>
              <p className="text-gray-500 text-sm">
                Experienced and verified chauffeurs ensuring safe and smooth travel.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="font-semibold mb-2">On-Time Pickup</h3>
              <p className="text-gray-500 text-sm">
                Reliable scheduling with punctual service every time.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="font-semibold mb-2">Premium Comfort</h3>
              <p className="text-gray-500 text-sm">
                Clean, well-maintained vehicles for a luxury experience.
              </p>
            </motion.div>

          </div>

          {/* CTA */}
          <div className="mt-20 bg-black text-white rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center gap-6">

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Ready to book your ride?
              </h3>
              <p className="text-gray-300 text-sm">
                Experience premium travel with our trusted service.
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