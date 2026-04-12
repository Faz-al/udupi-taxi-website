import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function TaxiManipal() {
  
  return (
    
    

    <div className="bg-white text-black">
      
      <Helmet>
  <title>Taxi in Manipal | Affordable Cab Service</title>
  <meta
    name="description"
    content="Reliable taxi service in Manipal for students and travelers. Book cab now."
  />
</Helmet>

      {/* HERO */}
      <section className="py-32 text-center bg-gray-50">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Taxi Service in Manipal
        </motion.h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Book reliable taxi service in Manipal for local travel, college trips, airport transfers and outstation journeys. Available 24/7 with professional drivers.
        </p>

        <a href="tel:+919901159323" className="bg-red-600 text-white px-8 py-4 rounded-2xl text-lg">
          📞 Book Taxi Now
        </a>
      </section>

      {/* SERVICES */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Taxi Services in Manipal
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Local Taxi in Manipal",
            "Manipal to Airport Taxi",
            "Manipal to Udupi Taxi",
            "College & Hostel Trips",
            "Hourly Rentals",
            "Outstation Travel",
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border bg-gray-50">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-black text-white text-center">
        <h3 className="text-3xl font-bold mb-6">
          Book Taxi in Manipal Now
        </h3>

        <a href="tel:+919901159323" className="bg-red-600 px-10 py-4 rounded-2xl text-lg">
          Call Now
        </a>
      </section>

    </div>
  );
}