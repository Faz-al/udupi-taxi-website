import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="min-h-screen">
        <div className="pt-20"></div>
        <Outlet />
        {/* FLOATING CALL BUTTON (MOBILE) */}
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  );
}