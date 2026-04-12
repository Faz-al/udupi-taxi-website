import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function AirportTaxi() {
  return (
    <div className="bg-white text-black">

      <Helmet>
        <title>Udupi to Mangalore Airport Taxi | 24/7 Airport Cab Service</title>
        <meta
          name="description"
          content="Book Udupi to Mangalore Airport taxi with reliable 24/7 service. On-time pickup, clean cars, and affordable pricing from Udupi, Manipal, and nearby areas."
        />
      </Helmet>

      {/* HERO */}
      <section className="px-6 py-20 md:py-28 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Udupi to Mangalore Airport Taxi – Reliable 24/7 Service
        </motion.h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-4 text-lg leading-relaxed">
          Looking for a reliable airport taxi in Udupi or Manipal? We provide on-time airport transfers to Mangalore International Airport with professional drivers and comfortable vehicles.
        </p>

        <p className="text-gray-500 mb-8">
          Serving Udupi, Manipal, and nearby areas with early morning pickups and smooth travel experience.
        </p>

        <a
          href="tel:+919901159323"
          className="bg-red-600 text-white px-8 py-4 rounded-2xl text-lg hover:bg-red-700 transition shadow-md hover:shadow-xl"
        >
          Book Airport Taxi Now
        </a>
      </section>

      {/* IMAGE STRIP */}
      <section className="px-6 pb-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df" className="rounded-2xl h-52 w-full object-cover" />
          <img src="https://images.unsplash.com/photo-1502920917128-1aa500764b6c" className="rounded-2xl h-52 w-full object-cover" />
          <img src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92" className="rounded-2xl h-52 w-full object-cover" />
        </div>
      </section>

      {/* SERVICES / ROUTES */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-4"
        >
          Airport Taxi Routes from Udupi & Manipal
        </motion.h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We offer reliable airport cab services from multiple locations with fixed pricing and on-time pickup.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Udupi to Mangalore Airport Taxi",
              desc: "Direct airport transfer with timely pickup and smooth highway travel."
            },
            {
              title: "Manipal to Airport Taxi",
              desc: "Quick and reliable cab service from MIT, hostels, and KMC Hospital."
            },
            {
              title: "Bangalore to Mangalore Airport Drop",
              desc: "Long-distance airport transfer with safe and comfortable journey."
            },
            {
              title: "Early Morning Airport Pickup",
              desc: "Available for early flights with guaranteed on-time arrival."
            },
            {
              title: "Return Airport Pickup",
              desc: "Pickup from Mangalore Airport to Udupi or Manipal anytime."
            },
            {
              title: "One Way Airport Taxi",
              desc: "Affordable one-way taxi service without return charges."
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl border bg-gray-50 hover:bg-white shadow-sm hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-6 py-20 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-4"
          >
            Why Choose Our Airport Taxi Service
          </motion.h2>

          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We understand airport travel requires punctuality and reliability. Our service ensures stress-free travel every time.
          </p>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "On-Time Pickup",
              "Flight Tracking Support",
              "Professional Drivers",
              "Clean Vehicles",
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow">
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6"
        >
          Best Airport Taxi from Udupi & Manipal to Mangalore Airport
        </motion.h2>

        <p className="text-gray-600 leading-7 mb-6">
          Traveling to Mangalore International Airport from Udupi or Manipal requires a reliable taxi service that ensures timely arrival. Our airport taxi service is designed to provide comfortable and stress-free travel with professional drivers and well-maintained vehicles.
        </p>

        <p className="text-gray-600 leading-7 mb-6">
          Whether you need an early morning pickup, late-night drop, or return airport transfer, we offer 24/7 availability with transparent pricing. Our taxi service covers Udupi, Manipal, and nearby areas, making it easy to book a cab anytime.
        </p>

        <p className="text-gray-600 leading-7">
          If you are searching for a reliable Udupi to Mangalore airport taxi or Manipal airport cab service, we ensure every ride is safe, comfortable, and on time.
        </p>

      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-black text-white text-center">

        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6"
        >
          Book Your Airport Taxi Now
        </motion.h3>

        <p className="text-gray-300 mb-8">
          Fast booking • On-time pickup • 24/7 service
        </p>

        <a
          href="tel:+919901159323"
          className="bg-red-600 px-10 py-4 rounded-2xl text-lg hover:bg-red-700 transition shadow-lg"
        >
          Call Now
        </a>

      </section>

    </div>
  );
}