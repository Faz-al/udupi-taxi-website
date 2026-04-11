import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function TaxiUdupi() {

  

  return (
    
    <div className="bg-white text-black">

      <Helmet>
  <title>Taxi in Udupi | Best Cab Service 24/7</title>
  <meta
    name="description"
    content="Book taxi in Udupi with affordable rates. 24/7 cab service for local, airport and outstation trips."
  />
</Helmet>

      {/* HERO */}
      <section className="py-32 text-center bg-gray-50">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Taxi Service in Udupi
        </motion.h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Looking for a reliable taxi in Udupi? We provide 24/7 cab services for local travel, airport transfers, and outstation trips with professional drivers and clean vehicles.
        </p>

        <a
          href="tel:+919000000000"
          className="bg-red-600 text-white px-8 py-4 rounded-2xl text-lg hover:bg-red-700 transition"
        >
          📞 Book Taxi Now
        </a>
      </section>

      {/* SERVICES LIST */}
      <section className="py-28 max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Taxi Services in Udupi
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Local Taxi in Udupi",
            "Udupi to Mangalore Airport Taxi",
            "Udupi to Goa Taxi",
            "Temple Trips in Udupi",
            "Hourly Cab Booking",
            "Outstation Taxi Service",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border bg-gray-50 hover:bg-white shadow-sm hover:shadow-lg transition"
            >
              {item}
            </motion.div>
          ))}

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12"
          >
            Why Choose Our Udupi Taxi Service
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "24/7 Availability",
              "Professional Drivers",
              "Clean Vehicles",
              "Affordable Pricing",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-6 bg-white rounded-2xl shadow"
              >
                {item}
              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* SEO CONTENT */}
      <section className="py-28 max-w-4xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6"
        >
          Best Taxi Service in Udupi
        </motion.h2>

        <p className="text-gray-600 leading-7">
          Our taxi service in Udupi is trusted by hundreds of customers for reliable and comfortable travel. We offer airport taxi to Mangalore Airport, outstation trips to Goa and Dharmasthala, and local rides across Udupi and Manipal. With experienced drivers, clean vehicles and transparent pricing, we ensure a smooth travel experience every time.
        </p>

      </section>

      {/* CTA */}
      <section className="py-28 bg-black text-white text-center">

        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6"
        >
          Book Your Taxi in Udupi Now
        </motion.h3>

        <a
          href="tel:+919000000000"
          className="bg-red-600 px-10 py-4 rounded-2xl text-lg hover:bg-red-700 transition"
        >
          Call Now
        </a>

      </section>

    </div>
  );
}