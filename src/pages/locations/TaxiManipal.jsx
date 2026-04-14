import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function TaxiManipal() {
  return (
    <div className="bg-white text-black">
      
      <Helmet>
        <title>Taxi in Manipal | 24/7 Cab Service | Bangalore & Airport Taxi</title>
        <meta
          name="description"
          content="Book the best taxi service in Manipal for airport transfer, Bangalore, Dharmasthala and local travel. 24/7 reliable cab service for students, hospitals and travelers."
        />

        <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is taxi service available for students in Manipal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide affordable and reliable taxi services for students, including college and hostel trips."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide taxi for KMC Hospital visits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide taxi services for hospital visits, including KMC Manipal, with priority bookings."
      }
    },
    {
      "@type": "Question",
      "name": "Can I book taxi from Manipal to Bangalore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comfortable and safe taxi service from Manipal to Bangalore with experienced drivers."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide airport taxi from Manipal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide Manipal to Mangalore airport taxi service with on-time pickup and 24/7 availability."
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
          Premium Taxi Service in Manipal – 24/7 Reliable Cabs
        </motion.h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-4 text-lg leading-relaxed">
          Looking for the best taxi in Manipal? We provide reliable cab services for students, hospital visits, airport transfers, and outstation travel with clean vehicles and professional drivers.
        </p>

        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          Serving MIT, KMC Hospital, Udupi, and nearby areas with on-time pickup and comfortable travel.
        </p>

        <a
          href="tel:+919901159323"
          className="bg-red-600 text-white px-8 py-4 rounded-2xl text-lg hover:bg-red-700 transition shadow-md hover:shadow-xl"
        >
          Book Taxi in Manipal
        </a>
      </section>

      {/* IMAGE STRIP */}
<section className="py-16 max-w-6xl mx-auto px-6">
  <div className="grid md:grid-cols-3 gap-6">

    <img 
      src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
      alt="Taxi service in Manipal near MIT campus"
      loading="lazy"
      className="rounded-2xl object-cover h-56 w-full" 
    />

    <img 
      src="https://images.unsplash.com/photo-1576765608866-5b51046452be"
      alt="Cab service in Manipal for KMC Hospital patients and visitors"
      loading="lazy"
      className="rounded-2xl object-cover h-56 w-full" 
    />

    <img 
      src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
      alt="Outstation taxi service from Manipal to Bangalore and nearby cities"
      loading="lazy"
      className="rounded-2xl object-cover h-56 w-full" 
    />

  </div>
</section>

      {/* SERVICES */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-4"
        >
          Taxi Services in Manipal for Every Travel Need
        </motion.h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          From quick local rides to long-distance journeys, our Manipal taxi service is designed for students, professionals, and travelers.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Local Taxi in Manipal",
              desc: "Fast and comfortable rides across MIT, hostels, Udupi, and nearby areas."
            },
            {
              title: "Manipal to Mangalore Airport Taxi",
              desc: "Reliable airport transfer with on-time pickup and smooth travel experience."
            },
            {
              title: "Manipal to Bangalore Taxi",
              desc: "Safe and comfortable long-distance taxi service to Bangalore with professional drivers."
            },
            {
              title: "Manipal to Dharmasthala Taxi",
              desc: "Convenient temple trip with flexible timings and comfortable vehicles."
            },
            {
              title: "College & Hospital Trips",
              desc: "Perfect for MIT students and KMC hospital visits with reliable daily transport."
            },
            {
              title: "Outstation Taxi Service",
              desc: "Travel to Goa, Mangalore, Udupi and beyond with trusted taxi service."
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

      {/* WHY CHOOSE */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-4"
          >
            Why Choose Our Taxi Service in Manipal
          </motion.h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We focus on safe, reliable, and comfortable travel for students, patients, and travelers in Manipal.
          </p>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                title: "24/7 Availability",
                desc: "Book anytime with quick confirmations and reliable service."
              },
              {
                title: "Student Friendly",
                desc: "Affordable and reliable rides for daily college and hostel travel."
              },
              {
                title: "Hospital Priority",
                desc: "Trusted transport for KMC hospital visits and medical travel."
              },
              {
                title: "Clean Vehicles",
                desc: "Well-maintained cars ensuring comfort and safety."
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
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
    Best Taxi Service in Manipal for Students, Hospitals & Travel
  </motion.h2>

  <p className="text-gray-600 leading-7 mb-6">
    Manipal is a major educational and medical hub, home to MIT and KMC Hospital. Whether you are a student, visitor, or patient, having a reliable taxi service in Manipal ensures smooth daily travel.
  </p>

  <p className="text-gray-600 leading-7 mb-6">
    We offer quick access to nearby areas through our{" "}
    <a href="/taxi-in-udupi" className="text-red-600 font-medium hover:underline">
      taxi service in Udupi
    </a>{" "}
    and also provide reliable{" "}
    <a href="/airport-taxi" className="text-red-600 font-medium hover:underline">
      Manipal to Mangalore airport taxi
    </a>{" "}
    for hassle-free airport transfers.
  </p>

  <p className="text-gray-600 leading-7">
    Our services also include long-distance taxi from Manipal to Bangalore, Dharmasthala, and Goa, making us a complete travel solution for all your needs.
  </p>

  <p className="text-gray-600 leading-7 mt-6">
  If you are searching for the best taxi in Manipal, our service offers reliable, safe, and comfortable travel for students, hospital visits, and outstation trips.
</p>

</section>



{/* FAQ SECTION */}
<section className="py-20 max-w-4xl mx-auto px-6">
  <h3 className="text-2xl font-semibold text-center mb-10">
    Frequently Asked Questions – Taxi in Manipal
  </h3>

  <div className="space-y-6">

    <div className="border-b pb-4">
      <h4 className="font-medium mb-2">
        Is taxi service available for students in Manipal?
      </h4>
      <p className="text-gray-600 text-sm">
        Yes, we provide affordable and reliable taxi services for students, including college and hostel trips.
      </p>
    </div>

    <div className="border-b pb-4">
      <h4 className="font-medium mb-2">
        Do you provide taxi for KMC Hospital visits?
      </h4>
      <p className="text-gray-600 text-sm">
        Yes, we provide taxi services for hospital visits, including KMC Manipal, with priority bookings.
      </p>
    </div>

    <div className="border-b pb-4">
      <h4 className="font-medium mb-2">
        Can I book taxi from Manipal to Bangalore?
      </h4>
      <p className="text-gray-600 text-sm">
        Yes, we provide comfortable and safe taxi service from Manipal to Bangalore with experienced drivers.
      </p>
    </div>

    <div className="border-b pb-4">
      <h4 className="font-medium mb-2">
        Do you provide airport taxi from Manipal?
      </h4>
      <p className="text-gray-600 text-sm">
        Yes, we provide Manipal to Mangalore airport taxi service with on-time pickup and 24/7 availability.
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
          Book Your Taxi in Manipal Today
        </motion.h3>

        <p className="text-gray-300 mb-8">
          Fast booking • Safe travel • Professional drivers
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
