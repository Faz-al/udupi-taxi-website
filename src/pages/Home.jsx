import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Home() {


    const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I book a taxi in Udupi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book a taxi by calling us or messaging on WhatsApp for quick confirmation."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide airport taxi service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide reliable airport taxi service to and from Mangalore Airport."
      }
    },
    {
      "@type": "Question",
      "name": "Are your taxi services available 24/7?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our taxi services are available 24/7 including early morning and late night bookings."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer outstation trips from Udupi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide outstation taxi services to Goa, Dharmasthala, Mangalore and nearby destinations."
      }
    },
    {
      "@type": "Question",
      "name": "What types of cars are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer Sedan, SUV and premium cars based on your travel needs."
      }
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Udupi Tours and Travels",
  "image": "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  "telephone": "+91 9000000000",
  "areaServed": {
    "@type": "Place",
    "name": "Udupi, Manipal, Karnataka"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Udupi",
    "addressRegion": "Karnataka",
    "addressCountry": "India"
  },
  "url": "https://yourdomain.com",
  "priceRange": "₹₹",
  "availableLanguage": ["English", "Hindi", "Kannada"]
};


  return (
  <>
   <Helmet>
  {/* FAQ Schema */}
  <script type="application/ld+json">
    {JSON.stringify(faqSchema)}
  </script>

  {/* Local Business Schema */}
  <script type="application/ld+json">
    {JSON.stringify(localBusinessSchema)}
  </script>
</Helmet>

    <div className="bg-white text-black font-[Inter] overflow-x-hidden relative">
        
  {/* subtle background gradient */}
  <div className="fixed inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white"></div>

      {/* NAVBAR */}
    

      {/* HERO - PREMIUM */}
<section className="relative h-[95vh] flex items-center justify-center text-white overflow-hidden">

  {/* Background Image */}
  <motion.img
    initial={{ scale: 1.15 }}
    animate={{ scale: 1 }}
    transition={{ duration: 2 }}
    src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
    className="absolute w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute w-full h-full bg-black/70"></div>

  {/* Gradient Glow */}
  <div className="absolute w-full h-full bg-gradient-to-b from-black/40 via-black/60 to-black/90"></div>

  {/* Content */}
  <div className="relative z-10 max-w-5xl px-6 text-center">

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
    >
      Travel Udupi in Comfort & Style
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7 }}
      className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
    >
      Premium taxi service for airport transfers, outstation trips, and family travel — trusted by hundreds of happy customers.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.7 }}
      className="flex flex-col md:flex-row gap-4 justify-center"
    >
      <a
        href="tel:+919000000000"
        className="bg-red-600 hover:bg-red-700 hover:scale-105 transition px-10 py-4 rounded-2xl text-lg font-semibold shadow-2xl"
      >
        📞 Get Taxi Now
      </a>

      <a
        href="https://wa.me/919000000000"
        className="border border-white/40 hover:bg-white hover:text-black transition px-10 py-4 rounded-2xl text-lg"
      >
        Chat on WhatsApp
      </a>
    </motion.div>

    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
  className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-300"
>
  <span>✔ 500+ happy customers</span>
  <span>✔ 4.9★ rating</span>
  <span>✔ 24/7 available</span>
</motion.div>

  </div>
</section>

      {/* TRUST BAR */}
      {/* TRUST + WHY US - PREMIUM */}
<section className="py-28 bg-white">

  {/* TRUST STATS */}
  <div className="max-w-6xl mx-auto px-6 mb-16">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

      {[
        { number: "500+", label: "Happy Customers" },
        { number: "4.9★", label: "Customer Rating" },
        { number: "24/7", label: "Availability" },
        { number: "5+ Years", label: "Service Experience" },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-2">
            {item.number}
          </h3>
          <p className="text-gray-500 text-sm">
            {item.label}
          </p>
        </motion.div>
      ))}

    </div>
  </div>

  {/* WHY CHOOSE US */}
  <div className="max-w-7xl mx-auto px-6">

    <motion.h3
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-4xl font-bold text-center mb-14"
    >
      Why Choose Our Taxi Service
    </motion.h3>

    <div className="grid md:grid-cols-4 gap-8">

      {[
        {
          title: "24/7 Availability",
          desc: "Book anytime, day or night. We're always ready.",
        },
        {
          title: "Professional Drivers",
          desc: "Experienced, polite and well-trained drivers.",
        },
        {
          title: "Clean Vehicles",
          desc: "Hygienic, well-maintained cars for every trip.",
        },
        {
          title: "Instant Booking",
          desc: "Quick confirmations via call or WhatsApp.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -8 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-6 rounded-3xl bg-gray-50 hover:bg-white border shadow-sm hover:shadow-xl transition"
        >
          <h4 className="text-lg font-semibold mb-2">
            {item.title}
          </h4>
          <p className="text-gray-600 text-sm">
            {item.desc}
          </p>
        </motion.div>
      ))}

    </div>

  </div>

</section>

      {/* SERVICES */}
    {/* SERVICES - PREMIUM */}
<section id="services" className="py-32 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <motion.h3
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-4xl font-bold text-center mb-16"
    >
      Our Premium Taxi Services
    </motion.h3>

    <div className="grid md:grid-cols-2 gap-10">

     {[
  {
    title: "Airport Transfers",
    desc: "On-time pickup and drop to Mangalore Airport with zero stress.",
    link: "/airport-taxi",
  },
  {
    title: "Local City Rides",
    desc: "Comfortable travel within Udupi & Manipal anytime you need.",
    link: "/taxi-in-udupi",
  },
  {
    title: "Outstation Trips",
    desc: "Travel to Goa, Dharmasthala and beyond with full comfort.",
    link: "/services",
  },
  {
    title: "Hourly Rentals",
    desc: "Flexible taxi booking for multiple stops and waiting.",
    link: "/services",
  },
].map((service, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ delay: i * 0.1 }}
          className="relative p-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-2xl transition overflow-hidden cursor-pointer"
        >

          {/* subtle glow effect */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-red-500/10 to-transparent"></div>

          <div className="relative z-10">
            <h4 className="text-xl font-semibold mb-3">
              {service.title}
            </h4>

            <p className="text-gray-600 mb-6">
              {service.desc}
            </p>

            <a
            href={service.link}
              className="text-red-600 font-medium hover:underline"
            >
              Book Now →
            </a>
          </div>

        </motion.div>
      ))}

    </div>

  </div>

</section>

      

      {/* TRIPS SECTION */}
     {/* TRIPS - PREMIUM */}
<section id="trips" className="py-28 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    <motion.h3
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-4xl font-bold text-center mb-16"
    >
      Explore Popular Trips
    </motion.h3>

    <div className="grid md:grid-cols-3 gap-10">

      {[
        {
          title: "Udupi to Goa",
          img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        },
        {
          title: "Dharmasthala Temple",
          img: "https://images.unsplash.com/photo-1590608897129-79da98d15969",
        },
        {
          title: "Coastal Family Tours",
          img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        },
      ].map((trip, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          transition={{ delay: i * 0.1 }}
          className="relative h-[320px] rounded-3xl overflow-hidden shadow-xl group"
        >

          {/* Background Image */}
          <img
            src={trip.img}
            className="absolute w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
            <h4 className="text-xl font-semibold mb-2">
              {trip.title}
            </h4>

            <a
              href="tel:+919000000000"
              className="text-sm text-gray-200 group-hover:text-white transition"
            >
              View Trip & Book →
            </a>
          </div>

        </motion.div>
      ))}

    </div>

  </div>

</section>

          


      {/* FLEET */}
      {/* FLEET - PREMIUM */}
<section id="fleet" className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <motion.h3
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-4xl font-bold text-center mb-16"
    >
      Our Premium Fleet
    </motion.h3>

    <div className="grid md:grid-cols-3 gap-10">

      {[
        {
          name: "Sedan",
          desc: "Perfect for city rides and airport transfers",
          img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
        },
        {
          name: "SUV",
          desc: "Spacious rides for families and group travel",
          img: "https://images.unsplash.com/photo-1549921296-3a6b0c1f1f65",
        },
        {
          name: "Premium",
          desc: "Luxury cars for comfort and premium experience",
          img: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
        },
      ].map((car, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          transition={{ delay: i * 0.1 }}
          className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white"
        >

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={car.img}
              className="h-56 w-full object-cover hover:scale-110 transition duration-700"
            />
          </div>

          {/* Content */}
          <div className="p-6 text-center">
            <h4 className="text-xl font-semibold mb-2">
              {car.name} Cars
            </h4>

            <p className="text-gray-600 text-sm mb-4">
              {car.desc}
            </p>

            <a
              href="tel:+919000000000"
              className="text-red-600 font-medium hover:underline"
            >
              Book Now →
            </a>
          </div>

        </motion.div>
      ))}

    </div>

  </div>

</section>




{/* TESTIMONIALS - PREMIUM */}
<section className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <motion.h3
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-4xl font-bold text-center mb-16"
    >
      What Our Customers Say
    </motion.h3>

    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          name: "Rahul Shetty",
          text: "Very professional service. Driver was on time and the car was clean. Highly recommended for airport trips.",
        },
        {
          name: "Ayesha Khan",
          text: "Booked for a Goa trip. Smooth journey, polite driver and very comfortable ride. Will use again.",
        },
        {
          name: "Naveen Kumar",
          text: "Best taxi service in Udupi. Quick booking and fair pricing. Totally satisfied.",
        },
      ].map((review, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          transition={{ delay: i * 0.1 }}
          className="bg-gray-50 p-6 rounded-3xl shadow-md hover:shadow-xl transition border hover:-translate-y-1"
        >

          {/* stars */}
          <div className="text-yellow-400 mb-3">
            ★★★★★
          </div>

          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            “{review.text}”
          </p>

          <h4 className="font-semibold text-sm">
            {review.name}
          </h4>

        </motion.div>
      ))}

    </div>

  </div>

</section>




{/* GOOGLE REVIEWS */}
<section className="py-28 bg-gray-50">

  <div className="max-w-6xl mx-auto px-6 text-center">

    <motion.h3
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-4xl font-bold mb-6"
    >
      Rated Excellent by Our Customers
    </motion.h3>

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-gray-600 mb-10"
    >
      See real reviews from our happy customers on Google
    </motion.p>

    {/* EMBED */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="rounded-3xl overflow-hidden shadow-2xl border"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.119187335874!2d74.75118144017551!3d13.342861306682783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbd27ce127fa7%3A0xe0af20a9c7cfbd15!2sUdupi%20Taxi%20-%20Udupi%20Tours%20and%20Travels!5e0!3m2!1sen!2sin!4v1775884781396!5m2!1sen!2sin"
        className="w-full h-[400px] md:h-[450px]"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </motion.div>

    {/* BUTTON TO OPEN GOOGLE */}
    <a
      href="https://maps.app.goo.gl/GAeLP8hH2qyeudpH7"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-2xl text-sm hover:bg-gray-900 transition"
    >
      View on Google →
    </a>

  </div>

</section>



      {/* SEO + BLOG - PREMIUM */}
<section className="py-28 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    {/* SEO CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto text-center mb-20"
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-6">
        Reliable Taxi Service in Udupi & Manipal
      </h3>

      <p className="text-gray-600 leading-7 text-sm md:text-base">
        We provide professional taxi services across Udupi, Manipal, Kundapura and Mangalore Airport.
        Whether you need an airport transfer, outstation cab to Goa, temple trip to Dharmasthala or
        a comfortable family ride, our service is available 24/7 with experienced drivers and clean vehicles.
      </p>
    </motion.div>


    {/* BLOGS */}
    <div>

      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-14"
      >
        Travel Guides & Tips
      </motion.h3>

      <div className="grid md:grid-cols-3 gap-8">

        {[
          "Udupi to Goa Taxi Fare Guide",
          "Top Places to Visit in Manipal",
          "Airport Taxi Booking Tips",
        ].map((blog, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition border"
          >
            <h4 className="font-semibold text-lg mb-3">
              {blog}
            </h4>

            <p className="text-gray-600 text-sm mb-4">
              Read useful tips and travel insights for your next trip.
            </p>

            <a
                href="/blogs#top"
                className="text-red-600 text-sm font-medium hover:underline"
            >
            Read More →
            </a>
          </motion.div>
        ))}

      </div>

    </div>

  </div>

</section>


{/* FAQ - PREMIUM */}
<section className="py-28 bg-white">

  <div className="max-w-4xl mx-auto px-6">

    <motion.h3
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-4xl font-bold text-center mb-14"
    >
      Frequently Asked Questions
    </motion.h3>

    <div className="space-y-6">

      {[
        {
          q: "How can I book a taxi in Udupi?",
          a: "You can easily book a taxi by calling us directly or sending a message on WhatsApp. We provide quick confirmation within minutes.",
        },
        {
          q: "Do you provide airport taxi service?",
          a: "Yes, we offer reliable airport transfers to and from Mangalore Airport with on-time pickup and drop.",
        },
        {
          q: "Are your taxi services available 24/7?",
          a: "Yes, our taxi services are available 24/7, including early morning and late night bookings.",
        },
        {
          q: "Do you offer outstation trips from Udupi?",
          a: "Yes, we provide outstation taxi services to Goa, Dharmasthala, Mangalore and other nearby destinations.",
        },
        {
          q: "What types of cars are available?",
          a: "We offer a range of vehicles including Sedan, SUV and premium cars depending on your travel needs.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="border rounded-2xl p-6 bg-gray-50 hover:bg-white transition shadow-sm hover:shadow-md"
        >
          <h4 className="font-semibold text-lg mb-2">
            {item.q}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.a}
          </p>
        </motion.div>
      ))}

    </div>

  </div>

</section>








      {/* FINAL CTA - PREMIUM */}
<section id="contact" className="py-28 bg-black text-white text-center relative overflow-hidden">

  {/* subtle glow background */}
  <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10"></div>

  <div className="relative z-10 max-w-3xl mx-auto px-6">

    <motion.h3
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
    >
      Ready to Book Your Ride?
    </motion.h3>

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-gray-300 mb-10 text-lg"
    >
      Get instant confirmation in minutes. Call or WhatsApp us now and travel stress-free.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex flex-col md:flex-row gap-4 justify-center"
    >
      <a
        href="tel:+919000000000"
        className="bg-red-600 hover:bg-red-700 hover:scale-105 transition px-10 py-4 rounded-2xl text-lg font-semibold shadow-2xl"
      >
        📞 Get Taxi Now
      </a>

      <a
        href="https://wa.me/919000000000"
        className="border border-white/30 hover:bg-white hover:text-black transition px-10 py-4 rounded-2xl text-lg"
      >
        Chat on WhatsApp
      </a>
    </motion.div>
    <p className="text-sm text-gray-400 mt-4">
  ⚡ Quick response within minutes • Available 24/7
</p>

  </div>


</section>

    </div>
    </>

  );
}