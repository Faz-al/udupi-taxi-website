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


        <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does Udupi to Mangalore Airport taxi cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost depends on vehicle type and timing. We offer fixed and transparent pricing with no hidden charges."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take from Udupi to Mangalore Airport?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The travel time is usually around 1.5 to 2 hours, depending on traffic conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide early morning airport pickup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide 24/7 airport taxi service, including early morning and late-night pickups."
      }
    },
    {
      "@type": "Question",
      "name": "Can I book one way airport taxi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer one-way airport taxi service from Udupi and Manipal without return charges."
      }
    }
  ]
})}
</script>
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

        <p className="text-gray-700 mb-8">
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

    <img 
      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
      alt="Taxi ready for airport drop from Udupi to Mangalore airport"
      loading="lazy"
      className="rounded-2xl h-52 w-full object-cover" 
    />

    <img 
      src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80"
      alt="Passenger with luggage using airport taxi service in Udupi"
      loading="lazy"
      className="rounded-2xl h-52 w-full object-cover" 
    />

    <img 
      src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80"
      alt="Night airport taxi service from Manipal to Mangalore airport"
      loading="lazy"
      className="rounded-2xl h-52 w-full object-cover" 
    />

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
    Udupi to Mangalore Airport Taxi – Fast, Reliable & On-Time
  </motion.h2>

  <p className="text-gray-600 leading-7 mb-6">
    Booking a reliable airport taxi from Udupi or Manipal to Mangalore Airport is essential for stress-free travel. Our airport cab service ensures on-time pickup, smooth highway travel, and comfortable rides for every journey.
  </p>

  <p className="text-gray-600 leading-7 mb-6">
    We specialize in{" "}
    <strong>Udupi to Mangalore airport taxi</strong>,{" "}
    <strong>Manipal to airport taxi</strong>, and return airport pickups with 24/7 availability. Whether you have an early morning flight or late-night arrival, we guarantee punctual service.
  </p>

  <p className="text-gray-600 leading-7">
    You can also explore our{" "}
    <a href="/taxi-in-udupi" className="text-red-600 font-medium hover:underline">
      taxi service in Udupi
    </a>{" "}
    and{" "}
    <a href="/taxi-in-manipal" className="text-red-600 font-medium hover:underline">
      taxi service in Manipal
    </a>{" "}
    for local and outstation travel.
  </p>

  <p className="text-gray-600 leading-7 mt-6">
  If you are looking for a reliable Udupi to Mangalore airport taxi, we provide on-time pickup, professional drivers, and comfortable rides for every journey.
</p>

</section>


{/* FAQ SECTION */}
<section className="py-20 max-w-4xl mx-auto px-6">
  <h3 className="text-2xl font-semibold text-center mb-10">
    Frequently Asked Questions – Airport Taxi
  </h3>

  <div className="space-y-6">

    <div className="border-b pb-4">
      <h4 className="font-medium mb-2">
        How much does Udupi to Mangalore Airport taxi cost?
      </h4>
      <p className="text-gray-600 text-sm">
        The cost depends on vehicle type and timing. We offer fixed and transparent pricing with no hidden charges.
      </p>
    </div>

    <div className="border-b pb-4">
      <h4 className="font-medium mb-2">
        How long does it take from Udupi to Mangalore Airport?
      </h4>
      <p className="text-gray-600 text-sm">
        The travel time is usually around 1.5 to 2 hours, depending on traffic conditions.
      </p>
    </div>

    <div className="border-b pb-4">
      <h4 className="font-medium mb-2">
        Do you provide early morning airport pickup?
      </h4>
      <p className="text-gray-600 text-sm">
        Yes, we provide 24/7 airport taxi service, including early morning and late-night pickups.
      </p>
    </div>

    <div className="border-b pb-4">
      <h4 className="font-medium mb-2">
        Can I book one way airport taxi?
      </h4>
      <p className="text-gray-600 text-sm">
        Yes, we offer one-way airport taxi service from Udupi and Manipal without return charges.
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