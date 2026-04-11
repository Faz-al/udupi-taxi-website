export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">

        <div>
          <h3 className="font-semibold mb-3">Udupi Tours & Travel</h3>
          <p className="text-gray-400">
            Premium taxi service in Udupi, Manipal & airport routes.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Taxi in Udupi</li>
            <li>Taxi in Manipal</li>
            <li>Airport Taxi</li>
            <li>Outstation Trips</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">📞 +91 9000000000</p>
          <p className="text-gray-400">Available 24/7</p>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-8 text-xs">
        © 2026 Udupi Tours & Travel
      </div>

    </footer>
  );
}