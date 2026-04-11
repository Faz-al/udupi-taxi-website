import { Helmet } from "react-helmet-async";

export default function AirportTaxi() {
 
  return (
    <div className="px-6 py-16 md:py-24 max-w-5xl mx-auto">

       <Helmet>
  <title>Udupi to Mangalore Airport Taxi | Fast Pickup</title>
  <meta
    name="description"
    content="Book airport taxi from Udupi to Mangalore with best price and on-time pickup."
  />
</Helmet>

      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Mangalore Airport Taxi Service
      </h1>

      <p className="text-gray-700 mb-6">
        Book reliable airport taxi from Udupi and Manipal to Mangalore Airport.
        We ensure on-time pickup, comfortable ride, and transparent pricing.
      </p>

      <ul className="space-y-2 text-gray-700">
        <li>• Udupi to Airport Taxi</li>
        <li>• Manipal to Airport Taxi</li>
        <li>• Early morning pickup available</li>
        <li>• Professional drivers</li>
      </ul>

      <div className="mt-10 flex gap-4">
        <a href="tel:+919000000000" className="bg-red-600 text-white px-6 py-3 rounded-full">
          Book Airport Taxi
        </a>
      </div>

    </div>
  );
}