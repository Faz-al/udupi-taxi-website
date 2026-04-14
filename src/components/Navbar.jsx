import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Services", path: "/services" },
    { name: "Udupi", path: "/taxi-in-udupi" },
    { name: "Manipal", path: "/taxi-in-manipal" },
    { name: "Airport", path: "/airport-taxi" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
  <img
    src="/logo.webp"
    alt="Udupi Tours and Travels"
    className="h-12 w-auto object-contain"
  />
</Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className={`relative transition ${
                location.pathname === link.path
                  ? "text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {link.name}

              {location.pathname === link.path && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-red-600"
                />
              )}
            </Link>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* PHONE (desktop only) */}
          <a
            href="tel:+919901159323"
            className="hidden md:block text-sm font-medium text-gray-700 hover:text-black"
          >
            +91 9901159323
          </a>

          {/* CTA */}
          <a
            href="tel:+919901159323"
            className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-900 transition shadow-md"
          >
            Book Now
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl ml-2"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-t px-6 py-6 space-y-4"
        >

          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block text-base font-medium ${
                location.pathname === link.path
                  ? "text-black"
                  : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* MOBILE CTA */}
          <a
            href="tel:+919901159323"
            className="block mt-4 bg-black text-white text-center py-3 rounded-full font-semibold"
          >
            Book Now
          </a>

        </motion.div>
      )}
    </motion.nav>
  );
}