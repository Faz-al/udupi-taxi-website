import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function FloatingButtons() {
    const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};


const location = useLocation();

let messageText = "Hi, I want to book a taxi";

// SERVICE DETAIL PAGE
if (location.pathname.startsWith("/services/")) {
  const serviceName = location.pathname
    .split("/services/")[1]
    ?.replace(/-/g, " ");
  messageText = `Hi, I'm interested in your ${serviceName} service`;
}

// BLOG DETAIL PAGE
else if (location.pathname.startsWith("/blogs/")) {
  const blogName = location.pathname
    .split("/blogs/")[1]
    ?.replace(/-/g, " ");
  messageText = `Hi, I read your blog "${blogName}" and want to book a taxi`;
}

// SERVICES PAGE
else if (location.pathname === "/services") {
  messageText = "Hi, I want to know about your taxi services";
}

// BLOG PAGE
else if (location.pathname === "/blogs") {
  messageText = "Hi, I was reading your blogs and want to book a taxi";
}

// FINAL ENCODE
const message = encodeURIComponent(messageText);

  return (
    <>
      {/* DESKTOP FLOATING */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50 hidden md:flex">

        {/* Call */}
        <motion.a
          href="tel:+919000000000"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-full shadow-2xl text-sm font-medium"
        >
          <span className="text-lg">📞</span>
          Call Now
        </motion.a>

        {/* WhatsApp */}
        <motion.a
  href={`https://wa.me/919000000000?text=${message}`}
  target="_blank"
  rel="noopener noreferrer"
  variants={pulse}
  animate="animate"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  className="relative flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-full shadow-2xl text-sm font-medium"
>

  {/* ONLINE DOT */}
  <span className="absolute -top-1 -right-1 flex h-3 w-3">
    <span className="absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75 animate-ping"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
  </span>

  <span className="text-lg">💬</span>

  <div className="flex flex-col leading-tight">
    <span>WhatsApp</span>
    <span className="text-[10px] text-green-100">Online now</span>
  </div>

</motion.a>

      </div>

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-0 left-0 w-full flex md:hidden z-50 backdrop-blur-md bg-white/90 border-t">

        <motion.a
          href="tel:+919000000000"
          whileTap={{ scale: 0.97 }}
          className="w-1/2 text-center py-4 font-medium text-black"
        >
          📞 Call Now
        </motion.a>

        <motion.a
  href={`https://wa.me/919000000000?text=${message}`}
  target="_blank"
  rel="noopener noreferrer"
  whileTap={{ scale: 0.97 }}
  className="w-1/2 text-center py-4 font-medium text-green-600 relative flex items-center justify-center gap-2"
>

  <span className="relative flex h-3 w-3">
    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
  </span>

  💬 WhatsApp

</motion.a>

      </div>
    </>
  );
}