import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function TaxiUdupi() {
  return (
    <div className="bg-white text-black">

      <Helmet>
        <title>Taxi in Udupi | Best Cab Service 24/7 | Airport & Outstation</title>
        <meta
          name="description"
          content="Book the best taxi in Udupi with 24/7 service. Reliable cabs for airport transfer, local travel, temple trips & outstation rides to Goa, Mangalore and more."
        />
      </Helmet>

      {/* HERO */}
      <section className="py-32 text-center bg-gray-50">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Premium Taxi Service in Udupi – 24/7 Reliable Cabs
        </motion.h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-4 text-lg leading-relaxed">
          Looking for the best taxi in Udupi? We provide professional cab services for local travel, airport transfers, temple visits, and outstation trips with clean vehicles and experienced drivers.
        </p>

        <p className="text-gray-500 max-w-xl mx-auto mb-8">
          Serving Udupi, Manipal, Malpe Beach, Kaup Beach, and nearby areas with on-time pickups and smooth travel experience.
        </p>

        <a
          href="tel:+919901159323"
          className="bg-red-600 text-white px-8 py-4 rounded-2xl text-lg hover:bg-red-700 transition shadow-md hover:shadow-xl"
        >
          Book Taxi in Udupi
        </a>
      </section>

      {/* SERVICES LIST */}
      <section className="py-28 max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-4"
        >
          Taxi Services in Udupi for Every Travel Need
        </motion.h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          From local rides to airport transfers and outstation journeys, our Udupi taxi service is designed for comfort, reliability, and on-time travel.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Local Taxi in Udupi",
              desc: "Quick and comfortable rides within Udupi including Malpe Beach, Kaup Beach, and city areas."
            },
            {
              title: "Udupi to Mangalore Airport Taxi",
              desc: "On-time airport transfer service to Mangalore International Airport with professional drivers."
            },
            {
              title: "Udupi to Goa Taxi",
              desc: "Long-distance cab service to Goa with safe driving and well-maintained vehicles."
            },
            {
              title: "Temple Trips in Udupi",
              desc: "Visit Sri Krishna Temple, Kollur Mookambika, and nearby temples with dedicated taxi service."
            },
            {
              title: "Hourly Cab Booking",
              desc: "Flexible hourly rental for meetings, shopping, and multiple stops across Udupi and Manipal."
            },
            {
              title: "Outstation Taxi Service",
              desc: "Travel to Dharmasthala, Mangalore, Bangalore and more with reliable outstation taxi service."
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="p-7 rounded-2xl border bg-gray-50 hover:bg-white shadow-sm hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
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
            className="text-3xl font-bold mb-4"
          >
            Why Choose Our Taxi Service in Udupi
          </motion.h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We focus on delivering a premium travel experience with reliable service, clean vehicles, and professional drivers for every ride.
          </p>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                title: "24/7 Availability",
                desc: "Book a taxi anytime in Udupi with quick response and confirmed rides."
              },
              {
                title: "Professional Drivers",
                desc: "Experienced and well-trained drivers ensuring safe and smooth journeys."
              },
              {
                title: "Clean Vehicles",
                desc: "Well-maintained cars for comfortable travel across short and long distances."
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden charges with clear and affordable pricing for all trips."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-6 bg-white rounded-2xl shadow"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
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
          Best Taxi Service in Udupi for Local & Airport Travel
        </motion.h2>

        <p className="text-gray-600 leading-7 mb-6">
          Udupi is one of Karnataka’s most popular travel destinations, known for its temples, beaches, and nearby attractions. Whether you are visiting Sri Krishna Temple, planning a trip to Malpe Beach, or traveling to Manipal, having a reliable taxi service in Udupi makes your journey smooth and comfortable.
        </p>

        <p className="text-gray-600 leading-7 mb-6">
          Our Udupi taxi service is trusted for airport transfers to Mangalore International Airport, outstation trips to Goa and Dharmasthala, and local rides across Udupi and Manipal. We focus on punctuality, clean vehicles, and professional drivers to deliver a premium travel experience.
        </p>

        <p className="text-gray-600 leading-7">
          If you are looking for the best taxi in Udupi with affordable pricing and reliable service, we ensure every ride is comfortable, safe, and on time.
        </p>

      </section>

      {/* CTA */}
      <section className="py-28 bg-black text-white text-center">

        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6"
        >
          Book Your Taxi in Udupi Today
        </motion.h3>

        <p className="text-gray-300 mb-8">
          Quick booking • Reliable drivers • Comfortable rides
        </p>

        <a
          href="tel:+919901159323"
          className="bg-red-600 px-10 py-4 rounded-2xl text-lg hover:bg-red-700 transition shadow-lg"
        >
          Call Now to Book
        </a>

      </section>

    </div>
  );
}