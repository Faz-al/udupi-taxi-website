export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 pt-16 pb-10">

      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* BRAND */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              Udupi Tours & Travel
            </h3>

            <div className="w-10 h-[2px] bg-red-600 mb-4"></div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Premium taxi service in Udupi & Manipal offering reliable airport transfers, local rides and comfortable travel experience.
            </p>

            <p className="text-gray-700 text-xs mt-4">
              Available 24/7 • Trusted by 500+ customers
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-gray-300">
              Services
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">

              <li>
                <a href="/taxi-in-udupi" className="hover:text-white transition">
                  Taxi in Udupi
                </a>
              </li>

              <li>
                <a href="/taxi-in-manipal" className="hover:text-white transition">
                  Taxi in Manipal
                </a>
              </li>

              <li>
                <a href="/airport-taxi" className="hover:text-white transition">
                  Airport Taxi
                </a>
              </li>

            </ul>
          </div>

          {/* QUICK LINKS (SEO BOOST) */}
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-gray-300">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">

              <li>
                <a href="/services" className="hover:text-white transition">
                  Our Services
                </a>
              </li>

              <li>
                <a href="#trips" className="hover:text-white transition">
                  Popular Routes
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-gray-300">
              Contact
            </h4>

            <div className="space-y-3 text-sm text-gray-600">

              <a href="tel:+919901159323" className="block hover:text-white transition">
                📞 +91 9901159323
              </a>

              <a href="https://wa.me/919901159323" className="block hover:text-white transition">
                💬 WhatsApp Booking
              </a>

              <p>Available 24/7</p>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="h-px bg-white/10 mb-6"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-700 gap-3">

          <p>
            © 2026 Udupi Tours & Travel. All rights reserved.
          </p>

          {/* YOUR AGENCY CREDIT */}
          <p className="text-gray-600">
            Website by{" "}
            <span className="text-gray-600 hover:text-white transition">
              Acid House Labs
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
}