import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function TaxiUdupi() {
  return (
    <div className="bg-white text-black">

      <Helmet>
        <title>Taxi in Udupi | 24/7 Cab Service | Airport & Outstation Taxi</title>
        <meta
          name="description"
          content="Book the best taxi in Udupi with 24/7 service. Reliable cabs for airport transfer, local travel, temple trips & outstation rides to Goa, Mangalore and more."
        />

        <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the cost of taxi in Udupi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Taxi fares in Udupi depend on distance and vehicle type. We offer affordable and transparent pricing with no hidden charges."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide taxi for temple trips in Udupi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide taxi services for temple visits including Sri Krishna Temple, Kollur Mookambika, and nearby destinations."
      }
    },
    {
      "@type": "Question",
      "name": "Is taxi service available 24/7 in Udupi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our taxi service in Udupi is available 24/7, including early morning and late-night bookings."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide outstation taxi from Udupi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide outstation taxi service from Udupi to destinations like Goa, Dharmasthala, Bangalore, and more."
      }
    }
  ]
})}
</script>
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

        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          Serving Udupi, Manipal, Malpe Beach, Kaup Beach, and nearby areas with on-time pickups and smooth travel experience.
        </p>

        <a
          href="tel:+919901159323"
          className="bg-red-600 text-white px-8 py-4 rounded-2xl text-lg hover:bg-red-700 transition shadow-md hover:shadow-xl"
        >
          Book Taxi in Udupi
        </a>
      </section>

      {/* IMAGE STRIP */}
<section className="py-16 max-w-6xl mx-auto px-6">
  <div className="grid md:grid-cols-3 gap-6">

    <img 
      src="https://images.unsplash.com/photo-1624454002302-6cdd3a4f9a8e"
      alt="Taxi service in Udupi near Sri Krishna Temple"
      loading="lazy"
      className="rounded-2xl object-cover h-56 w-full" 
    />

    <img 
      src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944"
      alt="Cab service in Udupi near Malpe Beach"
      loading="lazy"
      className="rounded-2xl object-cover h-56 w-full" 
    />

    <img 
      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
      alt="Outstation taxi service from Udupi to nearby destinations"
      loading="lazy"
      className="rounded-2xl object-cover h-56 w-full" 
    />

  </div>
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
    Best Taxi Service in Udupi for Local Travel & Outstation Trips
  </motion.h2>

  <p className="text-gray-600 leading-7 mb-6">
    Udupi is known for its temples, beaches, and nearby travel destinations. Whether you're visiting Sri Krishna Temple, Malpe Beach, or planning a trip to nearby places, having a reliable taxi in Udupi makes your journey comfortable and stress-free.
  </p>

  <p className="text-gray-600 leading-7 mb-6">
    Our taxi service in Udupi covers local travel, temple trips, and outstation routes including Goa, Dharmasthala, and Bangalore. For airport transfers, you can book our dedicated{" "}
    <a href="/airport-taxi" className="text-red-600 font-medium hover:underline">
      airport taxi service from Udupi
    </a>{" "}
    with on-time pickup and smooth travel.
  </p>

  <p className="text-gray-600 leading-7">
    We also provide quick access to nearby areas like{" "}
    <a href="/taxi-in-manipal" className="text-red-600 font-medium hover:underline">
      Manipal taxi service
    </a>{" "}
    with clean vehicles, professional drivers, and reliable service.
  </p>

  <p className="text-gray-600 leading-7 mt-6">
  If you are searching for the best taxi in Udupi, our service ensures reliable, safe, and comfortable travel every time.
</p>

</section>



{/* FAQ SECTION */}
<section className="py-20 max-w-4xl mx-auto px-6">
  <h3 className="text-2xl font-semibold text-center mb-10">
    Frequently Asked Questions – Taxi in Udupi
  </h3>

  <div className="space-y-6">

    <div className="border-b pb-4">
      <h4 className="font-medium mb-2">
        What is the cost of taxi in Udupi?
      </h4>
      <p className="text-gray-600 text-sm">
        Taxi fares in Udupi depend on distance and vehicle type. We offer affordable and transparent pricing with no hidden charges.
      </p>
    </div>

    <div className="border-b pb-4">
      <h4 className="font-medium mb-2">
        Do you provide taxi for temple trips in Udupi?
      </h4>
      <p className="text-gray-600 text-sm">
        Yes, we provide taxi services for temple visits including Sri Krishna Temple, Kollur Mookambika, and nearby destinations.
      </p>
    </div>

    <div className="border-b pb-4">
      <h4 className="font-medium mb-2">
        Is taxi service available 24/7 in Udupi?
      </h4>
      <p className="text-gray-600 text-sm">
        Yes, our taxi service in Udupi is available 24/7, including early morning and late-night bookings.
      </p>
    </div>

    <div className="border-b pb-4">
      <h4 className="font-medium mb-2">
        Do you provide outstation taxi from Udupi?
      </h4>
      <p className="text-gray-600 text-sm">
        Yes, we provide outstation taxi service from Udupi to destinations like Goa, Dharmasthala, Bangalore, and more.
      </p>
    </div>

  </div>
</section>




{/* RELATED SERVICES */}
<section className="py-20 max-w-5xl mx-auto px-6 text-center">
  <h3 className="text-2xl font-semibold mb-8">
    Explore Our Taxi Services
  </h3>

  <div className="flex flex-wrap justify-center gap-4">

    <a href="/taxi-in-udupi" className="px-6 py-3 border rounded-full hover:bg-gray-100 transition">
      Taxi in Udupi
    </a>

    <a href="/taxi-in-manipal" className="px-6 py-3 border rounded-full hover:bg-gray-100 transition">
      Taxi in Manipal
    </a>

    <a href="/airport-taxi" className="px-6 py-3 border rounded-full hover:bg-gray-100 transition">
      Airport Taxi Service
    </a>

  </div>
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