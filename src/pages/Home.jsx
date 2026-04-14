import React from "react";
import { useState, useRef } from "react"
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
        "text": "You can easily book a taxi by calling us directly or sending a message on WhatsApp. We provide quick confirmation within minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide airport taxi service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer reliable airport transfers to and from Mangalore Airport with on-time pickup and drop."
      }
    },
    {
      "@type": "Question",
      "name": "Are your taxi services available 24/7?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our taxi services are available 24/7, including early morning and late night bookings"
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer outstation trips from Udupi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide outstation taxi services to Goa, Dharmasthala, Mangalore and other nearby destinations."
      }
    },
    {
      "@type": "Question",
      "name": "What types of cars are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a range of vehicles including Sedan, SUV and premium cars depending on your travel needs."
      }
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TravelAgency"],
  "name": "Udupi Tours and Travels",
  "image": "https://www.udupitaxi.co.in/og-image.jpg",
  "telephone": "+91 9901159323",
  "areaServed": {
    "@type": "Place",
    "name": "Udupi, Manipal, Karnataka",
    
  },

  "aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "120"
},


  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Udupi",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "url": "https://www.udupitaxi.co.in",
  "priceRange": "₹₹",
  "availableLanguage": ["English", "Hindi", "Kannada"]
};



const [activeIndex, setActiveIndex] = useState(0)
const sliderRef = useRef(null)

const handleScroll = () => {
  const container = sliderRef.current
  if (!container) return

  const scrollLeft = container.scrollLeft
  const fullWidth = container.scrollWidth - container.clientWidth

  const percentage = scrollLeft / fullWidth

  const totalItems = 3 // number of cards
  const index = Math.round(percentage * (totalItems - 1))

  setActiveIndex(index)
}




  return (
  <>
   <Helmet>

    <title>Taxi Service in Udupi & Manipal | Airport Taxi, Local & Outstation Cabs</title>
<link rel="canonical" href="https://www.udupitaxi.co.in" />
<meta 
  name="description" 
  content="Looking for a reliable taxi in Udupi or Manipal? Book airport taxi, local rides and outstation cabs with Udupi Tours and Travels. 24/7 service, professional drivers and instant booking confirmation." 
/>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

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
{/* HERO - ULTRA PREMIUM */}
<section className="relative h-[95vh] flex items-center justify-center text-white overflow-hidden">

  {/* Background Image */}
  <motion.img
  initial={{ scale: 1.1 }}
  animate={{ scale: 1 }}
  transition={{ duration: 2.5, ease: "easeOut" }}
  src="/hero.jpg"
  alt="Taxi service in Udupi with premium car"
  loading="eager"
  fetchpriority="high"
  width="1920"
  height="1080"
  className="absolute w-full h-full object-cover"
/>

  {/* Softer Overlay */}
  <div className="absolute w-full h-full bg-black/60"></div>

  {/* Premium Gradient Depth */}
  <div className="absolute w-full h-full bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl px-6 text-center">

    {/* SMALL LABEL */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-xs tracking-[0.3em] uppercase text-gray-300 mb-6"
    >
      Udupi Tours and Travels • Taxi Service in Udupi & Manipal
    </motion.p>

    {/* HEADLINE */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight mb-6"
    >
      Premium Taxi Service in Udupi
      <br />
      Travel with Udupi Tours and Travels
    </motion.h1>

    {/* SUBTEXT */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7 }}
      className="text-base md:text-lg text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed"
    >
      Book reliable taxi service in Udupi and Manipal for airport transfers, local rides and outstation trips. We provide the best taxi service in Udupi with professional drivers and instant booking.
    </motion.p>

      <p className="text-sm text-gray-300 mt-4">
  Serving Udupi, Manipal & Mangalore Airport with trusted taxi service
</p>



    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.7 }}
      className="flex flex-col md:flex-row gap-4 justify-center"
    >
      <a
        href="tel:+919901159323"
        className="bg-red-600 hover:bg-red-700 px-10 py-4 rounded-2xl text-base font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition hover:scale-[1.03]"
      >
        Get Taxi Now
      </a>

      <a
        href="https://wa.me/919901159323"
        className="border border-white/30 backdrop-blur-md hover:bg-white hover:text-black px-10 py-4 rounded-2xl text-base transition"
      >
        WhatsApp Booking
      </a>
    </motion.div>

    {/* TRUST LINE */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-gray-300 tracking-wide"
    >
      <span>500+ Customers</span>
      <span>•</span>
      <span>4.9 Rating</span>
      <span>•</span>
      <span>24/7 Service</span>
    </motion.div>

  </div>
</section>

      {/* TRUST BAR */}
    {/* TRUST + WHY US - ULTRA PREMIUM V2 */}
<section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">

  {/* subtle background glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.06),transparent_60%)]"></div>

  {/* SECTION INTRO */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="max-w-3xl mx-auto text-center mb-20 px-6 relative z-10"
  >
    <p className="text-xs tracking-[0.35em] uppercase text-gray-700 mb-4">
      Why Customers Trust Us
    </p>

    <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
  Trusted Taxi Service in Udupi
</h2>
  </motion.div>

  {/* TRUST STATS (GLASS CARD STYLE) */}
  <div className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/70 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">

      {[
        { number: "500+", label: "Happy Customers" },
        { number: "4.9★", label: "Customer Rating" },
        { number: "24/7", label: "Availability" },
        { number: "5+ Years", label: "Experience" },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="text-center"
        >
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-1">
            {item.number}
          </h3>

          <p className="text-gray-700 text-xs uppercase tracking-wider">
            {item.label}
          </p>
        </motion.div>
      ))}

    </div>
  </div>

  {/* WHY CHOOSE US */}
  <div className="max-w-7xl mx-auto px-6 relative z-10">

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-4xl font-semibold text-center mb-16"
    >
      Why Choose Our Taxi Service
    </motion.h2>

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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          transition={{ delay: i * 0.1 }}
          className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition duration-300 overflow-hidden"
        >

          {/* subtle hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-red-500/5 via-transparent to-transparent"></div>

          <div className="relative z-10">

            {/* accent */}
            <div className="w-12 h-[2px] bg-red-600 mb-5"></div>

            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              {item.desc}
            </p>

          </div>

        </motion.div>
      ))}

    </div>

  </div>

</section>

      {/* SERVICES */}
   {/* SERVICES - ULTRA PREMIUM */}
<section id="services" className="py-32 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION INTRO */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto text-center mb-20"
    >
      <p className="text-xs tracking-[0.3em] uppercase text-gray-700 mb-4">
         Our Services
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
  Premium Taxi Services in Udupi
</h2>

      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
        Whether it’s airport transfers, local rides, or outstation trips —
        we provide reliable and comfortable taxi services tailored to your needs.
      </p>
    </motion.div>

    {/* SERVICES GRID */}
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
          whileHover={{ y: -6 }}
          transition={{ delay: i * 0.1 }}
          className="group relative p-10 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition duration-300 overflow-hidden"
        >

          {/* subtle hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-red-500/5 via-transparent to-transparent"></div>

          <div className="relative z-10">

            {/* TOP LINE */}
            <div className="w-12 h-[2px] bg-red-600 mb-6"></div>

            {/* TITLE */}
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              {service.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              {service.desc}
            </p>

            {/* CTA */}
            <div className="flex items-center justify-between">

              <a
                href={service.link}
                className="text-red-600 font-medium text-sm md:text-base flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Book Service
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* subtle arrow circle */}
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-red-500 transition">
                <span className="text-sm group-hover:text-red-600">→</span>
              </div>

            </div>

          </div>

        </motion.div>
      ))}

    </div>

  </div>

</section>
      

{/* TRIPS - ULTRA PREMIUM (MOBILE SLIDER + DESKTOP GRID) */}
<section id="trips" className="py-32 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto text-center mb-16"
    >
      <p className="text-xs tracking-[0.35em] uppercase text-gray-700 mb-4">
         Popular Routes
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Travel Routes from Udupi
      </h2>

      <p className="text-gray-700 text-sm md:text-base">
        Explore the most preferred routes with smooth and comfortable rides.
      </p>
    </motion.div>

    {/* MOBILE SLIDER */}
    <div className="md:hidden">

      <div
  ref={sliderRef}
  onScroll={handleScroll}
  className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6"
>

        {[
          {
            title: "Udupi to Goa",
            tag: "Most Popular",
            img: "/goa.jpg"
,
          },
          {
            title: "Dharmasthala Temple",
            tag: "Temple Trip",
            img: "/dharmasthala.jpg",
          },
          {
            title: "Coastal Family Tours",
            tag: "Family Travel",
            img: "/coastal.jpg",
          },
        ].map((trip, i) => (
          <div
            key={i}
            className="group min-w-[85%] snap-center relative h-[300px] rounded-3xl overflow-hidden shadow-lg"
          >

            {/* IMAGE */}
            <img
              src={trip.img}
              alt={`Taxi travel route ${trip.title} from Udupi`}
              loading="lazy"
              width="800"
              height="500"
              className="absolute w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-red-500/10 via-transparent to-transparent"></div>
              
            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col justify-between p-5">

           <div>
  <div className="w-8 h-[2px] bg-red-600 mb-2"></div>
  <span className="text-[10px] uppercase tracking-[0.3em] text-gray-300">
    {trip.tag}
  </span>
</div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
  {trip.title}
</h3>

                <div className="flex justify-between items-center">
                  <span className="text-white text-sm group-hover:text-red-400 transition">
  Book Trip →
</span>
                  <span className="text-xs text-gray-300">24/7</span>
                </div>
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* DOT INDICATORS */}
      <div className="flex justify-center gap-2 mt-2">
  {[0, 1, 2].map((i) => (
    <div
      key={i}
      className={`w-2 h-2 rounded-full transition-all duration-300 ${
        activeIndex === i
          ? "bg-red-600 scale-110"
          : "bg-gray-300"
      }`}
    />
  ))}
</div>
</div> 

    {/* DESKTOP GRID */}
    <div className="hidden md:grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Udupi to Goa",
          tag: "Most Popular",
          img: "/goa.jpg"
        },
        {
          title: "Dharmasthala Temple",
          tag: "Temple Trip",
          img: "/dharmasthala.jpg",
        },
        {
          title: "Coastal Family Tours",
          tag: "Family Travel",
          img: "/coastal.jpg",
        },
      ].map((trip, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -6 }}
          className="group relative h-[340px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition"
        >

          <img
  src={trip.img}
  alt={`Taxi travel route ${trip.title} from Udupi`}
  loading="lazy"
  width="800"
  height="500"
  className="absolute w-full h-full object-cover group-hover:scale-110 transition duration-700"
/>

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

          <div className="relative z-10 h-full flex flex-col justify-between p-6">

           <div>
  <div className="w-8 h-[2px] bg-red-600 mb-2"></div>
  <span className="text-[10px] uppercase tracking-[0.3em] text-gray-300">
    {trip.tag}
  </span>
</div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
  {trip.title}
</h3>

              <div className="flex justify-between items-center">
               <span className="text-white text-sm group-hover:text-red-400 transition">
  Book Trip →
</span>
                <span className="text-xs text-gray-300">24/7</span>
              </div>
            </div>

          </div>

        </motion.div>
      ))}

    </div>

  </div>

</section>

          


      {/* FLEET */}
     {/* FLEET - ULTRA PREMIUM V2 */}
<section id="fleet" className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,0,0,0.05),transparent_60%)]"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto text-center mb-20"
    >
      <p className="text-xs tracking-[0.3em] uppercase text-gray-700 mb-4">
         Our Fleet
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
        Choose Your Comfortable Ride
      </h2>

      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
        Well-maintained vehicles for every type of journey — from daily rides to long trips.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          name: "Toyota Etios (Sedan)",
          desc: "Comfortable sedan perfect for city rides, airport transfers and daily travel.",
          img: "https://i.pinimg.com/736x/e6/20/ca/e620caf702e909bccbf4f19d7132f931.jpg",
        },
        {
          name: "Maruti Ertiga (MPV)",
          desc: "Spacious option ideal for families and group travel with extra comfort.",
          img: "https://content.carlelo.com/media/models/Ertiga/base/ertiga-1.webp",
        },
        {
          name: "Toyota Innova (SUV)",
          desc: "Premium SUV for long-distance trips, airport travel and luxury comfort.",
          img: "https://static-cdn.cars24.com/prod/new-car-cms/Toyota_Innova_Crysta_exterior_9_6c3f5e4a72.png",
        },
      ].map((car, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          transition={{ delay: i * 0.1 }}
          className="group relative rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-2xl transition duration-500"
        >

          <div className="relative h-56 overflow-hidden">
            <img
  src={car.img}
  alt={`${car.name} taxi service in Udupi for airport and local travel`}
  loading="lazy"
  width="600"
  height="400"
  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700"
/>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-80"></div>

            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">
  {car.name}
</h3>
            </div>
          </div>

          <div className="p-6">

            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {car.desc}
            </p>

            <div className="h-px bg-gray-100 mb-5"></div>

            <div className="flex items-center justify-between">

              <a
                href="tel:+919901159323"
                className="text-red-600 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Book Now
                <span className="group-hover:translate-x-1 transition">
                  →
                </span>
              </a>

              <div className="text-xs text-gray-700">
  Available 24/7
</div>

            </div>

          </div>

        </motion.div>
      ))}

    </div>

  </div>

</section>



{/* TESTIMONIALS - ULTRA PREMIUM */}
<section className="py-32 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION INTRO */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto text-center mb-20"
    >
      <p className="text-xs tracking-[0.3em] uppercase text-gray-700 mb-4">
          Customer Reviews
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold">
  Trusted Taxi Service in Udupi
</h2>

      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
        Real feedback from customers who have experienced our service.
      </p>
    </motion.div>

    {/* REVIEWS GRID */}
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
          className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition duration-300"
        >

          {/* TOP ROW */}
          <div className="flex items-center justify-between mb-4">

            {/* NAME */}
            <p className="font-semibold text-sm tracking-wide">
  {review.name}
</p>

            {/* RATING */}
            <div className="text-yellow-400 text-sm tracking-wider">
              ★★★★★
            </div>

          </div>

          {/* REVIEW TEXT */}
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            “{review.text}”
          </p>

          {/* FOOTER */}
          <div className="flex items-center justify-between text-xs text-gray-700">
            <span>Verified Customer</span>

            <p className="text-xs tracking-[0.3em] uppercase text-gray-700 mb-4">
                Google Reviews
            </p>

          </div>

        </motion.div>
      ))}

    </div>

  </div>

</section>



{/* GOOGLE REVIEWS - ULTRA PREMIUM */}
<section className="py-32 bg-gray-50">

  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* SECTION INTRO */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="mb-16"
    >
      <p className="text-xs tracking-[0.3em] uppercase text-gray-700 mb-4">
         Google Reviews
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Rated 4.9 by Our Customers
      </h2>

      <p className="text-gray-700 text-sm md:text-base">
        See what our customers are saying about their experience with our taxi service.
      </p>
    </motion.div>

    {/* REVIEW SUMMARY */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="mb-12 flex flex-col items-center gap-3"
    >
      <div className="text-4xl font-semibold">4.9</div>

      <div className="text-yellow-400 text-lg tracking-wider">
        ★★★★★
      </div>

      <p className="text-gray-700 text-sm">
        Based on 100+ Google Reviews
      </p>
    </motion.div>

    {/* MAP EMBED */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
    >
      <iframe
        title="Udupi taxi service location on Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.119187335874!2d74.75118144017551!3d13.342861306682783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbd27ce127fa7%3A0xe0af20a9c7cfbd15!2sUdupi%20Taxi%20-%20Udupi%20Tours%20and%20Travels!5e0!3m2!1sen!2sin!4v1775884781396!5m2!1sen!2sin"
        className="w-full h-[420px] md:h-[480px]"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </motion.div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
    >
      <a
        href="https://maps.app.goo.gl/GAeLP8hH2qyeudpH7"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white px-8 py-3 rounded-2xl text-sm hover:bg-gray-900 transition"
      >
        View All Reviews
      </a>

      <a
        href="tel:+919901159323"
        className="border border-gray-300 px-8 py-3 rounded-2xl text-sm hover:bg-black hover:text-white transition"
      >
        Book Your Ride
      </a>
    </motion.div>

  </div>

</section>



      {/* SEO + BLOG - ULTRA PREMIUM */}
<section className="py-32 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    {/* SEO CONTENT BLOCK */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto text-center mb-20"
    >
      <p className="text-xs tracking-[0.3em] uppercase text-gray-600 mb-4">
        About Our Service
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
        Taxi Service in Udupi & Manipal – Airport, Local & Outstation Rides
      </h2>

      <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
  Udupi Tours and Travels offers professional taxi services across 
  <a href="/taxi-in-udupi" className="text-red-600">Udupi</a>, 
  <a href="/taxi-in-manipal" className="text-red-600">Manipal</a>, 
  Kundapura and 
  <a href="/airport-taxi" className="text-red-600">Mangalore Airport</a>.  

  We are known as one of the best taxi services in Udupi for airport taxi, local rides and outstation trips with professional drivers and well-maintained cars.  

  Whether you need an airport transfer, outstation cab to Goa, temple trip to Dharmasthala or a comfortable family ride,
  our service is available 24/7 with experienced drivers and reliable support.
</p>
    </motion.div>


    {/* BLOG SECTION */}
    <div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gray-600 mb-4">
          Travel Guides
        </p>

        <h3 className="text-3xl font-semibold">
          Travel Tips & Insights
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">

        {[
          "Udupi to Goa Taxi Fare Guide",
          "Top Places to Visit in Manipal",
          "Airport Taxi Booking Tips",
        ].map((blog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition duration-300"
          >

            {/* accent */}
            <div className="w-10 h-[2px] bg-red-600 mb-4"></div>

            <h3 className="font-semibold text-lg mb-3">
              {blog}
            </h3>

            <p className="text-gray-700 text-sm mb-6 leading-relaxed">
              Read useful travel tips, fare guides and insights to plan your journey better.
            </p>

            <a
              href="/blogs#top"
              className="inline-flex items-center gap-2 text-red-600 text-sm font-medium group-hover:gap-3 transition-all"
            >
              Read Article
              <span className="group-hover:translate-x-1 transition">
                →
              </span>
            </a>

          </motion.div>
        ))}

      </div>

    </div>

  </div>

</section>


{/* FAQ - PREMIUM */}
{/* FAQ - ULTRA PREMIUM */}
<section className="py-32 bg-white">

  <div className="max-w-5xl mx-auto px-6">

    {/* SECTION INTRO */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <p className="text-xs tracking-[0.3em] uppercase text-gray-700 mb-4">
        FAQs
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Frequently Asked Questions
      </h2>

      <p className="text-gray-700 text-sm md:text-base">
        Everything you need to know about our taxi service in Udupi.
      </p>
    </motion.div>

    {/* FAQ LIST */}
    <div className="space-y-4">

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
          transition={{ delay: i * 0.05 }}
          className="group border border-gray-100 rounded-2xl px-6 py-5 bg-white hover:bg-gray-50 transition duration-300"
        >

          <div className="flex items-start justify-between gap-4">

            <h3 className="font-medium text-base md:text-lg">
              {item.q}
            </h3>

            <span className="text-gray-300 group-hover:text-red-600 transition">
              +
            </span>

          </div>

          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            {item.a}
          </p>

        </motion.div>
      ))}

    </div>

  </div>

</section>








      {/* FINAL CTA - ULTRA PREMIUM */}
<section id="contact" className="py-32 bg-black text-white text-center relative overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-red-600/20"></div>

  {/* SUBTLE NOISE EFFECT (premium feel) */}
  <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

  <div className="relative z-10 max-w-3xl mx-auto px-6">

    {/* LABEL */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-xs tracking-[0.3em] uppercase text-gray-300 mb-4"
    >
      Book Your Ride Now
    </motion.p>

    {/* HEADLINE */}
    <motion.h3
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-semibold mb-6 leading-tight"
    >
      Best Taxi Service in Udupi & Manipal
    </motion.h3>

    {/* SUBTEXT */}
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-gray-300 mb-10 text-base md:text-lg leading-relaxed"
    >
      Get instant booking confirmation in minutes for taxi service in Udupi, Manipal and Mangalore Airport. Safe, reliable and available 24/7 for all your travel needs.
    </motion.p>

    {/* CTA BUTTONS */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex flex-col md:flex-row gap-4 justify-center"
    >

      <a
        href="tel:+919901159323"
        className="bg-red-600 hover:bg-red-700 px-10 py-4 rounded-2xl text-base font-semibold shadow-[0_10px_40px_rgba(255,0,0,0.25)] transition hover:scale-[1.03]"
      >
        Call Now & Book Taxi
      </a>

      <a
        href="https://wa.me/919901159323"
        className="border border-white/30 backdrop-blur-md hover:bg-white hover:text-black px-10 py-4 rounded-2xl text-base transition"
      >
        Book on WhatsApp
      </a>

    </motion.div>

    {/* TRUST LINE */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-8 text-sm text-gray-300"
    >
      ⚡ Quick response • 500+ happy customers • 4.9 rating
    </motion.div>

  </div>

</section>

    </div>
    </>

  );
}